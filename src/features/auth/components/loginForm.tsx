// Mark this component as a Client Component for Next.js
'use client'

import { useState } from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { authService } from '@/features/auth/services/authService'
import { useAuth } from '@/providers/AuthProvider'
import { AxiosError } from 'axios'
import Input from '@/components/Input'
import Button from '@/components/Button'

/**
 * Login form component that provides authentication form
 * Handles user login with email/password and manages authentication state
 * @returns {JSX.Element} Login form with email, password fields and error handling
 */
export default function LoginForm() {
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  /**
   * Handles form submission for user login
   * Attempts to authenticate user with provided credentials
   * Updates error state if authentication fails
   * @param {React.SubmitEvent} e - Form submission event
   */
  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault()
    setError(null)
    
    try {
      const user = await authService.login({ email, password })
      login(user)
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data?.message || error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unexpected error occurred');
      }
  }
  }

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Paper sx={{ p: 4, width: 400 }}>
        <Typography variant="h5" mb={2}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <Input
            fullWidth
            label="Email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            fullWidth
            type="password"
            label="Password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}

          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  )
}