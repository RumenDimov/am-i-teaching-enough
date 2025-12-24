/**
 * OFFICIAL RECEPTION (4-5 years) SKILLS
 * Based on EYFS Early Learning Goals (ELGs) 2024
 *
 * Sources:
 * - EYFS Statutory Framework 2024: https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2
 * - 17 Early Learning Goals (pages 11-15 of statutory framework)
 * - Development Matters 2023: https://www.gov.uk/government/publications/development-matters--2
 *
 * Total: 50 skills across 7 EYFS areas
 * Last verified: December 24, 2025
 */

export interface ReceptionSkill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const receptionSkillsOfficial: ReceptionSkill[] = [
  // ============================================
  // COMMUNICATION & LANGUAGE (7 skills)
  // ELG 1: Listening, Attention and Understanding
  // ELG 2: Speaking
  // ============================================
  {
    id: 'rec-cl-1',
    text: 'Listens attentively and responds to what they hear with relevant questions and comments',
    category: 'communication_language',
    order: 1,
    isCore: true,
    source: 'ELG: Listening, Attention and Understanding'
  },
  {
    id: 'rec-cl-2',
    text: 'Can hold a conversation when engaged in back-and-forth exchanges with adults and peers',
    category: 'communication_language',
    order: 2,
    isCore: true,
    source: 'ELG: Listening, Attention and Understanding'
  },
  {
    id: 'rec-cl-3',
    text: 'Makes comments about what they have heard and asks questions to clarify understanding',
    category: 'communication_language',
    order: 3,
    isCore: true,
    source: 'ELG: Listening, Attention and Understanding'
  },
  {
    id: 'rec-cl-4',
    text: 'Participates in small group, class and one-to-one discussions, offering their own ideas',
    category: 'communication_language',
    order: 4,
    isCore: true,
    source: 'ELG: Speaking'
  },
  {
    id: 'rec-cl-5',
    text: 'Uses recently introduced vocabulary in discussions and conversations',
    category: 'communication_language',
    order: 5,
    isCore: true,
    source: 'ELG: Speaking'
  },
  {
    id: 'rec-cl-6',
    text: 'Offers explanations for why things might happen, using vocabulary from stories and books',
    category: 'communication_language',
    order: 6,
    isCore: false,
    source: 'ELG: Speaking'
  },
  {
    id: 'rec-cl-7',
    text: 'Expresses ideas and feelings in full sentences',
    category: 'communication_language',
    order: 7,
    isCore: true,
    source: 'ELG: Speaking'
  },

  // ============================================
  // PHYSICAL DEVELOPMENT (7 skills)
  // ELG 6: Gross Motor Skills
  // ELG 7: Fine Motor Skills
  // ============================================
  {
    id: 'rec-pd-1',
    text: 'Negotiates space and obstacles safely, with consideration for themselves and others',
    category: 'physical_development',
    order: 1,
    isCore: true,
    source: 'ELG: Gross Motor Skills'
  },
  {
    id: 'rec-pd-2',
    text: 'Demonstrates strength, balance and coordination when playing',
    category: 'physical_development',
    order: 2,
    isCore: true,
    source: 'ELG: Gross Motor Skills'
  },
  {
    id: 'rec-pd-3',
    text: 'Moves energetically, such as running, jumping, dancing, hopping, skipping and climbing',
    category: 'physical_development',
    order: 3,
    isCore: false,
    source: 'ELG: Gross Motor Skills'
  },
  {
    id: 'rec-pd-4',
    text: 'Holds a pencil effectively in preparation for fluent writing (using the tripod grip)',
    category: 'physical_development',
    order: 4,
    isCore: true,
    source: 'ELG: Fine Motor Skills'
  },
  {
    id: 'rec-pd-5',
    text: 'Uses a range of small tools, including scissors, paintbrushes and cutlery',
    category: 'physical_development',
    order: 5,
    isCore: false,
    source: 'ELG: Fine Motor Skills'
  },
  {
    id: 'rec-pd-6',
    text: 'Begins to show accuracy and care when drawing',
    category: 'physical_development',
    order: 6,
    isCore: false,
    source: 'ELG: Fine Motor Skills'
  },
  {
    id: 'rec-pd-7',
    text: 'Manages own basic hygiene and personal needs independently (toileting, washing hands, dressing)',
    category: 'physical_development',
    order: 7,
    isCore: true,
    source: 'ELG: Managing Self (Physical aspect)'
  },

  // ============================================
  // PERSONAL, SOCIAL & EMOTIONAL DEVELOPMENT (9 skills)
  // ELG 3: Self-Regulation
  // ELG 4: Managing Self
  // ELG 5: Building Relationships
  // ============================================
  {
    id: 'rec-pse-1',
    text: 'Shows an understanding of their own feelings and those of others',
    category: 'personal_social_emotional',
    order: 1,
    isCore: true,
    source: 'ELG: Self-Regulation'
  },
  {
    id: 'rec-pse-2',
    text: 'Begins to regulate their own behaviour and emotions',
    category: 'personal_social_emotional',
    order: 2,
    isCore: true,
    source: 'ELG: Self-Regulation'
  },
  {
    id: 'rec-pse-3',
    text: 'Sets and works towards simple goals, being able to wait for what they want',
    category: 'personal_social_emotional',
    order: 3,
    isCore: true,
    source: 'ELG: Self-Regulation'
  },
  {
    id: 'rec-pse-4',
    text: 'Is confident to try new activities and shows independence, resilience and perseverance',
    category: 'personal_social_emotional',
    order: 4,
    isCore: true,
    source: 'ELG: Managing Self'
  },
  {
    id: 'rec-pse-5',
    text: 'Explains the reasons for rules, knows right from wrong and tries to behave accordingly',
    category: 'personal_social_emotional',
    order: 5,
    isCore: true,
    source: 'ELG: Managing Self'
  },
  {
    id: 'rec-pse-6',
    text: 'Can talk about their own abilities positively and know what they are good at',
    category: 'personal_social_emotional',
    order: 6,
    isCore: false,
    source: 'ELG: Managing Self'
  },
  {
    id: 'rec-pse-7',
    text: 'Works and plays cooperatively and takes turns with others',
    category: 'personal_social_emotional',
    order: 7,
    isCore: true,
    source: 'ELG: Building Relationships'
  },
  {
    id: 'rec-pse-8',
    text: 'Forms positive attachments to adults and friendships with peers',
    category: 'personal_social_emotional',
    order: 8,
    isCore: false,
    source: 'ELG: Building Relationships'
  },
  {
    id: 'rec-pse-9',
    text: 'Shows sensitivity to their own and others\' needs',
    category: 'personal_social_emotional',
    order: 9,
    isCore: true,
    source: 'ELG: Building Relationships'
  },

  // ============================================
  // LITERACY (9 skills)
  // ELG 8: Comprehension
  // ELG 9: Word Reading
  // ELG 10: Writing
  // ============================================
  {
    id: 'rec-lit-1',
    text: 'Demonstrates understanding of what has been read to them by retelling stories and narratives',
    category: 'literacy',
    order: 1,
    isCore: true,
    source: 'ELG: Comprehension'
  },
  {
    id: 'rec-lit-2',
    text: 'Uses and understands recently introduced vocabulary during discussions about stories',
    category: 'literacy',
    order: 2,
    isCore: false,
    source: 'ELG: Comprehension'
  },
  {
    id: 'rec-lit-3',
    text: 'Anticipates key events in stories and uses new vocabulary in imaginative play',
    category: 'literacy',
    order: 3,
    isCore: false,
    source: 'ELG: Comprehension'
  },
  {
    id: 'rec-lit-4',
    text: 'Says a sound for each letter in the alphabet and at least 10 digraphs',
    category: 'literacy',
    order: 4,
    isCore: true,
    source: 'ELG: Word Reading'
  },
  {
    id: 'rec-lit-5',
    text: 'Reads words consistent with their phonic knowledge by sound-blending',
    category: 'literacy',
    order: 5,
    isCore: true,
    source: 'ELG: Word Reading'
  },
  {
    id: 'rec-lit-6',
    text: 'Reads aloud simple sentences and books consistent with their phonic knowledge',
    category: 'literacy',
    order: 6,
    isCore: true,
    source: 'ELG: Word Reading'
  },
  {
    id: 'rec-lit-7',
    text: 'Writes recognisable letters, most of which are correctly formed',
    category: 'literacy',
    order: 7,
    isCore: true,
    source: 'ELG: Writing'
  },
  {
    id: 'rec-lit-8',
    text: 'Spells words by identifying sounds in them and representing them with a letter or letters',
    category: 'literacy',
    order: 8,
    isCore: true,
    source: 'ELG: Writing'
  },
  {
    id: 'rec-lit-9',
    text: 'Writes simple phrases and sentences that can be read by others',
    category: 'literacy',
    order: 9,
    isCore: false,
    source: 'ELG: Writing'
  },

  // ============================================
  // MATHEMATICS (8 skills)
  // ELG 11: Number
  // ELG 12: Numerical Patterns
  // ============================================
  {
    id: 'rec-math-1',
    text: 'Has a deep understanding of numbers to 10, including the composition of each number',
    category: 'mathematics',
    order: 1,
    isCore: true,
    source: 'ELG: Number'
  },
  {
    id: 'rec-math-2',
    text: 'Subitises (recognises quantities without counting) up to 5',
    category: 'mathematics',
    order: 2,
    isCore: false,
    source: 'ELG: Number'
  },
  {
    id: 'rec-math-3',
    text: 'Automatically recalls number bonds up to 5 (and some to 10)',
    category: 'mathematics',
    order: 3,
    isCore: true,
    source: 'ELG: Number'
  },
  {
    id: 'rec-math-4',
    text: 'Compares quantities up to 10 and solves problems using objects or pictures',
    category: 'mathematics',
    order: 4,
    isCore: true,
    source: 'ELG: Number'
  },
  {
    id: 'rec-math-5',
    text: 'Verbally counts beyond 20, recognising the pattern of the counting system',
    category: 'mathematics',
    order: 5,
    isCore: true,
    source: 'ELG: Numerical Patterns'
  },
  {
    id: 'rec-math-6',
    text: 'Compares quantities using language: more than, less than, fewer',
    category: 'mathematics',
    order: 6,
    isCore: false,
    source: 'ELG: Numerical Patterns'
  },
  {
    id: 'rec-math-7',
    text: 'Explores patterns within numbers (e.g., evens and odds, double facts)',
    category: 'mathematics',
    order: 7,
    isCore: false,
    source: 'ELG: Numerical Patterns'
  },
  {
    id: 'rec-math-8',
    text: 'Explores and represents patterns with shapes, objects and numbers',
    category: 'mathematics',
    order: 8,
    isCore: false,
    source: 'ELG: Numerical Patterns'
  },

  // ============================================
  // UNDERSTANDING THE WORLD (6 skills)
  // ELG 13: Past and Present
  // ELG 14: People, Culture and Communities
  // ELG 15: The Natural World
  // ============================================
  {
    id: 'rec-utw-1',
    text: 'Talks about the lives of people around them and their roles in society',
    category: 'understanding_world',
    order: 1,
    isCore: false,
    source: 'ELG: Past and Present'
  },
  {
    id: 'rec-utw-2',
    text: 'Knows some similarities and differences between things in the past and now',
    category: 'understanding_world',
    order: 2,
    isCore: false,
    source: 'ELG: Past and Present'
  },
  {
    id: 'rec-utw-3',
    text: 'Describes their immediate environment using knowledge from observation and discussion',
    category: 'understanding_world',
    order: 3,
    isCore: false,
    source: 'ELG: People, Culture and Communities'
  },
  {
    id: 'rec-utw-4',
    text: 'Recognises some similarities and differences between life in this country and life in other countries',
    category: 'understanding_world',
    order: 4,
    isCore: false,
    source: 'ELG: People, Culture and Communities'
  },
  {
    id: 'rec-utw-5',
    text: 'Explores the natural world around them, making observations and drawing pictures of animals and plants',
    category: 'understanding_world',
    order: 5,
    isCore: true,
    source: 'ELG: The Natural World'
  },
  {
    id: 'rec-utw-6',
    text: 'Understands some important processes and changes in the natural world (including seasons)',
    category: 'understanding_world',
    order: 6,
    isCore: false,
    source: 'ELG: The Natural World'
  },

  // ============================================
  // EXPRESSIVE ARTS & DESIGN (4 skills)
  // ELG 16: Creating with Materials
  // ELG 17: Being Imaginative and Expressive
  // ============================================
  {
    id: 'rec-ead-1',
    text: 'Safely uses and explores a variety of materials, tools and techniques',
    category: 'expressive_arts',
    order: 1,
    isCore: false,
    source: 'ELG: Creating with Materials'
  },
  {
    id: 'rec-ead-2',
    text: 'Experiments with colour, design, texture, form and function',
    category: 'expressive_arts',
    order: 2,
    isCore: false,
    source: 'ELG: Creating with Materials'
  },
  {
    id: 'rec-ead-3',
    text: 'Invents, adapts and recounts narratives and stories with peers and teachers',
    category: 'expressive_arts',
    order: 3,
    isCore: false,
    source: 'ELG: Being Imaginative and Expressive'
  },
  {
    id: 'rec-ead-4',
    text: 'Sings a range of well-known nursery rhymes and songs and performs songs with others',
    category: 'expressive_arts',
    order: 4,
    isCore: false,
    source: 'ELG: Being Imaginative and Expressive'
  },
];

// Summary statistics
export const receptionSkillsSummary = {
  totalSkills: 50,
  coreSkills: 28,
  byCategory: {
    communication_language: 7,
    physical_development: 7,
    personal_social_emotional: 9,
    literacy: 9,
    mathematics: 8,
    understanding_world: 6,
    expressive_arts: 4,
  }
};

console.log('Reception Skills Summary:', receptionSkillsSummary);
console.log('Total Skills:', receptionSkillsOfficial.length);
