import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

/**
 * Overlay Component
 * 
 * Design Philosophy: Cinematic Minimalism
 * - Text overlays positioned asymmetrically on canvas
 * - Parallax effect at 0.5x scroll speed for depth
 * - Smooth fade in/out with minimal transitions
 * - Cyan accent color for emphasis
 */

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end center'],
  });

  // Section 1: 0% scroll (0 to 0.2)
  const section1Opacity = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25],
    [1, 1, 0]
  );
  const section1Y = useTransform(
    scrollYProgress,
    [0, 0.25],
    [0, -50]
  );

  // Section 2: 30% scroll (0.2 to 0.5)
  const section2Opacity = useTransform(
    scrollYProgress,
    [0.15, 0.3, 0.5],
    [0, 1, 0]
  );
  const section2Y = useTransform(
    scrollYProgress,
    [0.15, 0.5],
    [50, -50]
  );

  // Section 3: 60% scroll (0.5 to 0.8)
  const section3Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.6, 0.8],
    [0, 1, 0]
  );
  const section3Y = useTransform(
    scrollYProgress,
    [0.45, 0.8],
    [50, -50]
  );

  return (
    <div
      ref={containerRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-10 h-[800vh]"
    >
      {/* Sticky overlay container */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Section 1: Introduction */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            opacity: section1Opacity,
            y: section1Y,
          }}
        >
          <div className="text-center px-6 md:px-12">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
              Ankit<br />
              <span className="text-accent">Joshi</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 font-light">
              Junior Web Developer
            </p>
          </div>
        </motion.div>

        {/* Section 2: Left aligned on desktop, center on mobile */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center md:items-center md:justify-start"
          style={{
            opacity: section2Opacity,
            y: section2Y,
          }}
        >
          <div className="px-6 sm:px-10 md:px-16 max-w-2xl text-center md:text-left">
            <div className="mb-4 font-metadata text-accent">
              01 / EXPERIENCE
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Building <span className="text-accent">functional</span> & fast web interfaces
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              Previously interned as a Junior Web Developer at GamingPur Media. I focus on developing responsive landing pages, optimizing load speeds, and building automated tools like cold email senders using Python.
            </p>
          </div>
        </motion.div>

        {/* Section 3: Right aligned on desktop, center on mobile */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center md:items-center md:justify-end"
          style={{
            opacity: section3Opacity,
            y: section3Y,
          }}
        >
          <div className="px-6 sm:px-10 md:px-16 max-w-2xl text-center md:text-right">
            <div className="mb-4 font-metadata text-accent">
              02 / SKILLS & EDUCATION
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Code, <span className="text-accent">Algorithms</span>, & AI
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
              Pursuing a B.Tech in CS & AI at JK Lakshmipat University (7 CGPA). Proficient in Python, C, Next.js, and HTML/CSS. I am constantly strengthening my DSA skills and exploring backend automation.
            </p>
          </div>
        </motion.div>

        {/* Decorative divider line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
          style={{
            opacity: useTransform(scrollYProgress, [0.7, 1], [0, 1]),
          }}
        />
      </div>
    </div>
  );
}
