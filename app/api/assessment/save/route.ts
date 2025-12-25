import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Database, SupabaseError } from '@/lib/database.types';
import { v4 as uuidv4 } from 'uuid';

type AssessmentRow = Database['public']['Tables']['assessments']['Row'];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { yearGroup, skillsChecked, results, email } = body;

    // Check if Supabase is configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      return NextResponse.json(
        { error: 'Database not configured. Please set up your Supabase credentials in .env.local' },
        { status: 503 }
      );
    }

    // Generate a session ID (you could use a more sophisticated approach)
    const sessionId = uuidv4();

    // Insert assessment into Supabase
    type AssessmentInsert = Database['public']['Tables']['assessments']['Insert'];

    const assessmentData: AssessmentInsert = {
      session_id: sessionId,
      year_group: yearGroup,
      skills_checked: skillsChecked,
      results: results,
      overall_score: results.overall,
      email: email || null,
    };

    const result = await supabase
      .from('assessments')
      // @ts-ignore - Supabase types are inferred at runtime, not build time
      .insert(assessmentData)
      .select()
      .single();

    const { data, error } = result as {
      data: AssessmentRow | null;
      error: SupabaseError | null;
    };

    if (error) {
      return NextResponse.json(
        {
          error: 'Failed to save assessment',
          details: error.message,
          hint: 'Make sure you have run the SQL from supabase-schema.sql in your Supabase project'
        },
        { status: 500 }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: 'No data returned from database' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      id: data.id,
      sessionId: data.session_id
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
