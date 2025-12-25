/**
 * OFFICIAL YEAR 6 (10-11 years) SKILLS
 * Based on UK National Curriculum for Upper Key Stage 2 (Years 5-6)
 * End of Key Stage 2 - SATs Preparation
 *
 * Sources:
 * - National Curriculum in England: English Programmes of Study (Upper KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-english-programmes-of-study
 * - National Curriculum in England: Mathematics Programmes of Study (Year 6)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-mathematics-programmes-of-study
 * - National Curriculum in England: Science Programmes of Study (Upper KS2)
 *   https://www.gov.uk/government/publications/national-curriculum-in-england-science-programmes-of-study
 *
 * Total: 68 skills across 4 categories
 * Last verified: December 25, 2025
 */

export interface Year6Skill {
  id: string;
  text: string;
  category: string;
  order: number;
  isCore: boolean;
  source: string;
}

export const year6SkillsOfficial: Year6Skill[] = [
  // ============================================
  // READING & WRITING (22 skills)
  // Upper KS2 - Year 6 expectations
  // ============================================

  // Reading - Comprehension (higher expectations for Year 6)
  {
    id: 'y6-rw-1',
    text: 'Reads age-appropriate books with confidence and fluency, including longer novels',
    category: 'reading_writing',
    order: 1,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-2',
    text: 'Recommends books to peers, giving reasons for choices',
    category: 'reading_writing',
    order: 2,
    isCore: false,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-3',
    text: 'Makes comparisons within and across books, identifying themes and conventions',
    category: 'reading_writing',
    order: 3,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-4',
    text: 'Draws inferences and justifies with evidence from multiple points in the text',
    category: 'reading_writing',
    order: 4,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-5',
    text: 'Predicts what might happen from details stated and implied, using textual evidence',
    category: 'reading_writing',
    order: 5,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-6',
    text: 'Summarises main ideas from multiple paragraphs, identifying key details that support them',
    category: 'reading_writing',
    order: 6,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-7',
    text: 'Evaluates how authors use language, grammar and structure for effect',
    category: 'reading_writing',
    order: 7,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-8',
    text: 'Distinguishes between statements of fact and opinion across different text types',
    category: 'reading_writing',
    order: 8,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-9',
    text: 'Retrieves, records and presents information from non-fiction texts effectively',
    category: 'reading_writing',
    order: 9,
    isCore: true,
    source: 'NC English: Upper KS2 Comprehension'
  },
  {
    id: 'y6-rw-10',
    text: 'Participates actively in discussions about books, building on others\' ideas',
    category: 'reading_writing',
    order: 10,
    isCore: false,
    source: 'NC English: Upper KS2 Comprehension'
  },

  // Writing - Composition
  {
    id: 'y6-rw-11',
    text: 'Writes effectively for a range of purposes and audiences, selecting appropriate form',
    category: 'reading_writing',
    order: 11,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y6-rw-12',
    text: 'Selects vocabulary and grammatical structures that reflect the level of formality required',
    category: 'reading_writing',
    order: 12,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y6-rw-13',
    text: 'Uses a wide range of devices to build cohesion within and across paragraphs',
    category: 'reading_writing',
    order: 13,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y6-rw-14',
    text: 'Uses advanced organisational and presentational devices to structure text and guide the reader',
    category: 'reading_writing',
    order: 14,
    isCore: false,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y6-rw-15',
    text: 'Assesses the effectiveness of own and others\' writing and makes appropriate revisions',
    category: 'reading_writing',
    order: 15,
    isCore: true,
    source: 'NC English: Upper KS2 Composition'
  },
  {
    id: 'y6-rw-16',
    text: 'Ensures correct subject and verb agreement when using singular and plural',
    category: 'reading_writing',
    order: 16,
    isCore: false,
    source: 'NC English: Upper KS2 Composition'
  },

  // Writing - Grammar, Punctuation & Spelling
  {
    id: 'y6-rw-17',
    text: 'Spells words from the Year 5/6 statutory spelling list accurately',
    category: 'reading_writing',
    order: 17,
    isCore: true,
    source: 'NC English: Upper KS2 Spelling'
  },
  {
    id: 'y6-rw-18',
    text: 'Uses the passive voice to affect presentation of information',
    category: 'reading_writing',
    order: 18,
    isCore: false,
    source: 'NC English: Upper KS2 Grammar'
  },
  {
    id: 'y6-rw-19',
    text: 'Uses semicolons, colons and dashes to mark boundaries between independent clauses',
    category: 'reading_writing',
    order: 19,
    isCore: false,
    source: 'NC English: Upper KS2 Punctuation'
  },
  {
    id: 'y6-rw-20',
    text: 'Uses hyphens to avoid ambiguity and colons to introduce lists',
    category: 'reading_writing',
    order: 20,
    isCore: false,
    source: 'NC English: Upper KS2 Punctuation'
  },
  {
    id: 'y6-rw-21',
    text: 'Uses expanded noun phrases to convey complicated information concisely',
    category: 'reading_writing',
    order: 21,
    isCore: false,
    source: 'NC English: Upper KS2 Grammar'
  },
  {
    id: 'y6-rw-22',
    text: 'Writes legibly, fluently and with increasing speed in joined handwriting',
    category: 'reading_writing',
    order: 22,
    isCore: false,
    source: 'NC English: Upper KS2 Handwriting'
  },

  // ============================================
  // MATHEMATICS (24 skills)
  // Year 6 specific requirements
  // ============================================

  // Number - Place Value
  {
    id: 'y6-math-1',
    text: 'Reads, writes, orders and compares numbers up to 10,000,000',
    category: 'maths',
    order: 1,
    isCore: true,
    source: 'NC Maths: Year 6 Number - Place Value'
  },
  {
    id: 'y6-math-2',
    text: 'Determines the value of each digit in numbers up to 10,000,000',
    category: 'maths',
    order: 2,
    isCore: true,
    source: 'NC Maths: Year 6 Number - Place Value'
  },
  {
    id: 'y6-math-3',
    text: 'Rounds any whole number to a required degree of accuracy',
    category: 'maths',
    order: 3,
    isCore: true,
    source: 'NC Maths: Year 6 Number - Place Value'
  },
  {
    id: 'y6-math-4',
    text: 'Uses negative numbers in context and calculates intervals across zero',
    category: 'maths',
    order: 4,
    isCore: true,
    source: 'NC Maths: Year 6 Number - Place Value'
  },

  // Number - Four Operations
  {
    id: 'y6-math-5',
    text: 'Performs mental calculations with mixed operations and large numbers',
    category: 'maths',
    order: 5,
    isCore: true,
    source: 'NC Maths: Year 6 Calculations'
  },
  {
    id: 'y6-math-6',
    text: 'Multiplies multi-digit numbers up to 4 digits by a two-digit number using long multiplication',
    category: 'maths',
    order: 6,
    isCore: true,
    source: 'NC Maths: Year 6 Multiplication & Division'
  },
  {
    id: 'y6-math-7',
    text: 'Divides numbers up to 4 digits by a two-digit number using long division',
    category: 'maths',
    order: 7,
    isCore: true,
    source: 'NC Maths: Year 6 Multiplication & Division'
  },
  {
    id: 'y6-math-8',
    text: 'Uses order of operations (BIDMAS/BODMAS) to carry out calculations',
    category: 'maths',
    order: 8,
    isCore: true,
    source: 'NC Maths: Year 6 Calculations'
  },
  {
    id: 'y6-math-9',
    text: 'Identifies common factors, common multiples and prime numbers',
    category: 'maths',
    order: 9,
    isCore: false,
    source: 'NC Maths: Year 6 Number'
  },

  // Number - Fractions, Decimals and Percentages
  {
    id: 'y6-math-10',
    text: 'Compares and orders fractions with different denominators',
    category: 'maths',
    order: 10,
    isCore: true,
    source: 'NC Maths: Year 6 Fractions'
  },
  {
    id: 'y6-math-11',
    text: 'Adds and subtracts fractions with different denominators',
    category: 'maths',
    order: 11,
    isCore: true,
    source: 'NC Maths: Year 6 Fractions'
  },
  {
    id: 'y6-math-12',
    text: 'Multiplies simple pairs of proper fractions, writing the answer in simplest form',
    category: 'maths',
    order: 12,
    isCore: false,
    source: 'NC Maths: Year 6 Fractions'
  },
  {
    id: 'y6-math-13',
    text: 'Divides proper fractions by whole numbers',
    category: 'maths',
    order: 13,
    isCore: false,
    source: 'NC Maths: Year 6 Fractions'
  },
  {
    id: 'y6-math-14',
    text: 'Associates a fraction with division and calculates decimal fraction equivalents',
    category: 'maths',
    order: 14,
    isCore: true,
    source: 'NC Maths: Year 6 Fractions & Decimals'
  },
  {
    id: 'y6-math-15',
    text: 'Recalls and uses equivalences between simple fractions, decimals and percentages',
    category: 'maths',
    order: 15,
    isCore: true,
    source: 'NC Maths: Year 6 Fractions, Decimals & Percentages'
  },

  // Ratio, Proportion and Algebra
  {
    id: 'y6-math-16',
    text: 'Solves problems involving ratio and proportion',
    category: 'maths',
    order: 16,
    isCore: true,
    source: 'NC Maths: Year 6 Ratio & Proportion'
  },
  {
    id: 'y6-math-17',
    text: 'Uses simple formulae expressed in words and symbols',
    category: 'maths',
    order: 17,
    isCore: false,
    source: 'NC Maths: Year 6 Algebra'
  },
  {
    id: 'y6-math-18',
    text: 'Generates and describes linear number sequences',
    category: 'maths',
    order: 18,
    isCore: false,
    source: 'NC Maths: Year 6 Algebra'
  },
  {
    id: 'y6-math-19',
    text: 'Expresses missing number problems algebraically and finds pairs of numbers that satisfy an equation',
    category: 'maths',
    order: 19,
    isCore: false,
    source: 'NC Maths: Year 6 Algebra'
  },

  // Measurement and Geometry
  {
    id: 'y6-math-20',
    text: 'Solves problems involving conversion between units of measure',
    category: 'maths',
    order: 20,
    isCore: true,
    source: 'NC Maths: Year 6 Measurement'
  },
  {
    id: 'y6-math-21',
    text: 'Calculates area of triangles and parallelograms',
    category: 'maths',
    order: 21,
    isCore: false,
    source: 'NC Maths: Year 6 Measurement'
  },
  {
    id: 'y6-math-22',
    text: 'Calculates volume of cubes and cuboids using standard units',
    category: 'maths',
    order: 22,
    isCore: true,
    source: 'NC Maths: Year 6 Measurement'
  },
  {
    id: 'y6-math-23',
    text: 'Describes positions on the full coordinate grid (all 4 quadrants)',
    category: 'maths',
    order: 23,
    isCore: false,
    source: 'NC Maths: Year 6 Geometry - Position & Direction'
  },
  {
    id: 'y6-math-24',
    text: 'Interprets and constructs pie charts and line graphs',
    category: 'maths',
    order: 24,
    isCore: false,
    source: 'NC Maths: Year 6 Statistics'
  },

  // ============================================
  // SCIENCE & UNDERSTANDING THE WORLD (16 skills)
  // Upper KS2 Science (Year 6 topics)
  // ============================================

  // Living Things and Their Habitats
  {
    id: 'y6-sci-1',
    text: 'Describes how living things are classified into broad groups (vertebrates, invertebrates, microorganisms)',
    category: 'science',
    order: 1,
    isCore: true,
    source: 'NC Science: Year 6 Living Things'
  },
  {
    id: 'y6-sci-2',
    text: 'Gives reasons for classifying plants and animals based on specific characteristics',
    category: 'science',
    order: 2,
    isCore: true,
    source: 'NC Science: Year 6 Living Things'
  },

  // Animals Including Humans
  {
    id: 'y6-sci-3',
    text: 'Identifies and names the main parts of the human circulatory system',
    category: 'science',
    order: 3,
    isCore: true,
    source: 'NC Science: Year 6 Animals Including Humans'
  },
  {
    id: 'y6-sci-4',
    text: 'Describes the functions of the heart, blood vessels and blood',
    category: 'science',
    order: 4,
    isCore: true,
    source: 'NC Science: Year 6 Animals Including Humans'
  },
  {
    id: 'y6-sci-5',
    text: 'Recognises the impact of diet, exercise, drugs and lifestyle on body function',
    category: 'science',
    order: 5,
    isCore: true,
    source: 'NC Science: Year 6 Animals Including Humans'
  },
  {
    id: 'y6-sci-6',
    text: 'Describes ways in which nutrients and water are transported within animals, including humans',
    category: 'science',
    order: 6,
    isCore: false,
    source: 'NC Science: Year 6 Animals Including Humans'
  },

  // Evolution and Inheritance
  {
    id: 'y6-sci-7',
    text: 'Recognises that living things have changed over time and that fossils provide evidence',
    category: 'science',
    order: 7,
    isCore: true,
    source: 'NC Science: Year 6 Evolution & Inheritance'
  },
  {
    id: 'y6-sci-8',
    text: 'Recognises that living things produce offspring of the same kind, but offspring vary',
    category: 'science',
    order: 8,
    isCore: true,
    source: 'NC Science: Year 6 Evolution & Inheritance'
  },
  {
    id: 'y6-sci-9',
    text: 'Identifies how animals and plants are adapted to suit their environment',
    category: 'science',
    order: 9,
    isCore: true,
    source: 'NC Science: Year 6 Evolution & Inheritance'
  },
  {
    id: 'y6-sci-10',
    text: 'Understands that adaptation may lead to evolution',
    category: 'science',
    order: 10,
    isCore: false,
    source: 'NC Science: Year 6 Evolution & Inheritance'
  },

  // Light
  {
    id: 'y6-sci-11',
    text: 'Recognises that light appears to travel in straight lines',
    category: 'science',
    order: 11,
    isCore: true,
    source: 'NC Science: Year 6 Light'
  },
  {
    id: 'y6-sci-12',
    text: 'Explains that we see things because light travels from light sources to our eyes',
    category: 'science',
    order: 12,
    isCore: true,
    source: 'NC Science: Year 6 Light'
  },
  {
    id: 'y6-sci-13',
    text: 'Uses the idea that light travels in straight lines to explain shadows and reflections',
    category: 'science',
    order: 13,
    isCore: false,
    source: 'NC Science: Year 6 Light'
  },

  // Electricity
  {
    id: 'y6-sci-14',
    text: 'Associates the brightness of a lamp or volume of buzzer with number and voltage of cells',
    category: 'science',
    order: 14,
    isCore: false,
    source: 'NC Science: Year 6 Electricity'
  },
  {
    id: 'y6-sci-15',
    text: 'Compares and gives reasons for variations in how components function',
    category: 'science',
    order: 15,
    isCore: false,
    source: 'NC Science: Year 6 Electricity'
  },
  {
    id: 'y6-sci-16',
    text: 'Uses recognised symbols when representing a simple circuit in a diagram',
    category: 'science',
    order: 16,
    isCore: true,
    source: 'NC Science: Year 6 Electricity'
  },

  // ============================================
  // LIFE SKILLS (6 skills)
  // ============================================
  {
    id: 'y6-life-1',
    text: 'Gains, maintains and monitors the interest of listeners through varied expression and vocabulary',
    category: 'life_skills',
    order: 1,
    isCore: true,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y6-life-2',
    text: 'Participates in debates and presentations, using formal language and structure',
    category: 'life_skills',
    order: 2,
    isCore: true,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y6-life-3',
    text: 'Listens to, challenges and builds on others\' ideas respectfully',
    category: 'life_skills',
    order: 3,
    isCore: true,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y6-life-4',
    text: 'Uses Standard English confidently in formal situations and discussions',
    category: 'life_skills',
    order: 4,
    isCore: false,
    source: 'NC English: Upper KS2 Spoken Language'
  },
  {
    id: 'y6-life-5',
    text: 'Shows responsibility for own learning and sets personal targets for improvement',
    category: 'life_skills',
    order: 5,
    isCore: true,
    source: 'End of KS2 Learning Behaviours'
  },
  {
    id: 'y6-life-6',
    text: 'Demonstrates readiness for secondary school transition with independence and resilience',
    category: 'life_skills',
    order: 6,
    isCore: true,
    source: 'End of KS2 Learning Behaviours'
  },
];

// Summary statistics
export const year6SkillsSummary = {
  totalSkills: 68,
  coreSkills: 44,
  byCategory: {
    reading_writing: 22,
    maths: 24,
    science: 16,
    life_skills: 6,
  }
};

console.log('Year 6 Skills Summary:', year6SkillsSummary);
console.log('Total Skills:', year6SkillsOfficial.length);
