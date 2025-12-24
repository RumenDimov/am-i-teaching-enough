/**
 * Script to upload Reception (4-5 years) skills to Supabase
 *
 * Usage: npx tsx scripts/upload-reception-skills.ts
 *
 * This script will:
 * 1. Connect to Supabase
 * 2. Delete ALL existing Reception skills
 * 3. Upload all 50 new Reception skills to the skills table
 * 4. Verify the upload
 */

import { createClient } from '@supabase/supabase-js';
import { receptionSkillsOfficial } from '../lib/reception-skills-official';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // Use service role for admin operations

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Missing Supabase credentials in .env.local');
  console.error('Required:');
  console.error('  NEXT_PUBLIC_SUPABASE_URL');
  console.error('  SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function uploadReceptionSkills() {
  console.log('🚀 Starting Reception skills upload...\n');

  try {
    // Step 1: Check if Reception skills already exist
    console.log('📋 Step 1: Checking for existing Reception skills...');
    const { data: existingSkills, error: checkError } = await supabase
      .from('skills')
      .select('id, year_group, category')
      .eq('year_group', 'reception');

    if (checkError) {
      throw new Error(`Error checking existing skills: ${checkError.message}`);
    }

    if (existingSkills && existingSkills.length > 0) {
      console.log(`⚠️  Found ${existingSkills.length} existing Reception skills in database`);
      console.log('🗑️  These will be DELETED and replaced with new official ELG-based skills');
      console.log('❓ Proceeding in 3 seconds... (Ctrl+C to cancel)\n');

      // Wait 3 seconds for user to cancel
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('🗑️  Deleting ALL existing Reception skills...');
      const { error: deleteError } = await supabase
        .from('skills')
        .delete()
        .eq('year_group', 'reception');

      if (deleteError) {
        throw new Error(`Error deleting existing skills: ${deleteError.message}`);
      }
      console.log('✅ All existing Reception skills deleted\n');
    } else {
      console.log('✅ No existing Reception skills found\n');
    }

    // Step 2: Prepare skills for upload
    console.log('📦 Step 2: Preparing new Reception skills for upload...');
    console.log(`   Based on 17 EYFS Early Learning Goals (ELGs)`);
    console.log(`   Source: EYFS Statutory Framework 2024\n`);

    const skillsToUpload = receptionSkillsOfficial.map(skill => ({
      year_group: 'reception',
      category: skill.category,
      skill_text: skill.text,
      skill_order: skill.order,
      is_core: skill.isCore,
    }));

    console.log(`✅ Prepared ${skillsToUpload.length} skills across 7 EYFS areas\n`);

    // Step 3: Upload to Supabase
    console.log('☁️  Step 3: Uploading to Supabase...');

    const { data, error: uploadError } = await supabase
      .from('skills')
      .insert(skillsToUpload)
      .select();

    if (uploadError) {
      throw new Error(`Error uploading skills: ${uploadError.message}`);
    }

    console.log(`✅ Successfully uploaded ${data?.length || 0} skills\n`);

    // Step 4: Verify upload
    console.log('🔍 Step 4: Verifying upload...');

    // Count by category
    const { data: categoryCount, error: countError } = await supabase
      .from('skills')
      .select('category, is_core')
      .eq('year_group', 'reception');

    if (!countError && categoryCount) {
      const counts: Record<string, { total: number; core: number }> = {};
      categoryCount.forEach((item: any) => {
        if (!counts[item.category]) {
          counts[item.category] = { total: 0, core: 0 };
        }
        counts[item.category].total++;
        if (item.is_core) {
          counts[item.category].core++;
        }
      });

      console.log('\n📊 Skills by category:');
      const categoryOrder = [
        'communication_language',
        'physical_development',
        'personal_social_emotional',
        'literacy',
        'mathematics',
        'understanding_world',
        'expressive_arts'
      ];

      let totalSkills = 0;
      let totalCore = 0;

      categoryOrder.forEach(category => {
        if (counts[category]) {
          const { total, core } = counts[category];
          console.log(`   ${category}: ${total} skills (${core} core)`);
          totalSkills += total;
          totalCore += core;
        }
      });

      console.log(`   ────────────────────────────────────────`);
      console.log(`   TOTAL: ${totalSkills} skills (${totalCore} core)\n`);

      // Verify counts match expected
      if (totalSkills === 50) {
        console.log('✅ Skill count verification PASSED (50 skills)');
      } else {
        console.warn(`⚠️  Expected 50 skills but found ${totalSkills}`);
      }

      if (totalCore === 29) {
        console.log('✅ Core skills count verification PASSED (29 core skills)');
      } else {
        console.warn(`⚠️  Expected 29 core skills but found ${totalCore}`);
      }
    }

    console.log('\n✅ Upload complete!\n');
    console.log('🎯 Next steps:');
    console.log('   1. Test the Reception assessment flow');
    console.log('   2. Verify skills display correctly with new EYFS categories');
    console.log('   3. Check that category names and emojis display properly');
    console.log('   4. Verify scoring and results page work correctly\n');

    console.log('📚 Official sources used:');
    console.log('   - EYFS Statutory Framework 2024');
    console.log('   - 17 Early Learning Goals (ELGs)');
    console.log('   - https://www.gov.uk/government/publications/early-years-foundation-stage-framework--2\n');

  } catch (error: any) {
    console.error('\n❌ Upload failed:', error.message);
    console.error('\nPlease check:');
    console.error('  1. Supabase credentials in .env.local');
    console.error('  2. Database connection');
    console.error('  3. Table permissions (RLS policies)\n');
    process.exit(1);
  }
}

// Run the upload
uploadReceptionSkills();
