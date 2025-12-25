# Am I Teaching Enough?

A free assessment tool helping UK homeschool parents measure their child's progress against typical National Curriculum milestones.

## Features

- ✅ Quick 3-minute assessment
- ✅ Based on UK National Curriculum (as a helpful reference)
- ✅ Instant, personalized feedback
- ✅ 100% free, no email required
- ✅ Encouraging, judgment-free messaging
- ✅ Mobile-first responsive design

## Tech Stack

- **Frontend:** Next.js 16, TypeScript, TailwindCSS
- **UI Components:** Custom components with shadcn/ui patterns
- **Database:** Supabase (PostgreSQL)
- **Hosting:** Vercel (recommended)
- **Email:** Resend (for future PDF email feature)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account (free tier)
- (Optional) A Resend account for email features

### Installation

1. **Clone the repository** (or navigate to the project directory)

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local`
   - Add your Supabase credentials
   - Add your Resend API key (optional for MVP)

4. **Set up Supabase database:**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor
   - Copy and paste the contents of `supabase-schema.sql`
   - Run the SQL to create tables and set up RLS policies

5. **Run the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
/app
  /page.tsx                          # Landing page
  /assessment
    /page.tsx                        # Year group selection
    /[yearGroup]/page.tsx            # Assessment flow
  /results/[id]/page.tsx             # Results page
  /api
    /assessment/save/route.ts        # Save assessment
    /assessment/[id]/route.ts        # Get assessment

/components
  /ui/                               # UI components (Button, Card, etc.)

/lib
  /supabase.ts                       # Supabase client
  /skills-data.ts                    # Skills database (Reception & Year 3)
  /scoring.ts                        # Scoring logic
  /types.ts                          # TypeScript types
  /utils.ts                          # Utility functions
```

## Current Features

### MVP (Completed)

- ✅ Landing page with hero section
- ✅ Year group selection (All 8 year groups: Nursery through Year 6)
- ✅ Interactive assessment flow with skill checklists
- ✅ Results page with scoring and encouragement
- ✅ Category breakdowns
- ✅ Progress tracking
- ✅ Local storage for progress persistence
- ✅ Database integration (Supabase)
- ✅ PDF report generation and download

### Coming Soon

- ⏳ Email results delivery
- ⏳ Social sharing
- ⏳ User accounts for tracking over time

## Available Year Groups

All primary year groups now implemented:
- **Nursery** (3-4 years) - 49 skills
- **Reception** (4-5 years) - 50 skills
- **Year 1** (5-6 years) - 54 skills
- **Year 2** (6-7 years) - 58 skills
- **Year 3** (7-8 years) - 60 skills
- **Year 4** (8-9 years) - 62 skills
- **Year 5** (9-10 years) - 64 skills
- **Year 6** (10-11 years) - 68 skills

Skill categories:
- Communication / Reading & Writing
- Maths
- Science & Understanding the World
- Life Skills

## Deployment

### Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import project in Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Add environment variables:**
   - Add all variables from `.env.local` to Vercel

4. **Deploy!**
   - Vercel will automatically build and deploy your app

### Environment Variables Required

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
RESEND_API_KEY=your_resend_api_key (optional)
NEXT_PUBLIC_APP_URL=your_production_url
```

## Database Setup

Run the SQL in `supabase-schema.sql` in your Supabase SQL editor to create:

- `skills` table - stores curriculum skills
- `assessments` table - stores user assessment results
- `users` table - (optional) for returning users
- Indexes for performance
- Row Level Security policies

## Key Design Principles

1. **Positive messaging only** - No "behind" or "failing" language
2. **Mobile-first** - Most homeschool parents use phones
3. **Fast & simple** - Complete in under 3 minutes
4. **Judgment-free** - Celebrate progress, normalize gaps
5. **Clear disclaimers** - NC is a guide, not a requirement

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Support

For issues or questions:
- Check the GitHub issues
- Review the skills.md specification document

## License

ISC

---

Built with 💚 for UK homeschool parents
