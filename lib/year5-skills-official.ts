/**
 * OFFICIAL YEAR 5 (9-10 years) SKILLS
 * Based on UK National Curriculum for Upper Key Stage 2 (Years 5-6)
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study (Upper KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study (Year 5)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study (Upper KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 64 skills across 4 categories
 * Last verified: December 25, 2025
 */

export interface Year5Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year5SkillsOfficial: Year5Skill[] = [
  // ============================================
  // READING & WRITING (21 skills)
  // Upper KS2 (Years 5-6)
  // ============================================

  // Reading - Word Reading & Comprehension
  {
    id: 'y5-rw-1',
    text: 'Applies knowledge of root words, prefixes and suffixes to read aloud and understand new words',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Upper KS2 Word Reading'
  },
  {
    id: 'y5-rw-2',
    text: 'Reads and discusses an increasingly wide range of fiction, poetry, plays, non-fiction and reference books',
    category: 'reading_writing',
    order: 2,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-3',
    text: 'Reads books structured in different ways and reads for a range of purposes',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-4',
    text: 'Makes comparisons within and across books',
    category: 'reading_writing',
    order: 4,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-5',
    text: 'Draws inferences such as inferring characters\' feelings, thoughts and motives, and justifies with evidence',
    category: 'reading_writing',
    order: 5,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-6',
    text: 'Predicts what might happen from details stated and implied',
    category: 'reading_writing',
    order: 6,
    isCore: false,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-7',
    text: 'Summarises the main ideas drawn from more than one paragraph, identifying key details',
    category: 'reading_writing',
    order: 7,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-8',
    text: 'Evaluates how authors use language, including figurative language, for effect',
    category: 'reading_writing',
    order: 8,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-9',
    text: 'Distinguishes between statements of fact and opinion',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y5-rw-10',
    text: 'Retrieves, records and presents information from non-fiction texts',
    category: 'reading_writing',
    order: 10,
    isCore: false,
    source: 'NC English: Upper KS2 Comprehension'
  },

  // Writing - Composition
  {
    id: 'y5-rw-11',
    text: 'Identifies the audience for and purpose of writing, selecting appropriate form',
    category: 'reading_writing',
    order: 11,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y5-rw-12',
    text: 'Uses further organisational and presentational devices to structure text',
    category: 'reading_writing',
    order: 12,
    isCore: false,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y5-rw-13',
    text: 'Describes settings, characters and atmosphere and integrates dialogue in narratives',
    category: 'reading_writing',
    order: 13,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y5-rw-14',
    text: 'Uses a wide range of devices to build cohesion within and across paragraphs',
    category: 'reading_writing',
    order: 14,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y5-rw-15',
    text: 'Assesses effectiveness of own and others\' writing and proposes changes',
    category: 'reading_writing',
    order: 15,
    isCore: false,
    source: 'NC English: Upper KS2 Composition'
  },

  // Writing - Grammar, Punctuation & Spelling
  {
    id: 'y5-rw-16',
    text: 'Spells words from the Year 5/6 statutory spelling list',
    category: 'reading_writing',
    order: 16,
    isCore: true,
    source: 'NC English: Upper KS2 Spelling'
  },
  {
    id: 'y5-rw-17',
    text: 'Uses relative clauses beginning with who, which, where, when, whose, that',
    category: 'reading_writing',
    order: 17,
    isCore: false,
    source: 'NC English: Upper KS2 Grammar'
  },
  {
    id: 'y5-rw-18',
    text: 'Uses modal verbs or adverbs to indicate degrees of possibility',
    category: 'reading_writing',
    order: 18,
    isCore: false,
    source: 'NC English: Upper KS2 Grammar'
  },
  {
    id: 'y5-rw-19',
    text: 'Uses commas to clarify meaning or avoid ambiguity in writing',
    category: 'reading_writing',
    order: 19,
    isCore: true,
    source: 'NC English: Upper KS2 Punctuation'
  },
  {
    id: 'y5-rw-20',
    text: 'Uses brackets, dashes or commas to indicate parenthesis',
    category: 'reading_writing',
    order: 20,
    isCore: false,
    source: 'NC English: Upper KS2 Punctuation'
  },
  {
    id: 'y5-rw-21',
    text: 'Maintains legibility in joined handwriting when writing at speed',
    category: 'reading_writing',
    order: 21,
    isCore: false,
    source: 'NC English: Upper KS2 Handwriting'
  },

  // ============================================
  // MATHEMATICS (23 skills)
  // Year 5 specific requirements
  // ============================================

  // Number - Place Value
  {
    id: 'y5-math-1',
    text: 'Reads, writes, orders and compares numbers to at least 1,000,000',
    category: 'maths',
    order: 1,
    isCore: true,
    source: 'NC Maths: Year 5 Number - Place Value'
  },
  {
    id: 'y5-math-2',
    text: 'Determines the value of each digit in numbers up to 1,000,000',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 5 Number - Place Value'
  },
  {
    id: 'y5-math-3',
    text: 'Counts forwards and backwards with positive and negative whole numbers, including through zero',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 5 Number - Place Value'
  },
  {
    id: 'y5-math-4',
    text: 'Rounds any number up to 1,000,000 to the nearest 10, 100, 1000, 10,000 and 100,000',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 5 Number - Place Value'
  },
  {
    id: 'y5-math-5',
    text: 'Interprets negative numbers in context, counts forwards and backwards through zero',
    category: 'maths',
    order: 5,
    isCore: false,
    source: 'NC Maths: Year 5 Number - Place Value'
  },

  // Number - Addition, Subtraction, Multiplication and Division
  {
    id: 'y5-math-6',
    text: 'Adds and subtracts whole numbers with more than 4 digits using formal written methods',
    category: 'maths',
    order: 6,
    isCore: false,
    source: 'NC Maths: Year 5 Addition & Subtraction'
  },
  {
    id: 'y5-math-7',
    text: 'Solves addition and subtraction multi-step problems in contexts',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 5 Addition & Subtraction'
  },
  {
    id: 'y5-math-8',
    text: 'Identifies multiples and factors, including finding all factor pairs of a number',
    category: 'maths',
    order: 8,
    isCore: true,
    source: 'NC Maths: Year 5 Multiplication & Division'
  },
  {
    id: 'y5-math-9',
    text: 'Knows and uses the vocabulary of prime numbers, prime factors and composite numbers',
    category: 'maths',
    order: 9,
    isCore: false,
    source: 'NC Maths: Year 5 Multiplication & Division'
  },
  {
    id: 'y5-math-10',
    text: 'Multiplies numbers up to 4 digits by a one- or two-digit number using formal written method',
    category: 'maths',
    order: 10,
    isCore: true,
    source: 'NC Maths: Year 5 Multiplication & Division'
  },
  {
    id: 'y5-math-11',
    text: 'Divides numbers up to 4 digits by a one-digit number using formal written method of short division',
    category: 'maths',
    order: 11,
    isCore: true,
    source: 'NC Maths: Year 5 Multiplication & Division'
  },
  {
    id: 'y5-math-12',
    text: 'Recognises and uses square numbers and cube numbers, and the notation for squared (²) and cubed (³)',
    category: 'maths',
    order: 12,
    isCore: false,
    source: 'NC Maths: Year 5 Multiplication & Division'
  },

  // Number - Fractions, Decimals and Percentages
  {
    id: 'y5-math-13',
    text: 'Compares and orders fractions whose denominators are all multiples of the same number',
    category: 'maths',
    order: 13,
    isCore: true,
    source: 'NC Maths: Year 5 Fractions'
  },
  {
    id: 'y5-math-14',
    text: 'Recognises mixed numbers and improper fractions and converts from one to another',
    category: 'maths',
    order: 14,
    isCore: true,
    source: 'NC Maths: Year 5 Fractions'
  },
  {
    id: 'y5-math-15',
    text: 'Reads and writes decimal numbers as fractions (e.g. 0.71 = 71/100)',
    category: 'maths',
    order: 15,
    isCore: true,
    source: 'NC Maths: Year 5 Decimals'
  },
  {
    id: 'y5-math-16',
    text: 'Recognises and uses thousandths and relates them to tenths, hundredths and decimal equivalents',
    category: 'maths',
    order: 16,
    isCore: false,
    source: 'NC Maths: Year 5 Decimals'
  },
  {
    id: 'y5-math-17',
    text: 'Rounds decimals with two decimal places to the nearest whole number and to one decimal place',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 5 Decimals'
  },
  {
    id: 'y5-math-18',
    text: 'Recognises the per cent symbol (%) and understands that per cent relates to number of parts per hundred',
    category: 'maths',
    order: 18,
    isCore: true,
    source: 'NC Maths: Year 5 Percentages'
  },

  // Measurement and Geometry
  {
    id: 'y5-math-19',
    text: 'Converts between different units of metric measure (e.g. km/m; cm/m; cm/mm; g/kg; l/ml)',
    category: 'maths',
    order: 19,
    isCore: true,
    source: 'NC Maths: Year 5 Measurement'
  },
  {
    id: 'y5-math-20',
    text: 'Calculates and compares area of rectangles using standard units (cm² and m²)',
    category: 'maths',
    order: 20,
    isCore: true,
    source: 'NC Maths: Year 5 Measurement'
  },
  {
    id: 'y5-math-21',
    text: 'Estimates volume (e.g. using 1 cm³ blocks to build cuboids)',
    category: 'maths',
    order: 21,
    isCore: false,
    source: 'NC Maths: Year 5 Measurement'
  },
  {
    id: 'y5-math-22',
    text: 'Identifies 3D shapes from 2D representations and knows angles are measured in degrees',
    category: 'maths',
    order: 22,
    isCore: false,
    source: 'NC Maths: Year 5 Geometry'
  },
  {
    id: 'y5-math-23',
    text: 'Completes, reads and interprets information in tables, including timetables',
    category: 'maths',
    order: 23,
    isCore: true,
    source: 'NC Maths: Year 5 Statistics'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (14 skills)
  // Upper KS2 Science (Year 5 topics)
  // ============================================

  // Living Things and Their Habitats
  {
    id: 'y5-sci-1',
    text: 'Describes the life cycles of mammals, amphibians, insects and birds',
    category: 'science',
    order: 1,
    isCore: true,
    source: 'NC Science: Year 5 Living Things'
  },
  {
    id: 'y5-sci-2',
    text: 'Describes the life process of reproduction in some plants and animals',
    category: 'science',
    order: 2,
    isCore: true,
    source: 'NC Science: Year 5 Living Things'
  },

  // Animals Including Humans
  {
    id: 'y5-sci-3',
    text: 'Describes the changes as humans develop from birth to old age',
    category: 'science',
    order: 3,
    isCore: true,
    source: 'NC Science: Year 5 Animals Including Humans'
  },

  // Properties and Changes of Materials
  {
    id: 'y5-sci-4',
    text: 'Compares and groups materials based on properties including hardness, solubility and conductivity',
    category: 'science',
    order: 4,
    isCore: true,
    source: 'NC Science: Year 5 Materials'
  },
  {
    id: 'y5-sci-5',
    text: 'Knows that some materials will dissolve in liquid to form a solution',
    category: 'science',
    order: 5,
    isCore: true,
    source: 'NC Science: Year 5 Materials'
  },
  {
    id: 'y5-sci-6',
    text: 'Uses knowledge of solids, liquids and gases to decide how mixtures might be separated',
    category: 'science',
    order: 6,
    isCore: false,
    source: 'NC Science: Year 5 Materials'
  },
  {
    id: 'y5-sci-7',
    text: 'Gives evidence that some changes result in new materials (irreversible changes)',
    category: 'science',
    order: 7,
    isCore: false,
    source: 'NC Science: Year 5 Materials'
  },

  // Earth and Space
  {
    id: 'y5-sci-8',
    text: 'Describes the movement of the Earth and other planets relative to the Sun',
    category: 'science',
    order: 8,
    isCore: true,
    source: 'NC Science: Year 5 Earth and Space'
  },
  {
    id: 'y5-sci-9',
    text: 'Describes the movement of the Moon relative to the Earth',
    category: 'science',
    order: 9,
    isCore: false,
    source: 'NC Science: Year 5 Earth and Space'
  },
  {
    id: 'y5-sci-10',
    text: 'Describes the Sun, Earth and Moon as approximately spherical bodies',
    category: 'science',
    order: 10,
    isCore: true,
    source: 'NC Science: Year 5 Earth and Space'
  },
  {
    id: 'y5-sci-11',
    text: 'Uses the idea of the Earth\'s rotation to explain day and night',
    category: 'science',
    order: 11,
    isCore: true,
    source: 'NC Science: Year 5 Earth and Space'
  },

  // Forces
  {
    id: 'y5-sci-12',
    text: 'Explains that unsupported objects fall towards the Earth because of gravity',
    category: 'science',
    order: 12,
    isCore: true,
    source: 'NC Science: Year 5 Forces'
  },
  {
    id: 'y5-sci-13',
    text: 'Identifies the effects of air resistance, water resistance and friction',
    category: 'science',
    order: 13,
    isCore: true,
    source: 'NC Science: Year 5 Forces'
  },
  {
    id: 'y5-sci-14',
    text: 'Recognises that some mechanisms, including levers, pulleys and gears, allow a smaller force to have a greater effect',
    category: 'science',
    order: 14,
    isCore: false,
    source: 'NC Science: Year 5 Forces'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // ============================================
  {
    id: 'y5-life-1',
    text: 'Listens and responds appropriately to adults and peers, asking relevant questions',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y5-life-2',
    text: 'Articulates and justifies answers, arguments and opinions with increasing complexity',
    category: 'life_skills',
    order: 2,
    isCore: true,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y5-life-3',
    text: 'Maintains attention and participates actively in collaborative conversations',
    category: 'life_skills',
    order: 3,
    isCore: false,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y5-life-4',
    text: 'Uses spoken language to develop understanding through speculating, hypothesising and exploring ideas',
    category: 'life_skills',
    order: 4,
    isCore: false,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y5-life-5',
    text: 'Shows increasing independence in organizing own learning and managing time effectively',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'Upper KS2 Learning Behaviours'
  },
  {
    id: 'y5-life-6',
    text: 'Demonstrates resilience and adaptability when facing challenges or setbacks',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'Upper KS2 Learning Behaviours'
  },
];

// Summary statistics
export const year5SkillsSummary = {
  totalSkills: 64,
  coreSkills: 42,
  byCategory: {
    reading_writing: 21,
    maths: 23,
    science: 14,
    life_skills: 6,
  }
};

console.log('Year 5 Skills Summary:', year5SkillsSummary);
console.log('Total Skills:', year5SkillsOfficial.length);
