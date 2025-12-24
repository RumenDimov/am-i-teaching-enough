'use client';

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large soft gradient circle - top right */}
      <div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDuration: '8s' }}
      />

      {/* Large soft gradient circle - bottom left */}
      <div
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-accent/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDuration: '10s', animationDelay: '2s' }}
      />

      {/* Medium accent circle - middle right */}
      <div
        className="absolute top-1/3 -right-20 w-[400px] h-[400px] md:w-[500px] md:h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDuration: '12s', animationDelay: '4s' }}
      />

      {/* Subtle diagonal pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            rgba(16, 185, 129, 0.02) 0px,
            rgba(16, 185, 129, 0.02) 2px,
            transparent 2px,
            transparent 12px
          )`
        }}
      />

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
