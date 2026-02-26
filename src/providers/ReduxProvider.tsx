// Mark this component as a Client Component for Next.js
'use client';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';

/**
 * Redux provider component that wraps the application with Redux store
 * Makes the Redux store available to all nested components
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap with Redux provider
 * @returns {JSX.Element} Redux Provider component with configured store
 */
export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}