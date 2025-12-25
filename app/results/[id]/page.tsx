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
import confetti from 'canvas-confetti';
import { HomeschoolHubCTA } from '@/components/HomeschoolHubCTA';
import { GovernmentSources } from '@/components/GovernmentSources';
import { generateAssessmentPDF } from '@/lib/pdf-generator';

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

  // Trigger confetti when assessment loads successfully
  useEffect(() => {
    if (assessment && !loading && !error) {
      // Fire confetti
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval: any = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ['#10B981', '#3B82F6', '#F59E0B', '#F472B6']
        });
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ['#10B981', '#3B82F6', '#F59E0B', '#F472B6']
        });
      }, 250);

      return () => clearInterval(interval);
    }
  }, [assessment, loading, error]);

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

  const handleDownloadPDF = () => {
    try {
      if (!assessment) return;
      generateAssessmentPDF(assessment);
      showToast('PDF downloaded successfully!', 'success');
    } catch (error) {
      console.error('PDF generation error:', error);
      showToast('Failed to generate PDF. Please try again.', 'error');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-surface">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-6 animate-bounce">🌱</div>
          <h2 className="text-3xl font-bold text-primary mb-3">
            Preparing your results...
          </h2>
          <p className="text-xl text-text-secondary mb-2">
            Just a moment!
          </p>
          <p className="text-base text-text-tertiary italic">
            (Spoiler: You're doing better than you think!)
          </p>
        </div>
      </div>
    );
  }

  if (error && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-surface p-4">
        <div className="text-center max-w-md space-y-6 sm:space-y-8">
          <div className="text-6xl sm:text-7xl">😕</div>
          <h1 className="text-2xl sm:text-3xl font-bold text-text-primary px-4">
            Unable to Load Results
          </h1>
          <p className="text-base sm:text-lg text-text-secondary px-4 leading-relaxed">
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
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
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

            <div className="space-y-3 px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary text-balance">
                You're Teaching More Than You Think
              </h1>
              <div className="text-2xl sm:text-3xl font-semibold" style={{ color: rating.color.replace('text-', '') }}>
                {rating.band}
              </div>
            </div>

            <div className="max-w-2xl mx-auto bg-primary-light/50 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-lg sm:text-xl text-text-primary leading-relaxed">
                {encouragingMessage}
              </p>
            </div>

            <div className="card-elevated rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto border-2 border-primary/10">
              <h3 className="font-semibold text-text-primary mb-4 text-base sm:text-lg">💡 Why This Matters:</h3>
              <ul className="text-left space-y-3 text-text-secondary text-base sm:text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-3 flex-shrink-0 text-xl">✓</span>
                  <span>School children often don't master all these skills either</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 flex-shrink-0 text-xl">✓</span>
                  <span>Learning happens in bursts - gaps now often fill in later</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 flex-shrink-0 text-xl">✓</span>
                  <span>Your one-to-one attention means deeper understanding</span>
                </li>
              </ul>
            </div>
          </div>

          {/* HomeschoolHub CTA - Primary Conversion Point */}
          <HomeschoolHubCTA
            score={overall}
            yearGroup={assessment.year_group}
            variant="primary"
          />

          {/* Category Breakdown */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary text-center px-4">
              Where You're Making Real Progress
            </h2>

            <div className="grid gap-6 sm:gap-8">
              {Object.entries(categories).map(([category, score]) => (
                <Card key={category} className="p-6 sm:p-8 card-elevated border-2 border-primary/10 hover:border-primary/20 transition-all duration-300">
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
          <div className="bg-accent-light/50 border-2 border-accent/20 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm">
            <h2 className="text-2xl sm:text-3xl font-bold text-text-primary mb-4 sm:mb-6">
              What This Actually Means
            </h2>
            <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-text-primary">
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

          {/* HomeschoolHub CTA - Secondary (Social Proof) */}
          <HomeschoolHubCTA
            score={overall}
            yearGroup={assessment.year_group}
            variant="secondary"
          />

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

              <Button
                variant="outline"
                size="lg"
                className="w-full text-sm sm:text-base"
                onClick={handleDownloadPDF}
              >
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Download PDF Report</span>
                <span className="sm:hidden">Download PDF</span>
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

          {/* Disclaimer & Sources */}
          <div className="space-y-6">
            <div className="text-center text-xs sm:text-sm text-text-secondary bg-surface rounded-2xl p-4 sm:p-5 space-y-2">
              <p>
                This assessment is for guidance only and does not constitute educational or
                legal advice. Every child develops at their own pace.
              </p>
              <HomeschoolHubCTA
                score={overall}
                yearGroup={assessment.year_group}
                variant="footer"
              />
            </div>

            {/* Government Sources */}
            <GovernmentSources />
          </div>
        </div>
      </main>
    </div>
  );
}
