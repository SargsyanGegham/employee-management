import { useState, useEffect } from 'react';

/**
 * Custom hook that debounces a value
 * Useful for search inputs to prevent excessive filtering/re-renders
 * @param value - The value to debounce
 * @param delay - Delay in milliseconds (default: 300ms)
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Set a timer to update the debounced value after the delay
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clean up the timer if value changes before delay ends
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}