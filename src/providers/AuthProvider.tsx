// Mark this component as a Client Component for Next.js
'use client'

import { createContext, useContext, useState } from 'react'
import {  useRouter } from 'next/navigation'
import { User } from '@/features/auth/services/authService'

/**
 * Authentication context type definition
 * @property {User | null} user - Current authenticated user or null
 * @property {boolean} isAuthenticated - Whether user is authenticated
 * @property {function} login - Function to authenticate user
 * @property {function} logout - Function to logout user
 */
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (user: User) => void
  logout: () => void
}

// Create context with null initial value
const AuthContext = createContext<AuthContextType | null>(null)

/**
 * Authentication provider component that wraps the application
 * Manages user authentication state and provides login/logout functionality
 * Persists user data in localStorage for session maintenance
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with auth context
 * @returns {JSX.Element} Auth provider with context value
 */
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize user state from localStorage on client side
  const [user, setUser] = useState<User | null>(() => {
    // Skip during server-side rendering
    if (typeof window === 'undefined') return null
    const storedUser = localStorage.getItem('user')
    return storedUser ? JSON.parse(storedUser) : null
  })

  // Initialize authentication status from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    const storedUser = localStorage.getItem('user')
    return !!storedUser
  })

  const router = useRouter()

  /**
   * Authenticates user and stores session data
   * Saves user data to localStorage and redirects to home page
   * @param {User} userData - User data from authentication service
   */
  const login = (userData: User) => {
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    router.push('/')
  }

  /**
   * Logs out current user and clears session data
   * Removes user data from localStorage and redirects to login page
   */
  const logout = () => {
    localStorage.removeItem('user')
    setUser(null)
    setIsAuthenticated(false)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

/**
 * Custom hook to use authentication context
 * Provides access to auth state and methods throughout the application
 * @returns {AuthContextType} Authentication context value
 * @throws {Error} If used outside of AuthProvider
 */
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used inside AuthProvider')
  return context
}