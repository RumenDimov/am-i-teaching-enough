import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { yearGroupsInfo } from '@/lib/skills-data';
import { ArrowLeft } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Choose Year Group | UK Homeschool Assessment',
  description: 'Select your child\'s year group (Reception or Year 3) to begin a free 3-minute assessment based on UK National Curriculum milestones. Get instant, encouraging feedback.',
  openGraph: {
    title: 'Choose Year Group | Am I Teaching Enough?',
    description: 'Select your child\'s year group to begin a free homeschool assessment',
  },
};

export default function AssessmentSelection() {
  // Filter to only show year groups with data (Reception and Year 3)
  const availableYearGroups = yearGroupsInfo.filter(
    yg => yg.id === 'reception' || yg.id === 'year3'
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-surface">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </Link>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-4">
              Select Your Child's Year Group
            </h1>
            <p className="text-base sm:text-lg text-text-secondary">
              Choose the year group that matches your child's age to begin the assessment
            </p>
          </div>

          {/* Year Group Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {availableYearGroups.map((yearGroup) => (
              <Link
                key={yearGroup.id}
                href={`/assessment/${yearGroup.id}`}
                className="group"
              >
                <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 hover:border-primary cursor-pointer active:scale-100">
                  <div className="p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                    <div className="text-5xl sm:text-6xl">{yearGroup.emoji}</div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-text-primary group-hover:text-primary transition-colors">
                        {yearGroup.name}
                      </h3>
                      <p className="text-sm sm:text-base text-text-secondary mt-1">
                        {yearGroup.ageRange}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm text-text-secondary">
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
                More year groups coming soon! Currently available: Reception and Year 3
              </p>
            </div>
          )}

          {/* Reassurance */}
          <div className="mt-8 sm:mt-12 bg-primary-light border-2 border-primary/20 rounded-lg p-4 sm:p-6">
            <p className="text-sm sm:text-base text-text-primary text-center">
              <span className="font-semibold">Remember:</span> This assessment takes
              just 3 minutes and is designed to celebrate your child's progress, not
              highlight gaps. Every child develops at their own pace.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
