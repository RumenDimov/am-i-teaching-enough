/**
 * Script to upload Year 4 (8-9 years) skills to Supabase
 * Usage: npx tsx scripts/upload-year4-skills.ts
 */

import { createClient } from '@supabase/supabase-js';
import { year4SkillsOfficial } from '../lib/year4-skills-official';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function uploadYear4Skills() {
  console.log('🚀 Starting Year 4 skills upload...\n');

  try {
    const { data: existing } = await supabase.from('skills').select('id').eq('year_group', 'year4');

    if (existing && existing.length > 0) {
      console.log(`🗑️  Deleting ${existing.length} existing Year 4 skills...`);
      await supabase.from('skills').delete().eq('year_group', 'year4');
    }

    const skillsToUpload = year4SkillsOfficial.map(skill => ({
      year_group: 'year4',
      category: skill.category,
      skill_text: skill.text,
      skill_order: skill.order,
      is_core: skill.isCore,
    }));

    console.log(`📦 Uploading ${skillsToUpload.length} Year 4 skills...\n`);

    const { data, error } = await supabase.from('skills').insert(skillsToUpload).select();
    if (error) throw error;

    console.log(`✅ Successfully uploaded ${data.length} skills\n`);

    const { data: verify } = await supabase.from('skills').select('category, is_core').eq('year_group', 'year4');

    if (verify) {
      const counts: Record<string, { total: number; core: number }> = {};
      verify.forEach((item: any) => {
        if (!counts[item.category]) counts[item.category] = { total: 0, core: 0 };
        counts[item.category].total++;
        if (item.is_core) counts[item.category].core++;
      });

      console.log('📊 Verification:');
      let totalSkills = 0, totalCore = 0;
      ['reading_writing', 'maths', 'science', 'life_skills'].forEach(cat => {
        if (counts[cat]) {
          console.log(`   ${cat}: ${counts[cat].total} skills (${counts[cat].core} core)`);
          totalSkills += counts[cat].total;
          totalCore += counts[cat].core;
        }
      });
      console.log(`   TOTAL: ${totalSkills} skills (${totalCore} core)\n`);

      if (totalSkills === 62 && totalCore === 40) {
        console.log('✅ Verification PASSED\n');
      }
    }

    console.log('📚 Sources: National Curriculum Lower KS2 (English, Maths, Science)');
    console.log('🎯 Year 4 completes Lower Key Stage 2\n');

  } catch (error: any) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }
}

uploadYear4Skills();
