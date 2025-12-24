// Database types
export interface Skill {
  id: string;
  year_group: string;
  category: string;
  skill_text: string;
  skill_order: number;
  is_core: boolean;
  created_at?: string;
}

export interface User {
  id: string;
  email: string;
  created_at: string;
}

export interface Assessment {
  id: string;
  session_id: string;
  user_id?: string;
  email?: string;
  year_group: string;
  skills_checked: string[];
  results: AssessmentResults;
  overall_score: number;
  created_at: string;
  updated_at: string;
}

// App types
export interface AssessmentResults {
  overall: number;
  categories: {
    [key: string]: number;
  };
}

export interface YearGroupSkills {
  [category: string]: SkillData[];
}

export interface SkillData {
  id: string;
  text: string;
  order: number;
  isCore: boolean;
}

export type YearGroup = 'nursery' | 'reception' | 'year1' | 'year2' | 'year3' | 'year4' | 'year5' | 'year6';

export type Category = 'reading_writing' | 'maths' | 'science' | 'life_skills';

export interface YearGroupInfo {
  id: YearGroup;
  name: string;
  ageRange: string;
  emoji: string;
  totalSkills: number;
}
