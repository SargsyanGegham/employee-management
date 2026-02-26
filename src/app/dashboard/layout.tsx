'use client';

import { useAuth } from '@/providers/AuthProvider';
import { AppBar, Toolbar, Typography, Container, Button } from '@mui/material';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Dashboard layout component that provides the main structure for authenticated pages
 * Includes top navigation bar with logout button and wraps child content in a container
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to render in the layout
 * @returns {JSX.Element} Dashboard layout with navigation and content area
 */
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { logout, isAuthenticated } = useAuth()

  /**
   * Handles user logout action by calling the logout function from auth context
   */
  const handleLogOut = () => {
    logout()
  }

  // Redirect to login page if user is not authenticated
  useEffect(() => {
    if(!isAuthenticated) {
      redirect('/login')
    }
  }, [isAuthenticated])

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">Dashboard</Typography>
          <Button onClick={handleLogOut} color="inherit" variant="outlined">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {children}
      </Container>
    </>
  );
}