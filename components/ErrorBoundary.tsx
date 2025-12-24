'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You could log to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-surface p-4">
          <div className="max-w-md w-full text-center space-y-4 sm:space-y-6">
            <div className="text-5xl sm:text-6xl">😔</div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary px-4">
              Oops! Something went wrong
            </h1>
            <p className="text-sm sm:text-base text-text-secondary px-4">
              We encountered an unexpected error. Don't worry - your progress has been saved locally.
            </p>
            <div className="bg-surface rounded-lg p-4 text-xs sm:text-sm text-left">
              <p className="font-semibold text-text-primary mb-2">What you can try:</p>
              <ul className="space-y-1 text-text-secondary">
                <li>• Refresh the page</li>
                <li>• Clear your browser cache</li>
                <li>• Try a different browser</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                variant="default"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Refresh Page
              </Button>
              <Button
                onClick={() => window.location.href = '/'}
                variant="outline"
                className="w-full sm:w-auto text-sm sm:text-base"
              >
                Go Home
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
