/**
 * PDF Generation utility for assessment results
 * Uses jsPDF to create downloadable assessment reports
 */

import jsPDF from 'jspdf';
import { Assessment } from './types';
import { getRatingBand, getEncouragingMessage, getCategoryFeedback } from './scoring';
import { categoryNames, yearGroupsInfo } from './skills-data';

export function generateAssessmentPDF(assessment: Assessment): void {
  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const margin = 20;
  const contentWidth = pageWidth - (margin * 2);
  let yPos = margin;

  const { overall, categories } = assessment.results;
  const rating = getRatingBand(overall);
  const encouragingMessage = getEncouragingMessage(overall, assessment.year_group);
  const yearGroupInfo = yearGroupsInfo.find(yg => yg.id === assessment.year_group);

  // Colors
  const primaryColor: [number, number, number] = [16, 185, 129]; // #10B981
  const accentColor: [number, number, number] = [59, 130, 246]; // #3B82F6
  const textColor: [number, number, number] = [31, 41, 55]; // #1F2937
  const secondaryTextColor: [number, number, number] = [107, 114, 128]; // #6B7280

  // Helper to add new page if needed
  const checkPageBreak = (requiredSpace: number) => {
    if (yPos + requiredSpace > pageHeight - margin) {
      pdf.addPage();
      yPos = margin;
    }
  };

  // ============================================
  // HEADER
  // ============================================

  // Logo/Title
  pdf.setFontSize(24);
  pdf.setTextColor(...primaryColor);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Am I Teaching Enough?', margin, yPos);
  yPos += 10;

  pdf.setFontSize(12);
  pdf.setTextColor(...secondaryTextColor);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Your Homeschool Assessment Report', margin, yPos);
  yPos += 15;

  // Divider line
  pdf.setDrawColor(...primaryColor);
  pdf.setLineWidth(0.5);
  pdf.line(margin, yPos, pageWidth - margin, yPos);
  yPos += 15;

  // ============================================
  // YEAR GROUP INFO
  // ============================================

  pdf.setFontSize(14);
  pdf.setTextColor(...textColor);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`${yearGroupInfo?.name} (${yearGroupInfo?.ageRange})`, margin, yPos);
  yPos += 8;

  pdf.setFontSize(10);
  pdf.setTextColor(...secondaryTextColor);
  pdf.setFont('helvetica', 'normal');
  const date = new Date(assessment.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  pdf.text(`Assessment Date: ${date}`, margin, yPos);
  yPos += 15;

  // ============================================
  // OVERALL SCORE
  // ============================================

  checkPageBreak(60);

  // Score circle background
  pdf.setFillColor(240, 253, 244); // Light green background
  pdf.circle(pageWidth / 2, yPos + 25, 25, 'F');

  // Score text
  pdf.setFontSize(36);
  pdf.setTextColor(...primaryColor);
  pdf.setFont('helvetica', 'bold');
  const scoreText = `${overall}%`;
  const scoreWidth = pdf.getTextWidth(scoreText);
  pdf.text(scoreText, (pageWidth - scoreWidth) / 2, yPos + 30);

  yPos += 55;

  // Rating band
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...textColor);
  const bandText = rating.band;
  const bandWidth = pdf.getTextWidth(bandText);
  pdf.text(bandText, (pageWidth - bandWidth) / 2, yPos);
  yPos += 15;

  // Encouraging message box
  checkPageBreak(40);
  pdf.setFillColor(239, 246, 255); // Light blue background
  pdf.roundedRect(margin, yPos, contentWidth, 35, 3, 3, 'F');

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...textColor);
  const messageLines = pdf.splitTextToSize(encouragingMessage, contentWidth - 10);
  pdf.text(messageLines, margin + 5, yPos + 8);
  yPos += 45;

  // ============================================
  // KEY INSIGHTS
  // ============================================

  checkPageBreak(45);

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...textColor);
  pdf.text('Why This Matters:', margin, yPos);
  yPos += 8;

  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...secondaryTextColor);

  const insights = [
    'School children often do not master all these skills either',
    'Learning happens in bursts - gaps now often fill in later',
    'Your one-to-one attention means deeper understanding'
  ];

  insights.forEach(insight => {
    checkPageBreak(8);
    pdf.setTextColor(...primaryColor);
    pdf.setFont('helvetica', 'bold');
    pdf.text('>', margin + 2, yPos);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(...secondaryTextColor);
    const lines = pdf.splitTextToSize(insight, contentWidth - 10);
    pdf.text(lines, margin + 8, yPos);
    yPos += 7;
  });

  yPos += 10;

  // ============================================
  // CATEGORY BREAKDOWN
  // ============================================

  checkPageBreak(20);

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...textColor);
  pdf.text('Category Breakdown', margin, yPos);
  yPos += 12;

  Object.entries(categories).forEach(([category, score]) => {
    checkPageBreak(30);

    // Category header
    pdf.setFontSize(12);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...textColor);
    pdf.text(categoryNames[category], margin, yPos);

    // Score
    pdf.setTextColor(...primaryColor);
    const scoreStr = `${score}%`;
    const scoreW = pdf.getTextWidth(scoreStr);
    pdf.text(scoreStr, pageWidth - margin - scoreW, yPos);
    yPos += 6;

    // Progress bar
    const barHeight = 4;
    const barWidth = contentWidth;

    // Background
    pdf.setFillColor(229, 231, 235); // Gray
    pdf.roundedRect(margin, yPos, barWidth, barHeight, 2, 2, 'F');

    // Progress
    pdf.setFillColor(...primaryColor);
    const progressWidth = (barWidth * score) / 100;
    if (progressWidth > 0) {
      pdf.roundedRect(margin, yPos, progressWidth, barHeight, 2, 2, 'F');
    }
    yPos += 8;

    // Feedback
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'italic');
    pdf.setTextColor(...secondaryTextColor);
    const feedback = getCategoryFeedback(category, score);
    const feedbackLines = pdf.splitTextToSize(feedback, contentWidth);
    pdf.text(feedbackLines, margin, yPos);
    yPos += 12;
  });

  // ============================================
  // WHAT THIS MEANS
  // ============================================

  checkPageBreak(50);

  pdf.setFillColor(255, 251, 235); // Light yellow background
  pdf.roundedRect(margin, yPos, contentWidth, 55, 3, 3, 'F');

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...textColor);
  pdf.text('What This Actually Means', margin + 5, yPos + 8);
  yPos += 14;

  pdf.setFontSize(9);
  pdf.setFont('helvetica', 'normal');

  const insights2 = [
    `First: You are doing better than you think. ${overall}% is excellent progress.`,
    `Second: The remaining ${100 - overall}%? That is not "behind" - that is "not yet."`,
    `Third: Schools typically see similar or lower percentages at this age.`
  ];

  insights2.forEach(insight => {
    const lines = pdf.splitTextToSize(insight, contentWidth - 10);
    pdf.text(lines, margin + 5, yPos);
    yPos += 10;
  });

  pdf.setFont('helvetica', 'bold');
  pdf.setTextColor(...primaryColor);
  const finalMsg = 'What matters most? Your child is learning, growing, curious, and spending focused time with you.';
  const finalLines = pdf.splitTextToSize(finalMsg, contentWidth - 10);
  pdf.text(finalLines, margin + 5, yPos);
  yPos += 20;

  // ============================================
  // FOOTER
  // ============================================

  checkPageBreak(30);

  // Disclaimer
  pdf.setFontSize(8);
  pdf.setFont('helvetica', 'italic');
  pdf.setTextColor(...secondaryTextColor);
  const disclaimer = 'This assessment is for guidance only and does not constitute educational or legal advice. Every child develops at their own pace. All skills are based on the UK National Curriculum as a helpful reference guide.';
  const disclaimerLines = pdf.splitTextToSize(disclaimer, contentWidth);
  pdf.text(disclaimerLines, margin, yPos);
  yPos += 15;

  // Website
  pdf.setFont('helvetica', 'normal');
  pdf.setTextColor(...primaryColor);
  const website = 'amiteachingenough.com';
  const websiteWidth = pdf.getTextWidth(website);
  pdf.text(website, (pageWidth - websiteWidth) / 2, yPos);

  // ============================================
  // SAVE PDF
  // ============================================

  const fileName = `assessment-${yearGroupInfo?.id}-${new Date().toISOString().split('T')[0]}.pdf`;
  pdf.save(fileName);
}
