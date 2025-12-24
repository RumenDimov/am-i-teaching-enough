'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useToast } from '@/components/ui/toast';
import { Assessment } from '@/lib/types';
import {
  getRatingBand,
  getEncouragingMessage,
  getCategoryFeedback,
} from '@/lib/scoring';
import { categoryNames, categoryEmojis } from '@/lib/skills-data';
import { Share2, Download, Home, RefreshCw } from 'lucide-react';

// Simple circular progress component
function CircularProgress({ value, size = 200 }: { value: number; size?: number }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  const strokeWidth = size < 180 ? 10 : 12;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10B981" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute text-center">
        <div className={`${size < 180 ? 'text-4xl' : 'text-5xl'} font-bold text-primary`}>{value}%</div>
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const params = useParams();
  const { showToast } = useToast();
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    loadAssessment();
  }, [params.id]);

  async function loadAssessment(retryCount = 0) {
    try {
      setError(false);
      setLoading(true);

      const response = await fetch(`/api/assessment/${params.id}`);

      if (response.ok) {
        const data = await response.json();
        setAssessment(data);
      } else if (response.status === 404) {
        setError(true);
        showToast('Assessment not found. The link may be invalid or expired.', 'error');
      } else {
        setError(true);
        showToast('Failed to load your results. Please try again.', 'error');
      }
    } catch (error) {
      // Network error - retry logic
      if (retryCount < 2) {
        showToast(`Connection failed. Retrying... (${retryCount + 1}/2)`, 'info');
        setTimeout(() => loadAssessment(retryCount + 1), 2000);
      } else {
        setError(true);
        showToast('Unable to load results. Please check your internet connection.', 'error');
      }
    } finally {
      setLoading(false);
    }
  }

  const handleShare = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      showToast('Link copied to clipboard!', 'success');
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      showToast('Failed to copy link. Please copy it manually from the address bar.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold text-primary mb-2">
            Calculating your results...
          </div>
          <p className="text-text-secondary">Just a moment!</p>
        </div>
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-surface p-4">
        <div className="text-center max-w-md space-y-4 sm:space-y-6">
          <div className="text-5xl sm:text-6xl">😕</div>
          <h1 className="text-xl sm:text-2xl font-bold text-text-primary px-4">
            Unable to Load Results
          </h1>
          <p className="text-sm sm:text-base text-text-secondary px-4">
            We couldn't load your assessment results. This might be because the link is invalid or your internet connection is unstable.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button onClick={() => loadAssessment()} variant="default" className="w-full sm:w-auto text-sm sm:text-base">
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Link href="/" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-sm sm:text-base">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!assessment) {
    return null;
  }

  const { overall, categories } = assessment.results;
  const rating = getRatingBand(overall);
  const encouragingMessage = getEncouragingMessage(overall, assessment.year_group);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-surface">
      {/* Header */}
      <header className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
            <Home className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            Home
          </Button>
        </Link>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8 pb-12 sm:pb-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Overall Score Section */}
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="flex justify-center">
              <CircularProgress value={overall} size={window.innerWidth < 640 ? 160 : 200} />
            </div>

            <div className="space-y-2 px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                You're Teaching More Than You Think
              </h1>
              <div className="text-xl sm:text-2xl font-semibold" style={{ color: rating.color.replace('text-', '') }}>
                {rating.band}
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-primary-light border-2 border-primary/20 rounded-lg p-4 sm:p-6">
              <p className="text-base sm:text-lg text-text-primary leading-relaxed">
                {encouragingMessage}
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 sm:p-6 max-w-2xl mx-auto">
              <h3 className="font-semibold text-text-primary mb-3 text-sm sm:text-base">Why This Matters:</h3>
              <ul className="text-left space-y-2 text-text-secondary text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">→</span>
                  <span>School children often don't master all these skills either</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">→</span>
                  <span>Learning happens in bursts - gaps now often fill in later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2 flex-shrink-0">→</span>
                  <span>Your one-to-one attention means deeper understanding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary text-center px-4">
              Where You're Making Real Progress
            </h2>

            <div className="grid gap-4 sm:gap-6">
              {Object.entries(categories).map(([category, score]) => (
                <Card key={category} className="p-4 sm:p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xl sm:text-2xl flex-shrink-0">{categoryEmojis[category]}</span>
                        <h3 className="text-base sm:text-xl font-semibold text-text-primary truncate">
                          {categoryNames[category]}
                        </h3>
                      </div>
                      <div className="text-xl sm:text-2xl font-bold text-primary flex-shrink-0">{score}%</div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 sm:h-4 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                        style={{ width: `${score}%` }}
                      />
                    </div>

                    <p className="text-sm sm:text-base text-text-secondary italic">
                      {getCategoryFeedback(category, score)}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* What This Means Section */}
          <div className="bg-accent-light border-2 border-accent/20 rounded-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary mb-3 sm:mb-4">
              What This Actually Means
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-text-primary">
              <p>
                <span className="font-semibold">First:</span> You're doing better than you
                think. {overall}% is excellent progress.
              </p>
              <p>
                <span className="font-semibold">Second:</span> The remaining{' '}
                {100 - overall}%? That's not "behind" - that's "not yet."
              </p>
              <p>
                <span className="font-semibold">Third:</span> Schools typically see
                similar or lower percentages at this age. You're doing just as well (or
                better) with personalized attention.
              </p>
              <p className="font-semibold text-primary">
                What matters most? Your child is learning, growing, curious, and spending
                focused time with you.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="space-y-3 sm:space-y-4">
            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={handleShare}
                className="w-full text-sm sm:text-base"
              >
                <Share2 className="mr-2 h-4 w-4" />
                {copied ? 'Link Copied!' : 'Share Results'}
              </Button>

              <Button variant="outline" size="lg" className="w-full text-sm sm:text-base" disabled>
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Get PDF Report (Coming Soon)</span>
                <span className="sm:hidden">PDF (Coming Soon)</span>
              </Button>
            </div>

            <div className="text-center pt-2 sm:pt-4">
              <Link href="/" className="inline-block w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                  Take Another Assessment
                </Button>
              </Link>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-center text-xs sm:text-sm text-text-secondary bg-surface rounded-lg p-3 sm:p-4">
            <p>
              This assessment is for guidance only and does not constitute educational or
              legal advice. Every child develops at their own pace.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
