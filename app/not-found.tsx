import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-surface p-4">
      <div className="max-w-2xl w-full text-center space-y-6 sm:space-y-8">
        {/* 404 Illustration */}
        <div className="space-y-3 sm:space-y-4">
          <div className="text-7xl sm:text-8xl md:text-9xl font-bold text-primary opacity-20">404</div>
          <div className="text-5xl sm:text-6xl">🤔</div>
        </div>

        {/* Message */}
        <div className="space-y-3 sm:space-y-4 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
            Page Not Found
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-md mx-auto">
            We couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>
        </div>

        {/* Helpful suggestions */}
        <div className="bg-surface rounded-lg p-4 sm:p-6 text-left max-w-md mx-auto">
          <p className="font-semibold text-text-primary mb-3 text-sm sm:text-base">What you can do:</p>
          <ul className="space-y-2 text-text-secondary text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Check the URL for typos</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Go back to the homepage and start fresh</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary mt-1 flex-shrink-0">•</span>
              <span>Start a new assessment</span>
            </li>
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <Link href="/" className="w-full sm:w-auto">
            <Button variant="default" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Button>
          </Link>
          <Link href="/assessment" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
              <Search className="mr-2 h-4 w-4" />
              Start Assessment
            </Button>
          </Link>
        </div>

        {/* Footer note */}
        <p className="text-xs sm:text-sm text-text-secondary pt-2 sm:pt-4">
          If you believe this is an error, please try refreshing the page
        </p>
      </div>
    </div>
  );
}
