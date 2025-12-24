/**
 * OFFICIAL YEAR 2 (6-7 years) SKILLS
 * Based on UK National Curriculum for Key Stage 1 (End of KS1)
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study (KS1)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study (KS1)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study (KS1)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 58 skills across 4 categories
 * Last verified: December 24, 2025
 */

export interface Year2Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year2SkillsOfficial: Year2Skill[] = [
  // ============================================
  // READING & WRITING (18 skills)
  // End of KS1 expectations
  // ============================================

  // Word Reading & Phonics
  {
    id: 'y2-rw-1',
    text: 'Reads accurately by blending sounds in unfamiliar words with known GPCs',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Year 2 Word Reading'
  },
  {
    id: 'y2-rw-2',
    text: 'Reads common exception words, noting unusual correspondences',
    category: 'reading_writing',
    order: 2,
    isCore: true,
    source: 'NC English: Year 2 Word Reading'
  },
  {
    id: 'y2-rw-3',
    text: 'Reads aloud books closely matched to phonic knowledge with fluency',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Year 2 Word Reading'
  },
  {
    id: 'y2-rw-4',
    text: 'Reads words containing common suffixes (-ing, -ed, -er, -est, -y, -s, -es)',
    category: 'reading_writing',
    order: 4,
    isCore: true,
    source: 'NC English: Year 2 Word Reading'
  },

  // Reading Comprehension
  {
    id: 'y2-rw-5',
    text: 'Understands both fiction and non-fiction books appropriate to reading level',
    category: 'reading_writing',
    order: 5,
    isCore: true,
    source: 'NC English: Year 2 Comprehension'
  },
  {
    id: 'y2-rw-6',
    text: 'Makes inferences based on what is said and done in texts',
    category: 'reading_writing',
    order: 6,
    isCore: true,
    source: 'NC English: Year 2 Comprehension'
  },
  {
    id: 'y2-rw-7',
    text: 'Answers and asks questions about texts',
    category: 'reading_writing',
    order: 7,
    isCore: true,
    source: 'NC English: Year 2 Comprehension'
  },
  {
    id: 'y2-rw-8',
    text: 'Predicts what might happen based on what has been read so far',
    category: 'reading_writing',
    order: 8,
    isCore: false,
    source: 'NC English: Year 2 Comprehension'
  },

  // Writing - Transcription
  {
    id: 'y2-rw-9',
    text: 'Segments spoken words into phonemes and represents these with graphemes',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Year 2 Spelling'
  },
  {
    id: 'y2-rw-10',
    text: 'Spells common exception words (Year 1 and Year 2 word lists)',
    category: 'reading_writing',
    order: 10,
    isCore: true,
    source: 'NC English: Year 2 Spelling'
  },
  {
    id: 'y2-rw-11',
    text: 'Spells words with contracted forms (can\'t, didn\'t, hasn\'t)',
    category: 'reading_writing',
    order: 11,
    isCore: false,
    source: 'NC English: Year 2 Spelling'
  },
  {
    id: 'y2-rw-12',
    text: 'Forms lowercase letters correctly with appropriate size relative to each other',
    category: 'reading_writing',
    order: 12,
    isCore: true,
    source: 'NC English: Year 2 Handwriting'
  },
  {
    id: 'y2-rw-13',
    text: 'Starts to use diagonal and horizontal strokes to join letters',
    category: 'reading_writing',
    order: 13,
    isCore: false,
    source: 'NC English: Year 2 Handwriting'
  },

  // Writing - Composition & Grammar
  {
    id: 'y2-rw-14',
    text: 'Writes narratives about personal experiences and those of others',
    category: 'reading_writing',
    order: 14,
    isCore: true,
    source: 'NC English: Year 2 Composition'
  },
  {
    id: 'y2-rw-15',
    text: 'Writes about real events, recording these simply and clearly',
    category: 'reading_writing',
    order: 15,
    isCore: false,
    source: 'NC English: Year 2 Composition'
  },
  {
    id: 'y2-rw-16',
    text: 'Uses sentences with different forms: statements, questions, commands, exclamations',
    category: 'reading_writing',
    order: 16,
    isCore: true,
    source: 'NC English: Year 2 Grammar'
  },
  {
    id: 'y2-rw-17',
    text: 'Uses conjunctions (and, but, or, when, if, that, because) to extend sentences',
    category: 'reading_writing',
    order: 17,
    isCore: true,
    source: 'NC English: Year 2 Grammar'
  },
  {
    id: 'y2-rw-18',
    text: 'Uses commas to separate items in a list and apostrophes for contractions',
    category: 'reading_writing',
    order: 18,
    isCore: false,
    source: 'NC English: Year 2 Grammar & Punctuation'
  },

  // ============================================
  // MATHEMATICS (20 skills)
  // End of KS1 expectations
  // ============================================

  // Number - Place Value
  {
    id: 'y2-math-1',
    text: 'Counts in steps of 2, 3, and 5 from 0, and in tens from any number',
    category: 'maths',
    order: 1,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Place Value'
  },
  {
    id: 'y2-math-2',
    text: 'Recognises place value of each digit in a two-digit number (tens, ones)',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Place Value'
  },
  {
    id: 'y2-math-3',
    text: 'Compares and orders numbers from 0 to 100 using <, > and = signs',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Place Value'
  },
  {
    id: 'y2-math-4',
    text: 'Reads and writes numbers to at least 100 in numerals and words',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Place Value'
  },

  // Number - Addition and Subtraction
  {
    id: 'y2-math-5',
    text: 'Recalls and uses addition and subtraction facts to 20 fluently',
    category: 'maths',
    order: 5,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Addition & Subtraction'
  },
  {
    id: 'y2-math-6',
    text: 'Derives and uses related facts up to 100',
    category: 'maths',
    order: 6,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Addition & Subtraction'
  },
  {
    id: 'y2-math-7',
    text: 'Adds and subtracts numbers using concrete objects, pictorial representations, and mentally',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Addition & Subtraction'
  },
  {
    id: 'y2-math-8',
    text: 'Shows that addition can be done in any order but subtraction cannot',
    category: 'maths',
    order: 8,
    isCore: false,
    source: 'NC Maths: Year 2 Number - Addition & Subtraction'
  },

  // Number - Multiplication and Division
  {
    id: 'y2-math-9',
    text: 'Recalls and uses multiplication and division facts for 2, 5 and 10 times tables',
    category: 'maths',
    order: 9,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Multiplication & Division'
  },
  {
    id: 'y2-math-10',
    text: 'Calculates mathematical statements for multiplication and division (using ×, ÷ and = signs)',
    category: 'maths',
    order: 10,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Multiplication & Division'
  },
  {
    id: 'y2-math-11',
    text: 'Shows that multiplication can be done in any order but division cannot',
    category: 'maths',
    order: 11,
    isCore: false,
    source: 'NC Maths: Year 2 Number - Multiplication & Division'
  },

  // Number - Fractions
  {
    id: 'y2-math-12',
    text: 'Recognises, finds, names and writes fractions 1/3, 1/4, 2/4 and 3/4 of shapes and quantities',
    category: 'maths',
    order: 12,
    isCore: true,
    source: 'NC Maths: Year 2 Number - Fractions'
  },
  {
    id: 'y2-math-13',
    text: 'Understands that 2/4 is equivalent to 1/2',
    category: 'maths',
    order: 13,
    isCore: false,
    source: 'NC Maths: Year 2 Number - Fractions'
  },

  // Measurement
  {
    id: 'y2-math-14',
    text: 'Chooses and uses appropriate standard units (cm, m, kg, g, l, ml, °C)',
    category: 'maths',
    order: 14,
    isCore: false,
    source: 'NC Maths: Year 2 Measurement'
  },
  {
    id: 'y2-math-15',
    text: 'Tells and writes the time to five minutes, including quarter past/to',
    category: 'maths',
    order: 15,
    isCore: true,
    source: 'NC Maths: Year 2 Measurement'
  },
  {
    id: 'y2-math-16',
    text: 'Knows the number of minutes in an hour and hours in a day',
    category: 'maths',
    order: 16,
    isCore: false,
    source: 'NC Maths: Year 2 Measurement'
  },

  // Geometry & Statistics
  {
    id: 'y2-math-17',
    text: 'Identifies and describes properties of 2D and 3D shapes (edges, vertices, faces)',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 2 Geometry - Properties of Shapes'
  },
  {
    id: 'y2-math-18',
    text: 'Uses mathematical vocabulary to describe position, direction and movement',
    category: 'maths',
    order: 18,
    isCore: false,
    source: 'NC Maths: Year 2 Geometry - Position & Direction'
  },
  {
    id: 'y2-math-19',
    text: 'Interprets and constructs simple pictograms, tally charts, block diagrams and tables',
    category: 'maths',
    order: 19,
    isCore: false,
    source: 'NC Maths: Year 2 Statistics'
  },
  {
    id: 'y2-math-20',
    text: 'Asks and answers simple questions by counting and comparing data',
    category: 'maths',
    order: 20,
    isCore: false,
    source: 'NC Maths: Year 2 Statistics'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (14 skills)
  // End of KS1 Science
  // ============================================

  // Living Things and Their Habitats
  {
    id: 'y2-sci-1',
    text: 'Explores and compares differences between things that are living, dead, and never lived',
    category: 'science',
    order: 1,
    isCore: true,
    source: 'NC Science: Year 2 Living Things and Habitats'
  },
  {
    id: 'y2-sci-2',
    text: 'Identifies that most living things live in habitats suited to their needs',
    category: 'science',
    order: 2,
    isCore: true,
    source: 'NC Science: Year 2 Living Things and Habitats'
  },
  {
    id: 'y2-sci-3',
    text: 'Identifies and names plants and animals in different habitats (microhabitats)',
    category: 'science',
    order: 3,
    isCore: false,
    source: 'NC Science: Year 2 Living Things and Habitats'
  },
  {
    id: 'y2-sci-4',
    text: 'Describes how animals obtain food from plants and other animals (simple food chains)',
    category: 'science',
    order: 4,
    isCore: false,
    source: 'NC Science: Year 2 Living Things and Habitats'
  },

  // Plants
  {
    id: 'y2-sci-5',
    text: 'Observes and describes how seeds and bulbs grow into mature plants',
    category: 'science',
    order: 5,
    isCore: true,
    source: 'NC Science: Year 2 Plants'
  },
  {
    id: 'y2-sci-6',
    text: 'Understands that plants need water, light and suitable temperature to grow and stay healthy',
    category: 'science',
    order: 6,
    isCore: true,
    source: 'NC Science: Year 2 Plants'
  },

  // Animals Including Humans
  {
    id: 'y2-sci-7',
    text: 'Notices that animals, including humans, have offspring which grow into adults',
    category: 'science',
    order: 7,
    isCore: true,
    source: 'NC Science: Year 2 Animals Including Humans'
  },
  {
    id: 'y2-sci-8',
    text: 'Describes basic needs of animals (food, water, air) for survival',
    category: 'science',
    order: 8,
    isCore: true,
    source: 'NC Science: Year 2 Animals Including Humans'
  },
  {
    id: 'y2-sci-9',
    text: 'Describes importance of exercise, balanced diet and hygiene for humans',
    category: 'science',
    order: 9,
    isCore: true,
    source: 'NC Science: Year 2 Animals Including Humans'
  },

  // Uses of Everyday Materials
  {
    id: 'y2-sci-10',
    text: 'Identifies and compares uses of everyday materials (wood, metal, plastic, glass, brick, rock, paper, cardboard)',
    category: 'science',
    order: 10,
    isCore: false,
    source: 'NC Science: Year 2 Uses of Everyday Materials'
  },
  {
    id: 'y2-sci-11',
    text: 'Explains how materials are chosen for specific uses based on their properties',
    category: 'science',
    order: 11,
    isCore: false,
    source: 'NC Science: Year 2 Uses of Everyday Materials'
  },
  {
    id: 'y2-sci-12',
    text: 'Finds out how shapes of solid objects can be changed (squashing, bending, twisting, stretching)',
    category: 'science',
    order: 12,
    isCore: false,
    source: 'NC Science: Year 2 Uses of Everyday Materials'
  },

  // Working Scientifically
  {
    id: 'y2-sci-13',
    text: 'Performs simple tests and observations to answer scientific questions',
    category: 'science',
    order: 13,
    isCore: true,
    source: 'NC Science: Year 2 Working Scientifically'
  },
  {
    id: 'y2-sci-14',
    text: 'Uses simple equipment to gather and record data',
    category: 'science',
    order: 14,
    isCore: false,
    source: 'NC Science: Year 2 Working Scientifically'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // ============================================
  {
    id: 'y2-life-1',
    text: 'Listens and responds with relevant comments and questions',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Year 2 Spoken Language'
  },
  {
    id: 'y2-life-2',
    text: 'Uses spoken language to develop understanding through imagining and exploring',
    category: 'life_skills',
    order: 2,
    isCore: false,
    source: 'NC English: Year 2 Spoken Language'
  },
  {
    id: 'y2-life-3',
    text: 'Speaks audibly and fluently with increasing command of Standard English',
    category: 'life_skills',
    order: 3,
    isCore: true,
    source: 'NC English: Year 2 Spoken Language'
  },
  {
    id: 'y2-life-4',
    text: 'Participates in discussions and performances',
    category: 'life_skills',
    order: 4,
    isCore: true,
    source: 'NC English: Year 2 Spoken Language'
  },
  {
    id: 'y2-life-5',
    text: 'Works independently and shows resilience when facing challenges',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'KS1 End of Year Expectations'
  },
  {
    id: 'y2-life-6',
    text: 'Collaborates effectively in group work and shares ideas respectfully',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'KS1 End of Year Expectations'
  },
];

// Summary statistics
export const year2SkillsSummary = {
  totalSkills: 58,
  coreSkills: 37,
  byCategory: {
    reading_writing: 18,
    maths: 20,
    science: 14,
    life_skills: 6,
  }
};

console.log('Year 2 Skills Summary:', year2SkillsSummary);
console.log('Total Skills:', year2SkillsOfficial.length);
