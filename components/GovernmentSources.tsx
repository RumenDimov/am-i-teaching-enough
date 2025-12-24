export function GovernmentSources({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  if (variant === 'compact') {
    return (
      <div className="text-xs sm:text-sm text-text-tertiary space-y-2">
        <p>
          Based on official UK government sources:{' '}
          <a
            href="https://www.gov.uk/national-curriculum"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            National Curriculum
          </a>
          {' • '}
          <a
            href="https://www.gov.uk/home-education"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Home Education Guidance
          </a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface/50 border border-border rounded-2xl p-4 sm:p-6 space-y-3">
      <h4 className="text-sm sm:text-base font-semibold text-text-primary flex items-center gap-2">
        <span>📚</span>
        <span>Based on Official UK Government Sources</span>
      </h4>
      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
        This assessment is based on the UK National Curriculum and Early Years Foundation Stage
        (EYFS) framework. These are used as helpful reference guides only.
      </p>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <a
          href="https://www.gov.uk/national-curriculum"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline font-medium"
        >
          <span>→</span>
          <span>National Curriculum (Gov.uk)</span>
        </a>
        <a
          href="https://www.gov.uk/early-years-foundation-stage"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline font-medium"
        >
          <span>→</span>
          <span>Early Years Foundation Stage</span>
        </a>
        <a
          href="https://www.gov.uk/home-education"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-primary hover:underline font-medium"
        >
          <span>→</span>
          <span>Home Education Guidance</span>
        </a>
      </div>
      <p className="text-xs text-text-tertiary italic pt-2">
        <strong>Important:</strong> Homeschooling families are <strong>not legally required</strong> to
        follow the National Curriculum. This is a reference tool only.
      </p>
    </div>
  );
}
