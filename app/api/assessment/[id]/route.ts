import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Database, SupabaseError } from '@/lib/database.types';

type AssessmentRow = Database['public']['Tables']['assessments']['Row'];

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Fetch assessment from Supabase
    const result = await supabase
      .from('assessments')
      .select('*')
      .eq('id', id)
      .single();

    const { data, error } = result as {
      data: AssessmentRow | null;
      error: SupabaseError | null;
    };

    if (error || !data) {
      return NextResponse.json(
        { error: 'Assessment not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
