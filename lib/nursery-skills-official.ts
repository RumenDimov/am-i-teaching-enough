/**
 * NURSERY (3-4 years) SKILLS
 *
 * Based on official UK Government sources:
 * - EYFS Development Matters (Sept 2023)
 * - https://www.gov.uk/government/publications/development-matters--2/development-matters
 * - https://www.gov.uk/early-years-foundation-stage
 *
 * Age Range: 3-4 years old (Nursery)
 * Framework: Early Years Foundation Stage (EYFS)
 *
 * EYFS has 7 areas of learning:
 * PRIME AREAS:
 * 1. Communication and Language
 * 2. Physical Development
 * 3. Personal, Social and Emotional Development
 *
 * SPECIFIC AREAS:
 * 4. Literacy
 * 5. Mathematics
 * 6. Understanding the World
 * 7. Expressive Arts and Design
 */

export const nurserySkills = {
  // 1. COMMUNICATION AND LANGUAGE (Prime Area)
  communication_language: [
    {
      id: 'nur-cl-1',
      text: 'Enjoys listening to longer stories and can remember what happens',
      order: 1,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-2',
      text: 'Can understand and follow two-part instructions (e.g., "Get your coat and wait at the door")',
      order: 2,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-3',
      text: 'Uses sentences of 4-6 words (e.g., "I want to play with cars")',
      order: 3,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-4',
      text: 'Connects ideas using words like "because", "or", and "and"',
      order: 4,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-5',
      text: 'Uses past and future tense (e.g., "I went to the shop", "I am going")',
      order: 5,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-6',
      text: 'Begins to understand "why" questions',
      order: 6,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
    {
      id: 'nur-cl-7',
      text: 'Can pay attention to more than one thing at a time (though finds this challenging)',
      order: 7,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Communication and Language'
    },
  ],

  // 2. PHYSICAL DEVELOPMENT (Prime Area)
  physical_development: [
    {
      id: 'nur-pd-1',
      text: 'Can walk, run, jump, and climb stairs independently',
      order: 1,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-2',
      text: 'Can spin, roll, and use playground equipment like swings',
      order: 2,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-3',
      text: 'Can ride tricycles, scooters, or push-along toys',
      order: 3,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-4',
      text: 'Enjoys ball games: kicking, throwing, and catching',
      order: 4,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-5',
      text: 'Can manage buttons and zips independently',
      order: 5,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-6',
      text: 'Can pour drinks with increasing control',
      order: 6,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-7',
      text: 'Shows desire to be independent with dressing and feeding',
      order: 7,
      isCore: true,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
    {
      id: 'nur-pd-8',
      text: 'Begins to use knife and fork for eating',
      order: 8,
      isCore: false,
      source: 'EYFS Development Matters 2023 - Physical Development'
    },
  ],

  // 3. PERSONAL, SOCIAL AND EMOTIONAL DEVELOPMENT (Prime Area)
  personal_social_emotional: [
    {
      id: 'nur-pse-1',
      text: 'Can play with one or more other children, extending play ideas together',
      order: 1,
      isCore: true,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-2',
      text: 'Shows confidence around unfamiliar people in safe settings',
      order: 2,
      isCore: true,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-3',
      text: 'Can talk about feelings using words like "happy", "sad", "angry", "worried"',
      order: 3,
      isCore: true,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-4',
      text: 'Increasingly follows rules and understands why they are important',
      order: 4,
      isCore: true,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-5',
      text: 'Can find solutions to conflicts (e.g., accepting that not everyone can have the same role)',
      order: 5,
      isCore: false,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-6',
      text: 'Can select resources needed to achieve a chosen goal',
      order: 6,
      isCore: false,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-7',
      text: 'Can independently manage personal hygiene (toilet, handwashing, teeth brushing)',
      order: 7,
      isCore: true,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-8',
      text: 'Makes healthy choices about food, drink, and activity',
      order: 8,
      isCore: false,
      source: 'EYFS Development Matters 2023 - PSED'
    },
    {
      id: 'nur-pse-9',
      text: 'Beginning to understand others\' perspectives and feelings',
      order: 9,
      isCore: false,
      source: 'EYFS Development Matters 2023 - PSED'
    },
  ],

  // 4. LITERACY (Specific Area)
  literacy: [
    {
      id: 'nur-lit-1',
      text: 'Enjoys looking at books and listening to stories',
      order: 1,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-lit-2',
      text: 'Handles books carefully and turns pages correctly',
      order: 2,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-lit-3',
      text: 'Recognizes their own name in print',
      order: 3,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-lit-4',
      text: 'Knows that print carries meaning',
      order: 4,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-lit-5',
      text: 'Can give meanings to marks they make when drawing or writing',
      order: 5,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-lit-6',
      text: 'Beginning to recognize some letters (especially those in their name)',
      order: 6,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
  ],

  // 5. MATHEMATICS (Specific Area)
  mathematics: [
    {
      id: 'nur-math-1',
      text: 'Can count to 5 (and is learning numbers beyond 5)',
      order: 1,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-2',
      text: 'Can recognize some numbers (especially 1, 2, 3)',
      order: 2,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-3',
      text: 'Can count objects up to 3 or 4 accurately',
      order: 3,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-4',
      text: 'Understands concepts like "more" and "fewer"',
      order: 4,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-5',
      text: 'Can name basic shapes (circle, square, triangle)',
      order: 5,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-6',
      text: 'Can make simple patterns',
      order: 6,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-math-7',
      text: 'Uses size language like "big", "little", "bigger"',
      order: 7,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
  ],

  // 6. UNDERSTANDING THE WORLD (Specific Area)
  understanding_world: [
    {
      id: 'nur-utw-1',
      text: 'Shows curiosity about the world around them',
      order: 1,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-utw-2',
      text: 'Can talk about things they have experienced (home, holidays, family)',
      order: 2,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-utw-3',
      text: 'Knows about some common animals and plants',
      order: 3,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-utw-4',
      text: 'Can talk about differences between things (hot/cold, big/small)',
      order: 4,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-utw-5',
      text: 'Shows interest in different occupations (doctor, firefighter, etc.)',
      order: 5,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-utw-6',
      text: 'Knows about their own immediate family and community',
      order: 6,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
  ],

  // 7. EXPRESSIVE ARTS AND DESIGN (Specific Area)
  expressive_arts: [
    {
      id: 'nur-ead-1',
      text: 'Enjoys exploring different materials (paint, sand, playdough)',
      order: 1,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-ead-2',
      text: 'Engages in imaginative play (pretending to be characters)',
      order: 2,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-ead-3',
      text: 'Can sing familiar songs',
      order: 3,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-ead-4',
      text: 'Enjoys music and moves to music',
      order: 4,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-ead-5',
      text: 'Creates own simple drawings and paintings',
      order: 5,
      isCore: true,
      source: 'EYFS Statutory Framework 2024'
    },
    {
      id: 'nur-ead-6',
      text: 'Uses construction materials to build',
      order: 6,
      isCore: false,
      source: 'EYFS Statutory Framework 2024'
    },
  ],
};

// Total skills count
export const nurseryTotalSkills =
  Object.values(nurserySkills).reduce((total, categorySkills) => total + categorySkills.length, 0);

// Category information for Nursery
export const nurseryCategoryInfo = {
  communication_language: {
    name: 'Communication & Language',
    emoji: '💬',
    isPrime: true
  },
  physical_development: {
    name: 'Physical Development',
    emoji: '🤸',
    isPrime: true
  },
  personal_social_emotional: {
    name: 'Personal, Social & Emotional',
    emoji: '🌟',
    isPrime: true
  },
  literacy: {
    name: 'Literacy',
    emoji: '📚',
    isPrime: false
  },
  mathematics: {
    name: 'Mathematics',
    emoji: '🔢',
    isPrime: false
  },
  understanding_world: {
    name: 'Understanding the World',
    emoji: '🌍',
    isPrime: false
  },
  expressive_arts: {
    name: 'Expressive Arts & Design',
    emoji: '🎨',
    isPrime: false
  }
};

console.log(`Total Nursery skills: ${nurseryTotalSkills}`);
console.log('Breakdown:');
Object.entries(nurserySkills).forEach(([category, skills]) => {
  console.log(`  ${category}: ${skills.length} skills`);
});
