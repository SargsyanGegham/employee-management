// Import Axios error type for type checking API errors
import { AxiosError } from 'axios';

/**
 * API error interface that standardizes error structure throughout the application
 * @property {string} message - Human-readable error message
 * @property {number} [status] - HTTP status code if available
 * @property {unknown} [data] - Additional error data from the API response
 * @property {unknown} originalError - Original error object for debugging
 */
export interface ApiError {
  message: string;
  status?: number;
  data?: unknown;
  originalError: unknown;
}

/**
 * Parses unknown error types into a standardized ApiError format
 * Handles different error types including Axios errors, standard Error objects, and strings
 * @param {unknown} error - The caught error of unknown type
 * @returns {ApiError} Standardized error object with consistent structure
 */
export function parseApiError(error: unknown): ApiError {
  // Default error structure used when error type cannot be determined
  const defaultError: ApiError = {
    message: 'An unexpected error occurred',
    originalError: error,
  };

  // Handle Axios HTTP errors with response data
  if (error instanceof AxiosError) {
    return {
      message: error.response?.data?.message || error.message || 'Request failed',
      status: error.response?.status,
      data: error.response?.data,
      originalError: error,
    };
  }

  // Handle standard JavaScript Error objects
  if (error instanceof Error) {
    return {
      message: error.message,
      originalError: error,
    };
  }

  // Handle string errors (less common but possible)
  if (typeof error === 'string') {
    return {
      message: error,
      originalError: error,
    };
  }

  // Return default error for any unhandled error types
  return defaultError;
}