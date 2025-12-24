import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { FAQSchema } from './faq-schema';

export default function Home() {
  return (
    <>
      <FAQSchema />
      <div className="min-h-screen bg-gradient-to-b from-white to-surface">
        {/* Header */}
        <header className="container mx-auto px-4 py-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">Am I Teaching Enough?</h2>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight px-2">
              Am I Teaching Enough?
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto px-4">
              The question that keeps you awake at night. Get your answer in 3 minutes.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4 px-4">
            <Link href="/assessment" className="inline-block w-full sm:w-auto">
              <Button
                variant="gradient"
                size="lg"
                className="text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-6 h-auto w-full sm:w-auto"
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
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <h3 className="text-2xl font-semibold text-text-primary">
                What You'll Get
              </h3>
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
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="bg-primary-light border-2 border-primary/20 rounded-lg p-6 text-left">
              <p className="text-sm text-text-primary">
                <span className="font-semibold">Important:</span> The UK National
                Curriculum is used as a helpful reference guide. Homeschooling families
                are <span className="font-semibold">NOT required to follow it</span>.
                This tool is designed to give you confidence and peace of mind, not to
                judge or pressure you.
              </p>
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="pt-8 px-4">
            <Link href="/assessment" className="inline-block w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Start Your Free Assessment
              </Button>
            </Link>
          </div>
        </div>
      </main>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-12 text-center text-sm text-text-secondary">
          <p>
            Made with 💚 for UK homeschool parents
          </p>
        </footer>
      </div>
    </>
  );
}
