/**
 * Script to upload Nursery (3-4 years) skills to Supabase
 *
 * Usage: npx tsx scripts/upload-nursery-skills.ts
 *
 * This script will:
 * 1. Connect to Supabase
 * 2. Check if Nursery skills already exist
 * 3. Upload all 49 Nursery skills to the skills table
 * 4. Verify the upload
 */

import { createClient } from '@supabase/supabase-js';
import { nurserySkills } from '../lib/nursery-skills-official';

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

async function uploadNurserySkills() {
  console.log('🚀 Starting Nursery skills upload...\n');

  try {
    // Step 1: Check if Nursery skills already exist
    console.log('📋 Step 1: Checking for existing Nursery skills...');
    const { data: existingSkills, error: checkError } = await supabase
      .from('skills')
      .select('id, year_group')
      .eq('year_group', 'nursery');

    if (checkError) {
      throw new Error(`Error checking existing skills: ${checkError.message}`);
    }

    if (existingSkills && existingSkills.length > 0) {
      console.log(`⚠️  Found ${existingSkills.length} existing Nursery skills in database`);
      console.log('❓ Do you want to delete and re-upload? (Ctrl+C to cancel)\n');

      // Wait 3 seconds for user to cancel
      await new Promise(resolve => setTimeout(resolve, 3000));

      console.log('🗑️  Deleting existing Nursery skills...');
      const { error: deleteError } = await supabase
        .from('skills')
        .delete()
        .eq('year_group', 'nursery');

      if (deleteError) {
        throw new Error(`Error deleting existing skills: ${deleteError.message}`);
      }
      console.log('✅ Existing skills deleted\n');
    } else {
      console.log('✅ No existing Nursery skills found\n');
    }

    // Step 2: Prepare skills for upload
    console.log('📦 Step 2: Preparing skills for upload...');

    const skillsToUpload: any[] = [];
    let totalCount = 0;

    for (const [category, skills] of Object.entries(nurserySkills)) {
      for (const skill of skills) {
        skillsToUpload.push({
          year_group: 'nursery',
          category: category,
          skill_text: skill.text,
          skill_order: skill.order,
          is_core: skill.isCore,
        });
        totalCount++;
      }
    }

    console.log(`✅ Prepared ${totalCount} skills across ${Object.keys(nurserySkills).length} categories\n`);

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

    const { data: verifyData, error: verifyError } = await supabase
      .from('skills')
      .select('category, count')
      .eq('year_group', 'nursery');

    if (verifyError) {
      console.warn('⚠️  Could not verify upload:', verifyError.message);
    }

    // Count by category
    const { data: categoryCount, error: countError } = await supabase
      .from('skills')
      .select('category')
      .eq('year_group', 'nursery');

    if (!countError && categoryCount) {
      const counts: Record<string, number> = {};
      categoryCount.forEach((item: any) => {
        counts[item.category] = (counts[item.category] || 0) + 1;
      });

      console.log('\n📊 Skills by category:');
      Object.entries(counts).forEach(([category, count]) => {
        console.log(`   ${category}: ${count} skills`);
      });
      console.log(`   TOTAL: ${categoryCount.length} skills`);
    }

    console.log('\n✅ Upload complete!\n');
    console.log('🎯 Next steps:');
    console.log('   1. Update yearGroupsInfo in lib/skills-data.ts to include Nursery');
    console.log('   2. Test the assessment flow with Nursery skills');
    console.log('   3. Verify skills display correctly in the UI\n');

  } catch (error: any) {
    console.error('\n❌ Upload failed:', error.message);
    process.exit(1);
  }
}

// Run the upload
uploadNurserySkills();
