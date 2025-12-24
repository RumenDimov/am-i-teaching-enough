import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { FAQSchema } from './faq-schema';
import { GovernmentSources } from '@/components/GovernmentSources';

export default function Home() {
  return (
    <>
      <FAQSchema />
      <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-10 md:space-y-12">
          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-tight px-2 text-balance">
              Am I Teaching Enough?
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary max-w-2xl mx-auto px-4 leading-relaxed">
              The question that keeps you awake at night.<br />
              <span className="text-primary font-semibold">Get your answer in 3 minutes.</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6 px-4">
            <Link href="/assessment" className="inline-block w-full sm:w-auto">
              <Button
                variant="gradient"
                size="lg"
                className="text-lg sm:text-xl px-10 sm:px-16 py-6 sm:py-7 h-auto w-full sm:w-auto shadow-2xl hover:shadow-primary/30 transition-all duration-300"
              >
                Find Out Now →
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-4 text-sm sm:text-base text-text-secondary px-4">
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">⏱️</span>
              <span>3 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">💯</span>
              <span>100% free</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-primary text-lg">📧</span>
              <span>No email required</span>
            </div>
          </div>

          {/* Features */}
          <div className="pt-12 max-w-2xl mx-auto">
            <div className="card-elevated rounded-2xl p-8 md:p-10 space-y-6 border-2 border-primary/10 hover:border-primary/20 transition-all duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold text-text-primary">
                What You'll Get
              </h2>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">
                      Quick, honest assessment
                    </p>
                    <p className="text-sm text-text-secondary">
                      Based on UK National Curriculum (as a helpful guide)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">
                      Instant, personalized feedback
                    </p>
                    <p className="text-sm text-text-secondary">
                      See exactly where your child is thriving
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-text-primary">
                      Encouraging, judgment-free
                    </p>
                    <p className="text-sm text-text-secondary">
                      Designed to relieve anxiety, not create it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Disclaimer */}
          <div className="pt-8 max-w-2xl mx-auto space-y-6">
            <div className="bg-primary-light/50 border-2 border-primary/20 rounded-2xl p-6 md:p-8 text-left backdrop-blur-sm">
              <p className="text-sm md:text-base text-text-primary leading-relaxed">
                <span className="font-semibold text-primary">💚 Important:</span> The UK National
                Curriculum is used as a helpful reference guide. Homeschooling families
                are <span className="font-semibold">NOT required to follow it</span>.
                This tool is designed to give you confidence and peace of mind, not to
                judge or pressure you.
              </p>
            </div>

            {/* Government Sources */}
            <GovernmentSources />
          </div>

          {/* Secondary CTA */}
          <div className="pt-10 px-4">
            <Link href="/assessment" className="inline-block w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-base sm:text-lg px-8 py-6 border-2 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                Start Your Free Assessment
              </Button>
            </Link>
          </div>
        </div>
      </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-16 text-center">
          <p className="text-base text-text-secondary">
            Made with <span className="text-primary text-xl">💚</span> for UK homeschool parents
          </p>
          <p className="text-sm text-text-tertiary mt-2">
            You're doing better than you think
          </p>
          <p className="text-sm text-text-tertiary mt-4">
            Part of the{' '}
            <a
              href="https://homeschoolhub.app?ref=landing-footer"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium transition-colors"
            >
              HomeschoolHub
            </a>{' '}
            family of tools
          </p>
        </footer>
      </div>
    </>
  );
}
