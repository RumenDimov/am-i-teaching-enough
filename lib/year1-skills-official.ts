/**
 * OFFICIAL YEAR 1 (5-6 years) SKILLS
 * Based on UK National Curriculum for Key Stage 1
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 54 skills across 4 categories
 * Last verified: December 24, 2025
 */

export interface Year1Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year1SkillsOfficial: Year1Skill[] = [
  // ============================================
  // READING & WRITING (16 skills)
  // Based on National Curriculum: English programmes of study
  // ============================================

  // Word Reading & Phonics
  {
    id: 'y1-rw-1',
    text: 'Applies phonic knowledge to decode words (can sound out and blend unfamiliar words)',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Year 1 Word Reading'
  },
  {
    id: 'y1-rw-2',
    text: 'Responds with the correct sound to all 40+ phonemes (letter sounds)',
    category: 'reading_writing',
    order: 2,
    isCore: true,
    source: 'NC English: Year 1 Word Reading'
  },
  {
    id: 'y1-rw-3',
    text: 'Reads common exception words (e.g., the, said, one, come)',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Year 1 Word Reading'
  },
  {
    id: 'y1-rw-4',
    text: 'Reads aloud books consistent with their phonic knowledge accurately',
    category: 'reading_writing',
    order: 4,
    isCore: true,
    source: 'NC English: Year 1 Word Reading'
  },

  // Reading Comprehension
  {
    id: 'y1-rw-5',
    text: 'Listens to and discusses a wide range of stories, poems and non-fiction',
    category: 'reading_writing',
    order: 5,
    isCore: true,
    source: 'NC English: Year 1 Comprehension'
  },
  {
    id: 'y1-rw-6',
    text: 'Makes simple inferences about what is being said and done in books',
    category: 'reading_writing',
    order: 6,
    isCore: false,
    source: 'NC English: Year 1 Comprehension'
  },
  {
    id: 'y1-rw-7',
    text: 'Predicts what might happen next in a story based on what has been read',
    category: 'reading_writing',
    order: 7,
    isCore: false,
    source: 'NC English: Year 1 Comprehension'
  },
  {
    id: 'y1-rw-8',
    text: 'Participates in discussions about books, taking turns and listening to others',
    category: 'reading_writing',
    order: 8,
    isCore: true,
    source: 'NC English: Year 1 Comprehension'
  },

  // Writing - Transcription
  {
    id: 'y1-rw-9',
    text: 'Spells words containing each of the 40+ phonemes already taught',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Year 1 Spelling'
  },
  {
    id: 'y1-rw-10',
    text: 'Spells common exception words (taught word list)',
    category: 'reading_writing',
    order: 10,
    isCore: true,
    source: 'NC English: Year 1 Spelling'
  },
  {
    id: 'y1-rw-11',
    text: 'Forms lowercase letters correctly and sits letters on the line',
    category: 'reading_writing',
    order: 11,
    isCore: true,
    source: 'NC English: Year 1 Handwriting'
  },
  {
    id: 'y1-rw-12',
    text: 'Forms capital letters and digits 0-9 correctly',
    category: 'reading_writing',
    order: 12,
    isCore: false,
    source: 'NC English: Year 1 Handwriting'
  },

  // Writing - Composition
  {
    id: 'y1-rw-13',
    text: 'Says out loud what they are going to write about before writing',
    category: 'reading_writing',
    order: 13,
    isCore: true,
    source: 'NC English: Year 1 Composition'
  },
  {
    id: 'y1-rw-14',
    text: 'Sequences sentences to form short narratives (stories)',
    category: 'reading_writing',
    order: 14,
    isCore: false,
    source: 'NC English: Year 1 Composition'
  },
  {
    id: 'y1-rw-15',
    text: 'Rereads their writing to check it makes sense',
    category: 'reading_writing',
    order: 15,
    isCore: false,
    source: 'NC English: Year 1 Composition'
  },
  {
    id: 'y1-rw-16',
    text: 'Uses capital letters, full stops, and finger spaces when writing',
    category: 'reading_writing',
    order: 16,
    isCore: true,
    source: 'NC English: Year 1 Composition & Grammar'
  },

  // ============================================
  // MATHEMATICS (18 skills)
  // Based on National Curriculum: Mathematics programmes of study
  // ============================================

  // Number - Place Value
  {
    id: 'y1-math-1',
    text: 'Counts to 100 forwards and backwards, beginning with 0 or 1, or from any given number',
    category: 'maths',
    order: 1,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Place Value'
  },
  {
    id: 'y1-math-2',
    text: 'Reads and writes numbers from 1 to 20 in numerals and words',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Place Value'
  },
  {
    id: 'y1-math-3',
    text: 'Identifies one more and one less than any number up to 100',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Place Value'
  },
  {
    id: 'y1-math-4',
    text: 'Understands place value in numbers up to 100 (tens and ones)',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Place Value'
  },

  // Number - Addition and Subtraction
  {
    id: 'y1-math-5',
    text: 'Reads, writes and interprets mathematical statements using +, - and = signs',
    category: 'maths',
    order: 5,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Addition & Subtraction'
  },
  {
    id: 'y1-math-6',
    text: 'Represents and uses number bonds and related facts within 20',
    category: 'maths',
    order: 6,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Addition & Subtraction'
  },
  {
    id: 'y1-math-7',
    text: 'Adds and subtracts one-digit and two-digit numbers to 20 (including zero)',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Addition & Subtraction'
  },
  {
    id: 'y1-math-8',
    text: 'Solves one-step problems involving addition and subtraction using objects and pictures',
    category: 'maths',
    order: 8,
    isCore: true,
    source: 'NC Maths: Year 1 Number - Addition & Subtraction'
  },

  // Number - Multiplication and Division
  {
    id: 'y1-math-9',
    text: 'Solves one-step problems involving multiplication (using repeated addition)',
    category: 'maths',
    order: 9,
    isCore: false,
    source: 'NC Maths: Year 1 Number - Multiplication & Division'
  },
  {
    id: 'y1-math-10',
    text: 'Solves one-step problems involving division (using sharing and grouping)',
    category: 'maths',
    order: 10,
    isCore: false,
    source: 'NC Maths: Year 1 Number - Multiplication & Division'
  },

  // Number - Fractions
  {
    id: 'y1-math-11',
    text: 'Recognises, finds and names a half of an object, shape or quantity',
    category: 'maths',
    order: 11,
    isCore: false,
    source: 'NC Maths: Year 1 Number - Fractions'
  },
  {
    id: 'y1-math-12',
    text: 'Recognises, finds and names a quarter of an object, shape or quantity',
    category: 'maths',
    order: 12,
    isCore: false,
    source: 'NC Maths: Year 1 Number - Fractions'
  },

  // Measurement
  {
    id: 'y1-math-13',
    text: 'Compares, describes and solves problems for lengths and heights (e.g., long/short, tall/short)',
    category: 'maths',
    order: 13,
    isCore: false,
    source: 'NC Maths: Year 1 Measurement'
  },
  {
    id: 'y1-math-14',
    text: 'Compares, describes and solves problems for mass/weight (e.g., heavy/light)',
    category: 'maths',
    order: 14,
    isCore: false,
    source: 'NC Maths: Year 1 Measurement'
  },
  {
    id: 'y1-math-15',
    text: 'Tells the time to the hour and half past the hour',
    category: 'maths',
    order: 15,
    isCore: false,
    source: 'NC Maths: Year 1 Measurement'
  },

  // Geometry
  {
    id: 'y1-math-16',
    text: 'Recognises and names common 2D shapes (e.g., rectangles, circles, triangles)',
    category: 'maths',
    order: 16,
    isCore: false,
    source: 'NC Maths: Year 1 Geometry - Properties of Shapes'
  },
  {
    id: 'y1-math-17',
    text: 'Recognises and names common 3D shapes (e.g., cuboids, pyramids, spheres)',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 1 Geometry - Properties of Shapes'
  },
  {
    id: 'y1-math-18',
    text: 'Describes position, direction and movement (e.g., left, right, forwards, backwards)',
    category: 'maths',
    order: 18,
    isCore: false,
    source: 'NC Maths: Year 1 Geometry - Position & Direction'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (14 skills)
  // Based on National Curriculum: Science programmes of study - Key Stage 1
  // ============================================

  // Plants
  {
    id: 'y1-sci-1',
    text: 'Identifies and names a variety of common wild and garden plants',
    category: 'science',
    order: 1,
    isCore: false,
    source: 'NC Science: Year 1 Plants'
  },
  {
    id: 'y1-sci-2',
    text: 'Identifies and names common trees, including deciduous and evergreen trees',
    category: 'science',
    order: 2,
    isCore: false,
    source: 'NC Science: Year 1 Plants'
  },
  {
    id: 'y1-sci-3',
    text: 'Describes the basic structure of common flowering plants (roots, stem, leaves, flowers)',
    category: 'science',
    order: 3,
    isCore: false,
    source: 'NC Science: Year 1 Plants'
  },

  // Animals Including Humans
  {
    id: 'y1-sci-4',
    text: 'Identifies and names a variety of common animals (fish, amphibians, reptiles, birds, mammals)',
    category: 'science',
    order: 4,
    isCore: true,
    source: 'NC Science: Year 1 Animals Including Humans'
  },
  {
    id: 'y1-sci-5',
    text: 'Describes and compares the structure of common animals (including pets and farm animals)',
    category: 'science',
    order: 5,
    isCore: false,
    source: 'NC Science: Year 1 Animals Including Humans'
  },
  {
    id: 'y1-sci-6',
    text: 'Identifies carnivores, herbivores and omnivores',
    category: 'science',
    order: 6,
    isCore: false,
    source: 'NC Science: Year 1 Animals Including Humans'
  },
  {
    id: 'y1-sci-7',
    text: 'Names and labels the basic parts of the human body',
    category: 'science',
    order: 7,
    isCore: true,
    source: 'NC Science: Year 1 Animals Including Humans'
  },
  {
    id: 'y1-sci-8',
    text: 'Says which part of the body is associated with each sense (sight, hearing, touch, smell, taste)',
    category: 'science',
    order: 8,
    isCore: true,
    source: 'NC Science: Year 1 Animals Including Humans'
  },

  // Everyday Materials
  {
    id: 'y1-sci-9',
    text: 'Distinguishes between an object and the material from which it is made',
    category: 'science',
    order: 9,
    isCore: false,
    source: 'NC Science: Year 1 Everyday Materials'
  },
  {
    id: 'y1-sci-10',
    text: 'Identifies and names everyday materials (wood, plastic, glass, metal, water, rock)',
    category: 'science',
    order: 10,
    isCore: true,
    source: 'NC Science: Year 1 Everyday Materials'
  },
  {
    id: 'y1-sci-11',
    text: 'Describes simple physical properties of materials (hard/soft, stretchy/stiff, rough/smooth)',
    category: 'science',
    order: 11,
    isCore: false,
    source: 'NC Science: Year 1 Everyday Materials'
  },

  // Seasonal Changes
  {
    id: 'y1-sci-12',
    text: 'Observes and describes weather associated with the seasons',
    category: 'science',
    order: 12,
    isCore: true,
    source: 'NC Science: Year 1 Seasonal Changes'
  },
  {
    id: 'y1-sci-13',
    text: 'Observes and describes how day length varies across the four seasons',
    category: 'science',
    order: 13,
    isCore: false,
    source: 'NC Science: Year 1 Seasonal Changes'
  },
  {
    id: 'y1-sci-14',
    text: 'Makes simple observations and talks about changes in the natural world',
    category: 'science',
    order: 14,
    isCore: true,
    source: 'NC Science: Year 1 Working Scientifically'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // Based on typical Year 1 PSHE and social-emotional development
  // ============================================
  {
    id: 'y1-life-1',
    text: 'Listens and responds appropriately to adults and peers',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Year 1 Spoken Language'
  },
  {
    id: 'y1-life-2',
    text: 'Asks relevant questions to extend understanding',
    category: 'life_skills',
    order: 2,
    isCore: true,
    source: 'NC English: Year 1 Spoken Language'
  },
  {
    id: 'y1-life-3',
    text: 'Articulates and justifies answers, arguments and opinions',
    category: 'life_skills',
    order: 3,
    isCore: false,
    source: 'NC English: Year 1 Spoken Language'
  },
  {
    id: 'y1-life-4',
    text: 'Participates in collaborative conversations, staying on topic',
    category: 'life_skills',
    order: 4,
    isCore: true,
    source: 'NC English: Year 1 Spoken Language'
  },
  {
    id: 'y1-life-5',
    text: 'Shows perseverance when faced with challenging tasks',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'KS1 Learning Behaviours'
  },
  {
    id: 'y1-life-6',
    text: 'Works cooperatively with others in pairs and small groups',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'KS1 Learning Behaviours'
  },
];

// Summary statistics
export const year1SkillsSummary = {
  totalSkills: 54,
  coreSkills: 30,
  byCategory: {
    reading_writing: 16,
    maths: 18,
    science: 14,
    life_skills: 6,
  }
};

console.log('Year 1 Skills Summary:', year1SkillsSummary);
console.log('Total Skills:', year1SkillsOfficial.length);
