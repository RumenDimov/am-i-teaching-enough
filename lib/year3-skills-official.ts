/**
 * OFFICIAL YEAR 3 (7-8 years) SKILLS
 * Based on UK National Curriculum for Lower Key Stage 2 (Years 3-4)
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study (Lower KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study (Year 3)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study (Lower KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 60 skills across 4 categories
 * Last verified: December 24, 2025
 */

export interface Year3Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year3SkillsOfficial: Year3Skill[] = [
  // ============================================
  // READING & WRITING (20 skills)
  // Lower KS2 expectations
  // ============================================

  // Reading - Word Reading
  {
    id: 'y3-rw-1',
    text: 'Applies knowledge of root words, prefixes and suffixes to read aloud and understand new words',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Year 3/4 Word Reading'
  },
  {
    id: 'y3-rw-2',
    text: 'Reads further exception words, noting unusual correspondences',
    category: 'reading_writing',
    order: 2,
    isCore: true,
    source: 'NC English: Year 3/4 Word Reading'
  },

  // Reading - Comprehension
  {
    id: 'y3-rw-3',
    text: 'Listens to and discusses a wide range of fiction, poetry, plays and non-fiction',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-4',
    text: 'Reads books structured in different ways for a range of purposes',
    category: 'reading_writing',
    order: 4,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-5',
    text: 'Uses dictionaries to check meaning of words read',
    category: 'reading_writing',
    order: 5,
    isCore: false,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-6',
    text: 'Draws inferences such as inferring characters\' feelings, thoughts and motives',
    category: 'reading_writing',
    order: 6,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-7',
    text: 'Predicts what might happen from details stated and implied',
    category: 'reading_writing',
    order: 7,
    isCore: false,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-8',
    text: 'Identifies main ideas drawn from more than one paragraph',
    category: 'reading_writing',
    order: 8,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y3-rw-9',
    text: 'Retrieves and records information from non-fiction texts',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },

  // Writing - Composition
  {
    id: 'y3-rw-10',
    text: 'Plans writing by discussing and recording ideas',
    category: 'reading_writing',
    order: 10,
    isCore: true,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y3-rw-11',
    text: 'Organises paragraphs around a theme',
    category: 'reading_writing',
    order: 11,
    isCore: true,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y3-rw-12',
    text: 'Creates settings, characters and plot in narratives',
    category: 'reading_writing',
    order: 12,
    isCore: false,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y3-rw-13',
    text: 'Uses simple organisational devices in non-narrative writing (headings, subheadings)',
    category: 'reading_writing',
    order: 13,
    isCore: false,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y3-rw-14',
    text: 'Assesses effectiveness of own and others\' writing and suggests improvements',
    category: 'reading_writing',
    order: 14,
    isCore: false,
    source: 'NC English: Year 3/4 Composition'
  },

  // Writing - Spelling & Grammar
  {
    id: 'y3-rw-15',
    text: 'Spells words from Year 3/4 word list correctly',
    category: 'reading_writing',
    order: 15,
    isCore: true,
    source: 'NC English: Year 3/4 Spelling'
  },
  {
    id: 'y3-rw-16',
    text: 'Uses prefixes and suffixes correctly (un-, dis-, mis-, re-, sub-, super-, anti-)',
    category: 'reading_writing',
    order: 16,
    isCore: true,
    source: 'NC English: Year 3/4 Spelling'
  },
  {
    id: 'y3-rw-17',
    text: 'Uses a range of conjunctions (when, if, because, although)',
    category: 'reading_writing',
    order: 17,
    isCore: true,
    source: 'NC English: Year 3/4 Grammar'
  },
  {
    id: 'y3-rw-18',
    text: 'Uses present perfect form of verbs (e.g., "He has gone out to play")',
    category: 'reading_writing',
    order: 18,
    isCore: false,
    source: 'NC English: Year 3/4 Grammar'
  },
  {
    id: 'y3-rw-19',
    text: 'Uses inverted commas to punctuate direct speech',
    category: 'reading_writing',
    order: 19,
    isCore: true,
    source: 'NC English: Year 3/4 Grammar & Punctuation'
  },
  {
    id: 'y3-rw-20',
    text: 'Writes with increasingly neat and legible joined handwriting',
    category: 'reading_writing',
    order: 20,
    isCore: false,
    source: 'NC English: Year 3/4 Handwriting'
  },

  // ============================================
  // MATHEMATICS (20 skills)
  // Year 3 specific requirements
  // ============================================

  // Number - Place Value
  {
    id: 'y3-math-1',
    text: 'Counts from 0 in multiples of 4, 8, 50 and 100',
    category: 'maths',
    order: 1,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Place Value'
  },
  {
    id: 'y3-math-2',
    text: 'Recognises place value of each digit in a three-digit number (hundreds, tens, ones)',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Place Value'
  },
  {
    id: 'y3-math-3',
    text: 'Compares and orders numbers up to 1000',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Place Value'
  },
  {
    id: 'y3-math-4',
    text: 'Reads and writes numbers up to 1000 in numerals and words',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Place Value'
  },

  // Number - Addition and Subtraction
  {
    id: 'y3-math-5',
    text: 'Adds and subtracts numbers mentally (three-digit number and ones, tens, hundreds)',
    category: 'maths',
    order: 5,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Addition & Subtraction'
  },
  {
    id: 'y3-math-6',
    text: 'Adds and subtracts numbers with up to three digits using formal written methods',
    category: 'maths',
    order: 6,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Addition & Subtraction'
  },
  {
    id: 'y3-math-7',
    text: 'Estimates answers to calculations and uses inverse to check',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Addition & Subtraction'
  },
  {
    id: 'y3-math-8',
    text: 'Solves problems including missing number problems using addition and subtraction',
    category: 'maths',
    order: 8,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Addition & Subtraction'
  },

  // Number - Multiplication and Division
  {
    id: 'y3-math-9',
    text: 'Recalls and uses multiplication and division facts for 3, 4 and 8 times tables',
    category: 'maths',
    order: 9,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Multiplication & Division'
  },
  {
    id: 'y3-math-10',
    text: 'Writes and calculates mathematical statements for multiplication and division',
    category: 'maths',
    order: 10,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Multiplication & Division'
  },
  {
    id: 'y3-math-11',
    text: 'Solves problems involving multiplication and division using materials and arrays',
    category: 'maths',
    order: 11,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Multiplication & Division'
  },

  // Number - Fractions
  {
    id: 'y3-math-12',
    text: 'Counts up and down in tenths and understands that tenths arise from dividing by 10',
    category: 'maths',
    order: 12,
    isCore: false,
    source: 'NC Maths: Year 3 Number - Fractions'
  },
  {
    id: 'y3-math-13',
    text: 'Recognises, finds and writes fractions of a discrete set of objects (unit fractions and non-unit fractions)',
    category: 'maths',
    order: 13,
    isCore: true,
    source: 'NC Maths: Year 3 Number - Fractions'
  },
  {
    id: 'y3-math-14',
    text: 'Compares and orders unit fractions and fractions with same denominators',
    category: 'maths',
    order: 14,
    isCore: false,
    source: 'NC Maths: Year 3 Number - Fractions'
  },

  // Measurement
  {
    id: 'y3-math-15',
    text: 'Measures, compares, adds and subtracts lengths (m/cm/mm), mass (kg/g), volume/capacity (l/ml)',
    category: 'maths',
    order: 15,
    isCore: true,
    source: 'NC Maths: Year 3 Measurement'
  },
  {
    id: 'y3-math-16',
    text: 'Tells and writes the time from analogue clock (12-hour and 24-hour)',
    category: 'maths',
    order: 16,
    isCore: true,
    source: 'NC Maths: Year 3 Measurement'
  },
  {
    id: 'y3-math-17',
    text: 'Estimates and reads time with increasing accuracy to nearest minute',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 3 Measurement'
  },

  // Geometry & Statistics
  {
    id: 'y3-math-18',
    text: 'Draws 2D shapes and makes 3D shapes using modelling materials',
    category: 'maths',
    order: 18,
    isCore: false,
    source: 'NC Maths: Year 3 Geometry - Properties of Shapes'
  },
  {
    id: 'y3-math-19',
    text: 'Recognises angles as property of shape and identifies right angles',
    category: 'maths',
    order: 19,
    isCore: false,
    source: 'NC Maths: Year 3 Geometry - Properties of Shapes'
  },
  {
    id: 'y3-math-20',
    text: 'Interprets and presents data using bar charts, pictograms and tables',
    category: 'maths',
    order: 20,
    isCore: false,
    source: 'NC Maths: Year 3 Statistics'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (14 skills)
  // Lower KS2 Science
  // ============================================

  // Plants
  {
    id: 'y3-sci-1',
    text: 'Identifies and describes functions of different parts of flowering plants (roots, stem, leaves, flowers)',
    category: 'science',
    order: 1,
    isCore: true,
    source: 'NC Science: Year 3 Plants'
  },
  {
    id: 'y3-sci-2',
    text: 'Explores requirements of plants for life and growth (air, light, water, nutrients, room to grow)',
    category: 'science',
    order: 2,
    isCore: true,
    source: 'NC Science: Year 3 Plants'
  },
  {
    id: 'y3-sci-3',
    text: 'Investigates way in which water is transported within plants',
    category: 'science',
    order: 3,
    isCore: false,
    source: 'NC Science: Year 3 Plants'
  },

  // Animals Including Humans
  {
    id: 'y3-sci-4',
    text: 'Identifies that animals, including humans, need right types and amount of nutrition',
    category: 'science',
    order: 4,
    isCore: true,
    source: 'NC Science: Year 3 Animals Including Humans'
  },
  {
    id: 'y3-sci-5',
    text: 'Identifies that humans and some animals have skeletons and muscles for support, protection and movement',
    category: 'science',
    order: 5,
    isCore: true,
    source: 'NC Science: Year 3 Animals Including Humans'
  },

  // Rocks
  {
    id: 'y3-sci-6',
    text: 'Compares and groups together different kinds of rocks based on appearance and properties',
    category: 'science',
    order: 6,
    isCore: false,
    source: 'NC Science: Year 3 Rocks'
  },
  {
    id: 'y3-sci-7',
    text: 'Describes how fossils are formed',
    category: 'science',
    order: 7,
    isCore: false,
    source: 'NC Science: Year 3 Rocks'
  },
  {
    id: 'y3-sci-8',
    text: 'Recognises that soils are made from rocks and organic matter',
    category: 'science',
    order: 8,
    isCore: false,
    source: 'NC Science: Year 3 Rocks'
  },

  // Light
  {
    id: 'y3-sci-9',
    text: 'Recognises that they need light in order to see and that dark is absence of light',
    category: 'science',
    order: 9,
    isCore: true,
    source: 'NC Science: Year 3 Light'
  },
  {
    id: 'y3-sci-10',
    text: 'Notices that light is reflected from surfaces',
    category: 'science',
    order: 10,
    isCore: false,
    source: 'NC Science: Year 3 Light'
  },
  {
    id: 'y3-sci-11',
    text: 'Recognises that shadows are formed when light from source is blocked',
    category: 'science',
    order: 11,
    isCore: true,
    source: 'NC Science: Year 3 Light'
  },

  // Forces and Magnets
  {
    id: 'y3-sci-12',
    text: 'Compares how things move on different surfaces and notices some forces need contact',
    category: 'science',
    order: 12,
    isCore: false,
    source: 'NC Science: Year 3 Forces and Magnets'
  },
  {
    id: 'y3-sci-13',
    text: 'Observes how magnets attract or repel each other and attract some materials',
    category: 'science',
    order: 13,
    isCore: true,
    source: 'NC Science: Year 3 Forces and Magnets'
  },
  {
    id: 'y3-sci-14',
    text: 'Makes systematic and careful observations and takes accurate measurements',
    category: 'science',
    order: 14,
    isCore: true,
    source: 'NC Science: Year 3 Working Scientifically'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // ============================================
  {
    id: 'y3-life-1',
    text: 'Articulates and justifies answers with increasing confidence',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y3-life-2',
    text: 'Maintains attention and participates actively in collaborative conversations',
    category: 'life_skills',
    order: 2,
    isCore: true,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y3-life-3',
    text: 'Gains, maintains and monitors interest of listeners through varied expression',
    category: 'life_skills',
    order: 3,
    isCore: false,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y3-life-4',
    text: 'Uses relevant strategies to build vocabulary',
    category: 'life_skills',
    order: 4,
    isCore: false,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y3-life-5',
    text: 'Shows independence in learning and takes responsibility for own work',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'Lower KS2 Learning Behaviours'
  },
  {
    id: 'y3-life-6',
    text: 'Works collaboratively, listens to others and builds on their ideas',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'Lower KS2 Learning Behaviours'
  },
];

// Summary statistics
export const year3SkillsSummary = {
  totalSkills: 60,
  coreSkills: 39,
  byCategory: {
    reading_writing: 20,
    maths: 20,
    science: 14,
    life_skills: 6,
  }
};

console.log('Year 3 Skills Summary:', year3SkillsSummary);
console.log('Total Skills:', year3SkillsOfficial.length);
