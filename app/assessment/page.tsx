import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { yearGroupsInfo } from '@/lib/skills-data';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';
import { GovernmentSources } from '@/components/GovernmentSources';

export const metadata: Metadata = {
  title: 'Choose Year Group | UK Homeschool Assessment',
  description: 'Select your child\'s year group (Nursery through Year 6) to begin a free 3-minute assessment based on UK National Curriculum milestones. Get instant, encouraging feedback.',
  openGraph: {
    title: 'Choose Year Group | Am I Teaching Enough?',
    description: 'Select your child\'s year group to begin a free homeschool assessment',
  },
};

export default function AssessmentSelection() {
  // Filter to only show year groups with data (Nursery through Year 6)
  const availableYearGroups = yearGroupsInfo.filter(
    yg => yg.id === 'nursery' || yg.id === 'reception' || yg.id === 'year1' || yg.id === 'year2' || yg.id === 'year3' || yg.id === 'year4' || yg.id === 'year5' || yg.id === 'year6'
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" size="sm" className="hover:bg-primary-light transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-6 text-balance">
              Select Your Child's Year Group
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto">
              Choose the year group that matches your child's age to begin the assessment
            </p>
          </div>

          {/* Year Group Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-12 max-w-2xl mx-auto">
            {availableYearGroups.map((yearGroup) => (
              <Link
                key={yearGroup.id}
                href={`/assessment/${yearGroup.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:scale-105 hover:border-primary/30 cursor-pointer active:scale-100 card-elevated border-2 border-primary/10">
                  <div className="p-8 sm:p-10 text-center space-y-4 sm:space-y-5">
                    <div className="text-6xl sm:text-7xl transition-transform duration-300 group-hover:scale-110">{yearGroup.emoji}</div>
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {yearGroup.name}
                      </h3>
                      <p className="text-base sm:text-lg text-text-secondary mt-2">
                        {yearGroup.ageRange}
                      </p>
                    </div>
                    <div className="text-sm sm:text-base text-text-secondary bg-primary-light/50 rounded-lg py-2 px-4 inline-block">
                      {yearGroup.totalSkills} skills to check
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message */}
          {yearGroupsInfo.length > availableYearGroups.length && (
            <div className="text-center text-xs sm:text-sm text-text-secondary bg-surface rounded-lg p-4">
              <p>
                All year groups now available! Nursery through Year 6 (ages 3-11)
              </p>
            </div>
          )}

          {/* Reassurance */}
          <div className="mt-12 sm:mt-16 max-w-2xl mx-auto space-y-6">
            <div className="bg-primary-light/50 border-2 border-primary/20 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <p className="text-base sm:text-lg text-text-primary text-center leading-relaxed">
                <span className="font-semibold text-primary">💚 Remember:</span> This assessment takes
                just 3 minutes and is designed to <span className="font-semibold">celebrate</span> your child's progress, not
                highlight gaps. Every child develops at their own pace.
              </p>
            </div>

            {/* Government Sources */}
            <GovernmentSources variant="compact" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center">
        <p className="text-sm text-text-tertiary">
          Part of the{' '}
          <a
            href="https://homeschoolhub.app?ref=assessment-selection"
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
  );
}
