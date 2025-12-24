/**
 * OFFICIAL YEAR 4 (8-9 years) SKILLS
 * Based on UK National Curriculum for Lower Key Stage 2 (Years 3-4)
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study (Lower KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study (Year 4)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study (Lower KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 62 skills across 4 categories
 * Last verified: December 24, 2025
 */

export interface Year4Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year4SkillsOfficial: Year4Skill[] = [
  // ============================================
  // READING & WRITING (20 skills)
  // Lower KS2 (extended from Year 3)
  // ============================================

  // Reading - Word Reading & Comprehension
  {
    id: 'y4-rw-1',
    text: 'Applies growing knowledge of root words, prefixes and suffixes to read aloud and understand meaning',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Year 3/4 Word Reading'
  },
  {
    id: 'y4-rw-2',
    text: 'Reads further exception words, noting unusual correspondences between spelling and sound',
    category: 'reading_writing',
    order: 2,
    isCore: true,
    source: 'NC English: Year 3/4 Word Reading'
  },
  {
    id: 'y4-rw-3',
    text: 'Listens to, reads and discusses an increasingly wide range of fiction, poetry, plays and non-fiction',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-4',
    text: 'Uses dictionaries to check meanings of words they have read',
    category: 'reading_writing',
    order: 4,
    isCore: false,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-5',
    text: 'Identifies themes and conventions in a wide range of books',
    category: 'reading_writing',
    order: 5,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-6',
    text: 'Draws inferences such as inferring characters\' feelings, thoughts and motives from their actions',
    category: 'reading_writing',
    order: 6,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-7',
    text: 'Justifies inferences with evidence from the text',
    category: 'reading_writing',
    order: 7,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-8',
    text: 'Predicts what might happen from details stated and implied',
    category: 'reading_writing',
    order: 8,
    isCore: false,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-9',
    text: 'Identifies main ideas drawn from more than one paragraph and summarises these',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },
  {
    id: 'y4-rw-10',
    text: 'Retrieves and records information from non-fiction texts',
    category: 'reading_writing',
    order: 10,
    isCore: true,
    source: 'NC English: Year 3/4 Comprehension'
  },

  // Writing - Composition
  {
    id: 'y4-rw-11',
    text: 'Plans writing by discussing structure, vocabulary and grammar',
    category: 'reading_writing',
    order: 11,
    isCore: true,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y4-rw-12',
    text: 'Creates settings, characters and plot in narratives with consideration for audience',
    category: 'reading_writing',
    order: 12,
    isCore: true,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y4-rw-13',
    text: 'Uses organisational devices in non-narrative writing (headings, subheadings, bullet points)',
    category: 'reading_writing',
    order: 13,
    isCore: false,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y4-rw-14',
    text: 'Proposes changes to grammar and vocabulary to improve consistency and cohesion',
    category: 'reading_writing',
    order: 14,
    isCore: false,
    source: 'NC English: Year 3/4 Composition'
  },
  {
    id: 'y4-rw-15',
    text: 'Proof-reads for spelling and punctuation errors',
    category: 'reading_writing',
    order: 15,
    isCore: true,
    source: 'NC English: Year 3/4 Composition'
  },

  // Writing - Spelling & Grammar
  {
    id: 'y4-rw-16',
    text: 'Spells words from Year 3/4 statutory spelling list',
    category: 'reading_writing',
    order: 16,
    isCore: true,
    source: 'NC English: Year 3/4 Spelling'
  },
  {
    id: 'y4-rw-17',
    text: 'Uses fronted adverbials and commas after fronted adverbials',
    category: 'reading_writing',
    order: 17,
    isCore: true,
    source: 'NC English: Year 3/4 Grammar & Punctuation'
  },
  {
    id: 'y4-rw-18',
    text: 'Uses pronouns and nouns appropriately to aid cohesion and avoid repetition',
    category: 'reading_writing',
    order: 18,
    isCore: false,
    source: 'NC English: Year 3/4 Grammar'
  },
  {
    id: 'y4-rw-19',
    text: 'Uses inverted commas and other punctuation to indicate direct speech',
    category: 'reading_writing',
    order: 19,
    isCore: true,
    source: 'NC English: Year 3/4 Grammar & Punctuation'
  },
  {
    id: 'y4-rw-20',
    text: 'Uses apostrophes to mark plural possession (e.g., the girls\' names)',
    category: 'reading_writing',
    order: 20,
    isCore: false,
    source: 'NC English: Year 3/4 Grammar & Punctuation'
  },

  // ============================================
  // MATHEMATICS (22 skills)
  // Year 4 specific requirements
  // ============================================

  // Number - Place Value
  {
    id: 'y4-math-1',
    text: 'Counts in multiples of 6, 7, 9, 25 and 1000',
    category: 'maths',
    order: 1,
    isCore: false,
    source: 'NC Maths: Year 4 Number - Place Value'
  },
  {
    id: 'y4-math-2',
    text: 'Recognises place value of each digit in a four-digit number (thousands, hundreds, tens, ones)',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Place Value'
  },
  {
    id: 'y4-math-3',
    text: 'Orders and compares numbers beyond 1000',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Place Value'
  },
  {
    id: 'y4-math-4',
    text: 'Rounds any number to the nearest 10, 100 or 1000',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Place Value'
  },
  {
    id: 'y4-math-5',
    text: 'Counts backwards through zero to include negative numbers',
    category: 'maths',
    order: 5,
    isCore: false,
    source: 'NC Maths: Year 4 Number - Place Value'
  },

  // Number - Addition and Subtraction
  {
    id: 'y4-math-6',
    text: 'Adds and subtracts numbers with up to 4 digits using formal written methods',
    category: 'maths',
    order: 6,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Addition & Subtraction'
  },
  {
    id: 'y4-math-7',
    text: 'Estimates and uses inverse operations to check answers',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Addition & Subtraction'
  },
  {
    id: 'y4-math-8',
    text: 'Solves two-step addition and subtraction problems in context',
    category: 'maths',
    order: 8,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Addition & Subtraction'
  },

  // Number - Multiplication and Division
  {
    id: 'y4-math-9',
    text: 'Recalls multiplication and division facts for tables up to 12 × 12',
    category: 'maths',
    order: 9,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Multiplication & Division'
  },
  {
    id: 'y4-math-10',
    text: 'Uses place value and known facts to multiply and divide mentally',
    category: 'maths',
    order: 10,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Multiplication & Division'
  },
  {
    id: 'y4-math-11',
    text: 'Multiplies two-digit and three-digit numbers by a one-digit number using formal written layout',
    category: 'maths',
    order: 11,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Multiplication & Division'
  },
  {
    id: 'y4-math-12',
    text: 'Solves problems involving multiplying and adding, including integer scaling and correspondence problems',
    category: 'maths',
    order: 12,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Multiplication & Division'
  },

  // Number - Fractions and Decimals
  {
    id: 'y4-math-13',
    text: 'Recognises and shows families of common equivalent fractions',
    category: 'maths',
    order: 13,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Fractions'
  },
  {
    id: 'y4-math-14',
    text: 'Counts up and down in hundredths and recognises that hundredths arise when dividing by 100',
    category: 'maths',
    order: 14,
    isCore: false,
    source: 'NC Maths: Year 4 Number - Fractions & Decimals'
  },
  {
    id: 'y4-math-15',
    text: 'Recognises and writes decimal equivalents of any number of tenths or hundredths',
    category: 'maths',
    order: 15,
    isCore: true,
    source: 'NC Maths: Year 4 Number - Fractions & Decimals'
  },
  {
    id: 'y4-math-16',
    text: 'Finds effect of dividing one- or two-digit number by 10 or 100 (decimal answers)',
    category: 'maths',
    order: 16,
    isCore: false,
    source: 'NC Maths: Year 4 Number - Fractions & Decimals'
  },
  {
    id: 'y4-math-17',
    text: 'Rounds decimals with one decimal place to nearest whole number',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 4 Number - Fractions & Decimals'
  },

  // Measurement & Geometry
  {
    id: 'y4-math-18',
    text: 'Converts between different units of measure (km/m, hour/minute)',
    category: 'maths',
    order: 18,
    isCore: false,
    source: 'NC Maths: Year 4 Measurement'
  },
  {
    id: 'y4-math-19',
    text: 'Calculates perimeter of rectilinear shapes and area of rectangles',
    category: 'maths',
    order: 19,
    isCore: true,
    source: 'NC Maths: Year 4 Measurement'
  },
  {
    id: 'y4-math-20',
    text: 'Identifies acute and obtuse angles and compares and orders angles',
    category: 'maths',
    order: 20,
    isCore: false,
    source: 'NC Maths: Year 4 Geometry - Properties of Shapes'
  },
  {
    id: 'y4-math-21',
    text: 'Identifies lines of symmetry in 2D shapes',
    category: 'maths',
    order: 21,
    isCore: false,
    source: 'NC Maths: Year 4 Geometry - Properties of Shapes'
  },
  {
    id: 'y4-math-22',
    text: 'Describes positions on a 2D grid as coordinates',
    category: 'maths',
    order: 22,
    isCore: false,
    source: 'NC Maths: Year 4 Geometry - Position & Direction'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (14 skills)
  // Lower KS2 Science
  // ============================================

  // Living Things and Their Habitats
  {
    id: 'y4-sci-1',
    text: 'Recognises that living things can be grouped in a variety of ways',
    category: 'science',
    order: 1,
    isCore: true,
    source: 'NC Science: Year 4 Living Things and Habitats'
  },
  {
    id: 'y4-sci-2',
    text: 'Explores and uses classification keys to help group, identify and name living things',
    category: 'science',
    order: 2,
    isCore: false,
    source: 'NC Science: Year 4 Living Things and Habitats'
  },
  {
    id: 'y4-sci-3',
    text: 'Recognises that environments can change and this can pose dangers to living things',
    category: 'science',
    order: 3,
    isCore: false,
    source: 'NC Science: Year 4 Living Things and Habitats'
  },

  // Animals Including Humans
  {
    id: 'y4-sci-4',
    text: 'Describes simple functions of basic parts of digestive system in humans',
    category: 'science',
    order: 4,
    isCore: true,
    source: 'NC Science: Year 4 Animals Including Humans'
  },
  {
    id: 'y4-sci-5',
    text: 'Identifies different types of teeth in humans and their simple functions',
    category: 'science',
    order: 5,
    isCore: true,
    source: 'NC Science: Year 4 Animals Including Humans'
  },
  {
    id: 'y4-sci-6',
    text: 'Constructs and interprets a variety of food chains, identifying producers, predators and prey',
    category: 'science',
    order: 6,
    isCore: true,
    source: 'NC Science: Year 4 Animals Including Humans'
  },

  // States of Matter
  {
    id: 'y4-sci-7',
    text: 'Compares and groups materials as solids, liquids or gases',
    category: 'science',
    order: 7,
    isCore: true,
    source: 'NC Science: Year 4 States of Matter'
  },
  {
    id: 'y4-sci-8',
    text: 'Observes that some materials change state when heated or cooled',
    category: 'science',
    order: 8,
    isCore: true,
    source: 'NC Science: Year 4 States of Matter'
  },
  {
    id: 'y4-sci-9',
    text: 'Identifies process of evaporation and condensation in water cycle',
    category: 'science',
    order: 9,
    isCore: true,
    source: 'NC Science: Year 4 States of Matter'
  },

  // Sound
  {
    id: 'y4-sci-10',
    text: 'Identifies how sounds are made, associating with vibration',
    category: 'science',
    order: 10,
    isCore: true,
    source: 'NC Science: Year 4 Sound'
  },
  {
    id: 'y4-sci-11',
    text: 'Recognises that vibrations from sounds travel through a medium to the ear',
    category: 'science',
    order: 11,
    isCore: false,
    source: 'NC Science: Year 4 Sound'
  },
  {
    id: 'y4-sci-12',
    text: 'Finds patterns between pitch of sound and features of object that produced it',
    category: 'science',
    order: 12,
    isCore: false,
    source: 'NC Science: Year 4 Sound'
  },

  // Electricity
  {
    id: 'y4-sci-13',
    text: 'Identifies common appliances that run on electricity and constructs simple series circuits',
    category: 'science',
    order: 13,
    isCore: true,
    source: 'NC Science: Year 4 Electricity'
  },
  {
    id: 'y4-sci-14',
    text: 'Identifies whether or not a lamp will light in a simple series circuit based on position of switches',
    category: 'science',
    order: 14,
    isCore: false,
    source: 'NC Science: Year 4 Electricity'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // ============================================
  {
    id: 'y4-life-1',
    text: 'Listens carefully and responds appropriately, asking relevant questions',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y4-life-2',
    text: 'Uses spoken language to develop understanding through speculating and exploring ideas',
    category: 'life_skills',
    order: 2,
    isCore: false,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y4-life-3',
    text: 'Participates in discussions, presentations, performances and debates',
    category: 'life_skills',
    order: 3,
    isCore: true,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y4-life-4',
    text: 'Uses Standard English with increasing confidence in formal situations',
    category: 'life_skills',
    order: 4,
    isCore: false,
    source: 'NC English: Year 3/4 Spoken Language'
  },
  {
    id: 'y4-life-5',
    text: 'Demonstrates independence and resilience when tackling challenging tasks',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'Lower KS2 Learning Behaviours'
  },
  {
    id: 'y4-life-6',
    text: 'Reflects on own learning and takes increasing responsibility for improvement',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'Lower KS2 Learning Behaviours'
  },
];

// Summary statistics
export const year4SkillsSummary = {
  totalSkills: 62,
  coreSkills: 40,
  byCategory: {
    reading_writing: 20,
    maths: 22,
    science: 14,
    life_skills: 6,
  }
};

console.log('Year 4 Skills Summary:', year4SkillsSummary);
console.log('Total Skills:', year4SkillsOfficial.length);
