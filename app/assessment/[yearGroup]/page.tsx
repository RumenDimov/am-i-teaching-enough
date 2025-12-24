'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/toast';
import {
  getSkillsByYearGroup,
  yearGroupsInfo,
  categoryNames,
  categoryEmojis,
} from '@/lib/skills-data';
import { YearGroup } from '@/lib/types';
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { calculateScores } from '@/lib/scoring';

export default function AssessmentFlow() {
  const params = useParams();
  const router = useRouter();
  const yearGroup = params.yearGroup as YearGroup;
  const { showToast } = useToast();

  const [checkedSkills, setCheckedSkills] = useState<Set<string>>(new Set());
  const [currentCategory, setCurrentCategory] = useState(0);
  const [isSaving, setIsSaving] = useState(false);

  const skills = getSkillsByYearGroup(yearGroup);
  const categories = Object.keys(skills);
  const totalSkills = Object.values(skills).reduce((sum, arr) => sum + arr.length, 0);
  const yearGroupInfo = yearGroupsInfo.find(yg => yg.id === yearGroup);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`assessment-${yearGroup}`);
    if (saved) {
      setCheckedSkills(new Set(JSON.parse(saved)));
    }
  }, [yearGroup]);

  // Save progress to localStorage
  useEffect(() => {
    localStorage.setItem(
      `assessment-${yearGroup}`,
      JSON.stringify(Array.from(checkedSkills))
    );
  }, [checkedSkills, yearGroup]);

  const handleSkillToggle = (skillId: string) => {
    const newChecked = new Set(checkedSkills);
    if (newChecked.has(skillId)) {
      newChecked.delete(skillId);
    } else {
      newChecked.add(skillId);
    }
    setCheckedSkills(newChecked);
  };

  const handleNext = () => {
    if (currentCategory < categories.length - 1) {
      setCurrentCategory(currentCategory + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevious = () => {
    if (currentCategory > 0) {
      setCurrentCategory(currentCategory - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleComplete = async (retryCount = 0) => {
    setIsSaving(true);

    // Calculate scores
    const results = calculateScores(Array.from(checkedSkills), yearGroup);

    // Save to Supabase
    try {
      const response = await fetch('/api/assessment/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          yearGroup,
          skillsChecked: Array.from(checkedSkills),
          results,
        }),
      });

      if (response.ok) {
        const { id } = await response.json();
        showToast('Results saved successfully!', 'success');
        // Clear saved progress
        localStorage.removeItem(`assessment-${yearGroup}`);
        // Small delay to show success message
        setTimeout(() => {
          router.push(`/results/${id}`);
        }, 500);
      } else {
        const errorData = await response.json();
        setIsSaving(false);

        // Show user-friendly error
        if (response.status === 503) {
          showToast('Database is temporarily unavailable. Please try again.', 'error');
        } else {
          showToast(
            errorData.details || 'Failed to save results. Please try again.',
            'error'
          );
        }
      }
    } catch (error) {
      setIsSaving(false);

      // Retry logic for network errors
      if (retryCount < 2) {
        showToast(`Connection failed. Retrying... (${retryCount + 1}/2)`, 'info');
        setTimeout(() => handleComplete(retryCount + 1), 2000);
      } else {
        showToast(
          'Unable to save results. Please check your internet connection and try again.',
          'error'
        );
      }
    }
  };

  const currentCategoryName = categories[currentCategory];
  const currentSkills = skills[currentCategoryName] || [];
  const categoryChecked = currentSkills.filter(s => checkedSkills.has(s.id)).length;
  const isCategoryComplete = categoryChecked === currentSkills.length;
  const isLastCategory = currentCategory === categories.length - 1;

  if (!yearGroupInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Year group not found</h1>
          <Link href="/assessment">
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-surface pb-12">
      {/* Header */}
      <header className="bg-surface-elevated border-b border-border sticky top-0 z-10 shadow-sm backdrop-blur-sm bg-opacity-95">
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Link href="/assessment">
              <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                Back
              </Button>
            </Link>
            <div className="text-xs sm:text-sm font-medium text-text-secondary">
              <span className="hidden sm:inline">{yearGroupInfo.emoji} {yearGroupInfo.name}</span>
              <span className="sm:hidden">{yearGroupInfo.emoji}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex justify-between text-xs sm:text-sm">
              <span className="font-medium text-text-primary">Overall Progress</span>
              <span className="text-text-secondary">
                {checkedSkills.size} / {totalSkills}
              </span>
            </div>
            <Progress value={checkedSkills.size} max={totalSkills} />
          </div>
        </div>
      </header>

      {/* Category Tabs */}
      <div className="bg-white border-b border-border">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="flex gap-2 overflow-x-auto py-3 sm:py-4 scrollbar-hide">
            {categories.map((category, index) => {
              const categorySkills = skills[category];
              const checked = categorySkills.filter(s => checkedSkills.has(s.id)).length;
              const isComplete = checked === categorySkills.length;
              const isActive = index === currentCategory;

              return (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(index)}
                  className={`
                    flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg whitespace-nowrap transition-all flex-shrink-0
                    ${isActive
                      ? 'bg-primary text-white'
                      : 'bg-surface text-text-primary hover:bg-primary-light active:bg-primary-light'
                    }
                  `}
                >
                  <span className="text-base sm:text-lg">{categoryEmojis[category]}</span>
                  <span className="text-xs sm:text-sm font-medium">
                    {categoryNames[category]}
                  </span>
                  {isComplete && (
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <div className="max-w-3xl mx-auto">
          {/* Instructions */}
          <div className="bg-accent-light/50 border-2 border-accent/20 rounded-2xl p-6 sm:p-8 mb-8 sm:mb-10 backdrop-blur-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
              What can your child do RIGHT NOW?
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Tick the skills your child has. <span className="font-semibold text-primary">Don't worry about gaps</span> - every child
              learns at their own pace. Only mark skills they can do independently most
              of the time.
            </p>
          </div>

          {/* Category Header */}
          <div className="mb-4 sm:mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary mb-2">
              {categoryEmojis[currentCategoryName]} {categoryNames[currentCategoryName]}
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary">
              {categoryChecked} of {currentSkills.length} skills checked
            </p>
          </div>

          {/* Skills List */}
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            {currentSkills.map((skill, index) => (
              <div key={skill.id}>
                <label
                  className={`
                    block p-3 sm:p-4 rounded-lg border-2 transition-all cursor-pointer active:scale-[0.98]
                    ${checkedSkills.has(skill.id)
                      ? 'bg-primary-light border-primary'
                      : 'bg-white border-border hover:border-primary/30 active:border-primary/50'
                    }
                  `}
                  htmlFor={skill.id}
                >
                  <Checkbox
                    id={skill.id}
                    label={skill.text}
                    checked={checkedSkills.has(skill.id)}
                    onChange={() => handleSkillToggle(skill.id)}
                  />
                </label>

                {/* Encouragement every 4 skills */}
                {(index + 1) % 4 === 0 && index < currentSkills.length - 1 && (
                  <div className="text-center py-3 sm:py-4">
                    <div className="inline-block bg-encouragement/30 border-2 border-secondary/20 rounded-full px-4 py-2">
                      <span className="text-sm sm:text-base text-text-primary font-medium">
                        {['💚 You\'re doing great!', '✨ Look at you go!', '🌟 Keep going!', '🎯 Excellent progress!'][Math.floor(index / 4) % 4]}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentCategory === 0}
              className="w-full sm:w-auto order-2 sm:order-1"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Previous</span>
              <span className="sm:hidden">Back</span>
            </Button>

            {!isLastCategory ? (
              <Button onClick={handleNext} variant="default" className="w-full sm:w-auto order-1 sm:order-2">
                Next Category
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button
                onClick={() => handleComplete()}
                variant="gradient"
                size="lg"
                disabled={isSaving}
                className="w-full sm:w-auto order-1 sm:order-2"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <span className="hidden sm:inline">See My Results →</span>
                    <span className="sm:hidden">See Results →</span>
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
