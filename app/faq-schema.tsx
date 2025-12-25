export function FAQSchema() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is this assessment really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Am I Teaching Enough? is completely free with no hidden costs. You don\'t even need to provide an email address to use the assessment tool.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the assessment take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The assessment takes approximately 3 minutes to complete. You simply check off the skills your child can do independently, and get instant results.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do UK homeschoolers have to follow the National Curriculum?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, homeschooling families in the UK are NOT required to follow the National Curriculum. We use it only as a helpful reference guide to give you confidence and peace of mind about your child\'s progress.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which year groups are currently available?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer assessments for all primary year groups: Nursery (ages 3-4), Reception (ages 4-5), Year 1 (ages 5-6), Year 2 (ages 6-7), Year 3 (ages 7-8), Year 4 (ages 8-9), Year 5 (ages 9-10), and Year 6 (ages 10-11).',
        },
      },
      {
        '@type': 'Question',
        name: 'What if my child doesn\'t have many of the skills listed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'That\'s completely normal! Every child develops at their own pace. This tool is designed to celebrate your child\'s progress, not highlight gaps. The feedback is encouraging and judgment-free, focusing on what your child CAN do.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
