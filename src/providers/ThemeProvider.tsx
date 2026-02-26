// Mark this component as a Client Component for Next.js
'use client';

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/lib/style/theme';

/**
 * Theme provider component that wraps the application with Material-UI theme
 * Applies custom theme configuration and provides CSS baseline for consistent styling
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with theme provider
 * @returns {JSX.Element} Material-UI ThemeProvider with CSS baseline
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline normalizes styles and applies theme defaults */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}