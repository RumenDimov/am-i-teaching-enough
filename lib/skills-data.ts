import { YearGroup, YearGroupSkills, YearGroupInfo, Skill } from './types';
import { supabase } from './supabase';

// Year group information
export const yearGroupsInfo: YearGroupInfo[] = [
  {
    id: 'nursery',
    name: 'Nursery',
    ageRange: '3-4 years',
    emoji: '🍼',
    totalSkills: 49,
  },
  {
    id: 'reception',
    name: 'Reception',
    ageRange: '4-5 years',
    emoji: '👶',
    totalSkills: 50,
  },
  {
    id: 'year1',
    name: 'Year 1',
    ageRange: '5-6 years',
    emoji: '📚',
    totalSkills: 54,
  },
  {
    id: 'year2',
    name: 'Year 2',
    ageRange: '6-7 years',
    emoji: '📐',
    totalSkills: 58,
  },
  {
    id: 'year3',
    name: 'Year 3',
    ageRange: '7-8 years',
    emoji: '🔬',
    totalSkills: 60,
  },
  {
    id: 'year4',
    name: 'Year 4',
    ageRange: '8-9 years',
    emoji: '📊',
    totalSkills: 62,
  },
  {
    id: 'year5',
    name: 'Year 5',
    ageRange: '9-10 years',
    emoji: '🎓',
    totalSkills: 42,
  },
  {
    id: 'year6',
    name: 'Year 6',
    ageRange: '10-11 years',
    emoji: '🎯',
    totalSkills: 42,
  },
];

// OLD Reception skills - DEPRECATED - Now loaded from Supabase
// Kept for reference only, actual skills are in database
const receptionSkillsOLD: YearGroupSkills = {
  communication: [
    {
      id: 'rec-comm-1',
      text: 'Can speak in simple sentences',
      order: 1,
      isCore: true,
    },
    {
      id: 'rec-comm-2',
      text: 'Enjoys listening to stories and rhymes',
      order: 2,
      isCore: true,
    },
    {
      id: 'rec-comm-3',
      text: 'Recognizes own name in print',
      order: 3,
      isCore: true,
    },
    {
      id: 'rec-comm-4',
      text: 'Can retell a simple story in own words',
      order: 4,
      isCore: false,
    },
    {
      id: 'rec-comm-5',
      text: 'Knows some letters and their sounds',
      order: 5,
      isCore: true,
    },
    {
      id: 'rec-comm-6',
      text: 'Can write some letters, especially in own name',
      order: 6,
      isCore: false,
    },
    {
      id: 'rec-comm-7',
      text: 'Attempts to write simple words phonetically',
      order: 7,
      isCore: false,
    },
    {
      id: 'rec-comm-8',
      text: 'Can hold a pencil with good control',
      order: 8,
      isCore: false,
    },
  ],
  maths: [
    {
      id: 'rec-math-1',
      text: 'Can count to 10 (or beyond)',
      order: 1,
      isCore: true,
    },
    {
      id: 'rec-math-2',
      text: 'Can recognize numbers 1-10',
      order: 2,
      isCore: true,
    },
    {
      id: 'rec-math-3',
      text: 'Can count objects accurately to 5',
      order: 3,
      isCore: true,
    },
    {
      id: 'rec-math-4',
      text: 'Understands more and less',
      order: 4,
      isCore: true,
    },
    {
      id: 'rec-math-5',
      text: 'Can name basic 2D shapes (circle, square, triangle)',
      order: 5,
      isCore: false,
    },
    {
      id: 'rec-math-6',
      text: 'Can make simple patterns',
      order: 6,
      isCore: false,
    },
    {
      id: 'rec-math-7',
      text: 'Beginning to use mathematical language (bigger, smaller)',
      order: 7,
      isCore: false,
    },
  ],
  science: [
    {
      id: 'rec-sci-1',
      text: 'Shows curiosity about the natural world',
      order: 1,
      isCore: true,
    },
    {
      id: 'rec-sci-2',
      text: 'Can name common animals',
      order: 2,
      isCore: false,
    },
    {
      id: 'rec-sci-3',
      text: 'Understands that plants grow and need water',
      order: 3,
      isCore: false,
    },
    {
      id: 'rec-sci-4',
      text: 'Can talk about weather and seasons',
      order: 4,
      isCore: false,
    },
    {
      id: 'rec-sci-5',
      text: 'Makes observations about their environment',
      order: 5,
      isCore: true,
    },
    {
      id: 'rec-sci-6',
      text: 'Asks questions about how things work',
      order: 6,
      isCore: true,
    },
  ],
  life_skills: [
    {
      id: 'rec-life-1',
      text: 'Can take turns and share with others',
      order: 1,
      isCore: true,
    },
    {
      id: 'rec-life-2',
      text: 'Can dress and undress independently',
      order: 2,
      isCore: false,
    },
    {
      id: 'rec-life-3',
      text: 'Shows confidence in new situations',
      order: 3,
      isCore: false,
    },
    {
      id: 'rec-life-4',
      text: 'Can follow simple instructions',
      order: 4,
      isCore: true,
    },
    {
      id: 'rec-life-5',
      text: 'Plays cooperatively with other children',
      order: 5,
      isCore: true,
    },
    {
      id: 'rec-life-6',
      text: 'Shows care and concern for others',
      order: 6,
      isCore: true,
    },
    {
      id: 'rec-life-7',
      text: 'Can use toilet independently',
      order: 7,
      isCore: false,
    },
    {
      id: 'rec-life-8',
      text: 'Can tidy up after activities',
      order: 8,
      isCore: false,
    },
    {
      id: 'rec-life-9',
      text: 'Shows persistence when things are difficult',
      order: 9,
      isCore: true,
    },
  ],
};

// OLD Year 3 skills - DEPRECATED - Now loaded from Supabase
// Kept for reference only, actual skills are in database
const year3SkillsOLD: YearGroupSkills = {
  reading_writing: [
    {
      id: 'y3-rw-1',
      text: 'Reads age-appropriate books independently for pleasure',
      order: 1,
      isCore: true,
    },
    {
      id: 'y3-rw-2',
      text: 'Can discuss what they\'ve read and explain what happened',
      order: 2,
      isCore: true,
    },
    {
      id: 'y3-rw-3',
      text: 'Writes in clear sentences with capital letters and full stops',
      order: 3,
      isCore: true,
    },
    {
      id: 'y3-rw-4',
      text: 'Uses interesting words beyond basic vocabulary',
      order: 4,
      isCore: false,
    },
    {
      id: 'y3-rw-5',
      text: 'Knows common spelling patterns (ai, ee, igh, oa)',
      order: 5,
      isCore: true,
    },
    {
      id: 'y3-rw-6',
      text: 'Can plan a short story with beginning, middle, end',
      order: 6,
      isCore: false,
    },
    {
      id: 'y3-rw-7',
      text: 'Handwriting is legible and mostly correctly formed',
      order: 7,
      isCore: false,
    },
    {
      id: 'y3-rw-8',
      text: 'Can use dictionaries to check spellings',
      order: 8,
      isCore: false,
    },
    {
      id: 'y3-rw-9',
      text: 'Uses conjunctions to join sentences (and, but, so)',
      order: 9,
      isCore: true,
    },
    {
      id: 'y3-rw-10',
      text: 'Can write a simple letter or email',
      order: 10,
      isCore: false,
    },
    {
      id: 'y3-rw-11',
      text: 'Uses question marks and exclamation marks correctly',
      order: 11,
      isCore: false,
    },
    {
      id: 'y3-rw-12',
      text: 'Can read aloud with expression',
      order: 12,
      isCore: false,
    },
    {
      id: 'y3-rw-13',
      text: 'Understands what they read without needing to decode every word',
      order: 13,
      isCore: true,
    },
    {
      id: 'y3-rw-14',
      text: 'Can use paragraphs to organize ideas',
      order: 14,
      isCore: false,
    },
  ],
  maths: [
    {
      id: 'y3-math-1',
      text: 'Knows 2×, 5×, 10× times tables off by heart',
      order: 1,
      isCore: true,
    },
    {
      id: 'y3-math-2',
      text: 'Can add and subtract 3-digit numbers',
      order: 2,
      isCore: true,
    },
    {
      id: 'y3-math-3',
      text: 'Understands place value (hundreds, tens, ones)',
      order: 3,
      isCore: true,
    },
    {
      id: 'y3-math-4',
      text: 'Can tell time to 5 minutes',
      order: 4,
      isCore: true,
    },
    {
      id: 'y3-math-5',
      text: 'Knows fractions (1/2, 1/4, 1/3, 3/4)',
      order: 5,
      isCore: true,
    },
    {
      id: 'y3-math-6',
      text: 'Can solve word problems',
      order: 6,
      isCore: true,
    },
    {
      id: 'y3-math-7',
      text: 'Understands basic measurement (cm, m, ml, l, g, kg)',
      order: 7,
      isCore: false,
    },
    {
      id: 'y3-math-8',
      text: 'Can count money and give change',
      order: 8,
      isCore: false,
    },
    {
      id: 'y3-math-9',
      text: 'Knows 3× and 4× times tables',
      order: 9,
      isCore: false,
    },
    {
      id: 'y3-math-10',
      text: 'Can name and describe 2D and 3D shapes',
      order: 10,
      isCore: false,
    },
    {
      id: 'y3-math-11',
      text: 'Can interpret simple bar charts and tables',
      order: 11,
      isCore: false,
    },
    {
      id: 'y3-math-12',
      text: 'Understands angles (right angles)',
      order: 12,
      isCore: false,
    },
    {
      id: 'y3-math-13',
      text: 'Can find simple fractions of amounts',
      order: 13,
      isCore: false,
    },
    {
      id: 'y3-math-14',
      text: 'Uses mental math strategies confidently',
      order: 14,
      isCore: true,
    },
  ],
  science: [
    {
      id: 'y3-sci-1',
      text: 'Understands what plants need to grow (light, water, nutrients)',
      order: 1,
      isCore: true,
    },
    {
      id: 'y3-sci-2',
      text: 'Can explain how magnets work',
      order: 2,
      isCore: false,
    },
    {
      id: 'y3-sci-3',
      text: 'Knows about different types of rocks',
      order: 3,
      isCore: false,
    },
    {
      id: 'y3-sci-4',
      text: 'Can plan a simple experiment',
      order: 4,
      isCore: false,
    },
    {
      id: 'y3-sci-5',
      text: 'Understands basic nutrition and healthy eating',
      order: 5,
      isCore: true,
    },
    {
      id: 'y3-sci-6',
      text: 'Knows that animals need food, water, and air',
      order: 6,
      isCore: true,
    },
    {
      id: 'y3-sci-7',
      text: 'Can identify common plants and animals',
      order: 7,
      isCore: false,
    },
    {
      id: 'y3-sci-8',
      text: 'Asks scientific questions and makes predictions',
      order: 8,
      isCore: true,
    },
  ],
  life_skills: [
    {
      id: 'y3-life-1',
      text: 'Works well in a group',
      order: 1,
      isCore: true,
    },
    {
      id: 'y3-life-2',
      text: 'Can follow multi-step instructions',
      order: 2,
      isCore: true,
    },
    {
      id: 'y3-life-3',
      text: 'Asks for help when needed',
      order: 3,
      isCore: true,
    },
    {
      id: 'y3-life-4',
      text: 'Perseveres when something is difficult',
      order: 4,
      isCore: true,
    },
    {
      id: 'y3-life-5',
      text: 'Shows empathy toward others',
      order: 5,
      isCore: true,
    },
    {
      id: 'y3-life-6',
      text: 'Can organize their own belongings and workspace',
      order: 6,
      isCore: false,
    },
  ],
};

// Main skills database - ALL LOADED FROM SUPABASE
// This is just a placeholder, actual skills come from database
export const skillsDatabase: Record<YearGroup, YearGroupSkills> = {
  nursery: {}, // Loaded from Supabase (49 skills across 7 EYFS areas)
  reception: {}, // Loaded from Supabase (50 skills across 7 EYFS areas)
  year1: {}, // Loaded from Supabase (54 skills)
  year2: {}, // Loaded from Supabase (58 skills)
  year3: {}, // Loaded from Supabase (60 skills)
  year4: {}, // Loaded from Supabase (62 skills)
  year5: {}, // Coming soon
  year6: {}, // Coming soon
};

// Helper function to get skills by year group
export function getSkillsByYearGroup(yearGroup: YearGroup): YearGroupSkills {
  return skillsDatabase[yearGroup] || {};
}

// Fetch skills from Supabase and populate the local database
export async function loadSkillsFromSupabase(yearGroup: YearGroup): Promise<YearGroupSkills> {
  try {
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .eq('year_group', yearGroup)
      .order('skill_order', { ascending: true });

    if (error) {
      console.error(`Error loading ${yearGroup} skills:`, error);
      return {};
    }

    if (!data || data.length === 0) {
      console.warn(`No skills found for ${yearGroup}`);
      return {};
    }

    // Group skills by category
    const skillsByCategory: YearGroupSkills = {};
    
    (data as Skill[]).forEach((skill) => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      
      skillsByCategory[skill.category].push({
        id: skill.id,
        text: skill.skill_text,
        order: skill.skill_order,
        isCore: skill.is_core,
      });
    });

    // Cache in local skillsDatabase
    skillsDatabase[yearGroup] = skillsByCategory;
    
    return skillsByCategory;
  } catch (error) {
    console.error(`Error fetching skills for ${yearGroup}:`, error);
    return {};
  }
}

// Helper function to get total skills count for a year group
export function getTotalSkillsCount(yearGroup: YearGroup): number {
  const skills = getSkillsByYearGroup(yearGroup);
  return Object.values(skills).reduce((total, categorySkills) => total + categorySkills.length, 0);
}

// Category display names
export const categoryNames: Record<string, string> = {
  // Nursery EYFS categories (3-4 years)
  communication_language: 'Communication & Language',
  physical_development: 'Physical Development',
  personal_social_emotional: 'Personal, Social & Emotional',
  literacy: 'Literacy',
  mathematics: 'Mathematics',
  understanding_world: 'Understanding the World',
  expressive_arts: 'Expressive Arts & Design',
  // Reception onwards categories
  communication: 'Communication',
  reading_writing: 'Reading & Writing',
  maths: 'Maths',
  science: 'Science & Understanding the World',
  life_skills: 'Life Skills',
};

// Category emojis
export const categoryEmojis: Record<string, string> = {
  // Nursery EYFS categories (3-4 years)
  communication_language: '💬',
  physical_development: '🤸',
  personal_social_emotional: '🌟',
  literacy: '📖',
  mathematics: '🔢',
  understanding_world: '🌍',
  expressive_arts: '🎨',
  // Reception onwards categories
  communication: '💬',
  reading_writing: '📚',
  maths: '🔢',
  science: '🔬',
  life_skills: '🌟',
};
