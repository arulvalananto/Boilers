import { ErrorInfo } from 'react'

export type ErrorBoundaryState = {
    /**
     * Indicates whether an error has been caught.
     */
    hasError: boolean

    /**
     * The error object that was caught (if an error occurred).
     */
    error: Error | null

    /**
     * Additional error information (if available).
     */
    errorInfo: ErrorInfo | null
}