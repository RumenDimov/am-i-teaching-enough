'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // You could log the error to an error reporting service here
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-surface p-4">
      <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8">
        {/* Error Illustration */}
        <div className="space-y-3 sm:space-y-4">
          <div className="text-5xl sm:text-6xl">⚠️</div>
        </div>

        {/* Message */}
        <div className="space-y-3 sm:space-y-4 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            Something Went Wrong
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-md mx-auto">
            We encountered an unexpected error. Don't worry - we've saved your progress locally.
          </p>
        </div>

        {/* Technical details (for development) */}
        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-left max-w-lg mx-auto">
            <p className="font-semibold text-red-800 mb-2">Error Details (Dev Only):</p>
            <code className="text-sm text-red-600 break-all">{error.message}</code>
          </div>
        )}

        {/* Helpful suggestions */}
        <div className="bg-surface rounded-lg p-4 sm:p-6 text-left max-w-md mx-auto">
          <p className="font-semibold text-text-primary mb-3 text-sm sm:text-base">What you can try:</p>
          <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Click "Try Again" to reload this page</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Your assessment progress is saved - you won't lose your work</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>If the problem persists, try clearing your browser cache</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Button
            variant="default"
            size="lg"
            onClick={reset}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Try Again
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/'}
            className="w-full sm:w-auto text-sm sm:text-base"
          >
            <Home className="mr-2 h-4 w-4" />
            Go Home
          </Button>
        </div>

        {/* Footer note */}
        <p className="text-xs sm:text-sm text-text-secondary pt-2 sm:pt-4">
          If this error continues, please try accessing the site from a different browser
        </p>
      </div>
    </div>
  );
}
