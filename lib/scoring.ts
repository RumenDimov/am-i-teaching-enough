import { YearGroup, AssessmentResults, YearGroupSkills } from './types';
import { getSkillsByYearGroup } from './skills-data';

/**
 * Calculate assessment scores based on checked skills
 */
export function calculateScores(
  checkedSkillIds: string[],
  yearGroup: YearGroup
): AssessmentResults {
  const allSkills = getSkillsByYearGroup(yearGroup);

  const results: AssessmentResults = {
    overall: 0,
    categories: {},
  };

  // Calculate per category
  for (const [category, skills] of Object.entries(allSkills)) {
    const categoryTotal = skills.length;
    const categoryChecked = checkedSkillIds.filter(
      id => skills.some(s => s.id === id)
    ).length;

    results.categories[category] = Math.round(
      (categoryChecked / categoryTotal) * 100
    );
  }

  // Calculate overall
  const totalSkills = Object.values(allSkills).reduce(
    (sum, skills) => sum + skills.length,
    0
  );
  results.overall = Math.round(
    (checkedSkillIds.length / totalSkills) * 100
  );

  return results;
}

/**
 * Get rating band and message based on score
 */
export function getRatingBand(score: number): { band: string; color: string } {
  if (score >= 90) return { band: 'Outstanding! 🌟', color: 'text-primary' };
  if (score >= 75) return { band: 'Excellent! 💚', color: 'text-primary' };
  if (score >= 60) return { band: 'On Track ✓', color: 'text-accent' };
  if (score >= 40) return { band: 'Developing 📚', color: 'text-secondary' };
  return { band: 'Building Foundations 🌱', color: 'text-secondary' };
}

/**
 * Get encouraging message based on overall score
 */
export function getEncouragingMessage(score: number, yearGroup: string): string {
  const yearName = yearGroup.charAt(0).toUpperCase() + yearGroup.slice(1).replace(/(\d)/, ' $1');

  if (score >= 90) {
    return `Amazing! Your child is thriving across all areas. Your one-to-one attention is making a real difference.`;
  }

  if (score >= 75) {
    return `You're doing more than you think! Your child is developing ${score}% of typical ${yearName} skills. That's wonderful progress.`;
  }

  if (score >= 60) {
    return `Great progress! Your child is on track with ${yearName} development. Remember, school children often don't master all these either.`;
  }

  if (score >= 40) {
    return `You're teaching well! ${score}% is solid progress. Learning happens in bursts - gaps now often fill in suddenly later.`;
  }

  return `You're building strong foundations. Every child learns at their own pace, and your personalized attention is valuable.`;
}

/**
 * Get category-specific feedback
 */
export function getCategoryFeedback(category: string, score: number): string {
  const feedbackMap: Record<string, Record<string, string>> = {
    reading_writing: {
      high: 'Great reading fluency and writing skills!',
      medium: 'Solid literacy foundation. Keep reading together!',
      low: 'Reading develops at different rates - keep it fun!',
    },
    communication: {
      high: 'Wonderful communication and early literacy!',
      medium: 'Great progress with language development!',
      low: 'Language skills bloom at different ages!',
    },
    maths: {
      high: 'Excellent number sense and problem-solving!',
      medium: 'Solid foundation. Concepts often click suddenly!',
      low: 'Maths confidence grows with practice and play!',
    },
    science: {
      high: 'Wonderful curiosity & scientific thinking!',
      medium: 'Great observations about the world!',
      low: 'Science is about curiosity - you\'re fostering that!',
    },
    life_skills: {
      high: 'Amazing independence & social skills!',
      medium: 'Growing independence & confidence!',
      low: 'Life skills develop through daily experiences!',
    },
  };

  const categoryFeedback = feedbackMap[category] || feedbackMap.life_skills;

  if (score >= 75) return categoryFeedback.high;
  if (score >= 50) return categoryFeedback.medium;
  return categoryFeedback.low;
}
