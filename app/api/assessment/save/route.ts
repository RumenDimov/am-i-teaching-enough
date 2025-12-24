import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { v4 as uuidv4 } from 'uuid';

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
    const { data, error } = await supabase
      .from('assessments')
      .insert([
        {
          session_id: sessionId,
          year_group: yearGroup,
          skills_checked: skillsChecked,
          results: results,
          overall_score: results.overall,
          email: email || null,
        },
      ])
      .select()
      .single();

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

    return NextResponse.json({ id: data.id, sessionId: data.session_id });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
