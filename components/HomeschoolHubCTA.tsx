'use client';

import { Button } from '@/components/ui/button';

interface HomeschoolHubCTAProps {
  score: number;
  yearGroup: string;
  variant?: 'primary' | 'secondary' | 'footer';
}

export function HomeschoolHubCTA({ score, yearGroup, variant = 'primary' }: HomeschoolHubCTAProps) {
  const baseUrl = 'https://homeschoolhub.app';
  const params = new URLSearchParams({
    ref: 'assessment',
    score: score.toString(),
    year: yearGroup,
    source: 'am-i-teaching-enough'
  });
  const primaryUrl = `${baseUrl}?${params.toString()}`;
  const pricingUrl = `${baseUrl}/pricing?ref=assessment`;

  if (variant === 'footer') {
    return (
      <p className="text-sm text-text-tertiary mt-4">
        Want ongoing support?{' '}
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium transition-colors"
        >
          HomeschoolHub
        </a>{' '}
        helps you stay on track all year.
      </p>
    );
  }

  if (variant === 'secondary') {
    return (
      <div className="bg-celebration/20 border-2 border-secondary/20 rounded-2xl p-6 sm:p-8 text-center backdrop-blur-sm">
        <p className="text-base sm:text-lg text-text-primary mb-3 leading-relaxed">
          <span className="font-semibold">Over 2,000 UK homeschool parents</span> have used their
          assessment results to create personalized learning plans with{' '}
          <span className="font-semibold text-primary">HomeschoolHub</span>.
        </p>
        <a
          href={primaryUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline font-medium text-base sm:text-lg transition-colors"
        >
          See how it works →
        </a>
      </div>
    );
  }

  // Primary variant - the main conversion CTA
  return (
    <div className="max-w-2xl mx-auto animate-fade-in">
      <div className="bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border-2 border-primary/30 rounded-2xl p-6 sm:p-8 md:p-10 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
        <div className='flex flex-col p-5 sm:flex-col items-center justify-center'>
          
          <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="text-5xl sm:text-6xl flex-shrink-0">🎯</div>
          <div className="flex-1 flex flex-col">
            <h3 className="text-2xl sm:text-3xl font-bold text-text-primary mb-3 sm:mb-4">
              Ready to Keep Building on This Progress?
            </h3>
            <p className="text-base sm:text-lg text-text-secondary mb-4 sm:mb-5 leading-relaxed">
              You now know where your child is.{' '}
              <span className="font-semibold text-primary">HomeschoolHub</span> helps you plan
              what's next—with lesson ideas, progress tracking, and a supportive community of UK
              homeschool parents.
            </p>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 text-text-secondary text-sm sm:text-base">
              <li className="flex items-start">
                <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span>Turn assessment insights into actionable lesson plans</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span>Track progress over time (not just one snapshot)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2 sm:mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                <span>Join 2,000+ UK homeschool families who've found their rhythm</span>
              </li>
            </ul>
          </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                href={primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto"
                onClick={() => {
                  // Track conversion click
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click_homeschoolhub_cta', {
                      score: score,
                      year_group: yearGroup,
                      cta_variant: 'primary'
                    });
                  }
                }}
              >
                <Button
                  variant="gradient"
                  size="lg"
                  className="w-full text-base sm:text-lg shadow-xl hover:shadow-2xl"
                >
                  Try HomeschoolHub Free →
                </Button>
              </a>
              <a
                href={pricingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full sm:w-auto"
                onClick={() => {
                  // Track pricing click
                  if (typeof window !== 'undefined' && (window as any).gtag) {
                    (window as any).gtag('event', 'click_pricing', {
                      score: score,
                      year_group: yearGroup,
                      source: 'assessment_results'
                    });
                  }
                }}
              >
                <Button variant="outline" size="lg" className="w-full text-base sm:text-lg">
                  See Plans & Pricing
                </Button>
              </a>
            </div>
        </div>
        
        
      </div>
    </div>
  );
}
