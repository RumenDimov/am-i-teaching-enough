export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface SupabaseError {
  message: string;
  details?: string;
  hint?: string;
  code?: string;
}

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      skills: {
        Row: {
          id: string
          year_group: string
          category: string
          skill_text: string
          skill_order: number
          is_core: boolean
          created_at: string
        }
        Insert: {
          id?: string
          year_group: string
          category: string
          skill_text: string
          skill_order: number
          is_core?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          year_group?: string
          category?: string
          skill_text?: string
          skill_order?: number
          is_core?: boolean
          created_at?: string
        }
      }
      assessments: {
        Row: {
          id: string
          session_id: string
          user_id: string | null
          email: string | null
          year_group: string
          skills_checked: Json
          results: Json
          overall_score: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          session_id: string
          user_id?: string | null
          email?: string | null
          year_group: string
          skills_checked: Json
          results: Json
          overall_score: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          session_id?: string
          user_id?: string | null
          email?: string | null
          year_group?: string
          skills_checked?: Json
          results?: Json
          overall_score?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
