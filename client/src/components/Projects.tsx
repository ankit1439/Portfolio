import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

/**
 * Projects Component
 * 
 * Design Philosophy: Cinematic Minimalism
 * - Glassmorphic cards with subtle borders and blur effects
 * - Asymmetric grid layout
 * - Minimal hover states with color shifts
 * - Cyan accent for interactive elements
 */

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  index: number;
}

function ProjectCard({
  title,
  description,
  tags,
  image,
  link,
  index
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-100px' }}
      className="group relative overflow-hidden rounded-lg border border-accent/20 bg-card/40 backdrop-blur-sm p-6 md:p-8 hover:border-accent/50 hover:bg-card/60 transition-all duration-300"
    >
      {/* Background image if provided */}
      {image && (
        <div
          className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Gradient accent on hover */}
      <div
        className="absolute -inset-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          animation: 'none',
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header with title and link */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 ml-4 p-2 rounded-full border border-accent/30 text-accent/70 group-hover:text-accent group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300"
            >
              <ArrowUpRight className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Description */}
        <p className="text-base md:text-lg text-foreground/70 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs md:text-sm font-metadata text-accent/70 bg-accent/10 rounded-full border border-accent/20 group-hover:border-accent/50 group-hover:text-accent group-hover:bg-accent/20 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Projects() {
  const projects: ProjectCardProps[] = [
    {
      title: 'Mess Feedback System',
      description: 'An anonymous feedback system for college students, enabling secure sharing and structured categorization. Built with Python for backend logic, MongoDB for data management, and a responsive HTML/CSS frontend.',
      tags: ['Python', 'MongoDB', 'HTML/CSS'],
      index: 0,
      link: 'https://github.com/ankit1439'
    },
    {
      title: 'Blood Donation Network',
      description: 'A full-stack web application connecting donors with hospitals in real time. Features registration, request management, and emergency coordination. Built using Next.js and MongoDB.',
      tags: ['Next.js', 'MongoDB', 'Full-stack'],
      index: 1,
      link: 'https://github.com/ankit1439'
    },
    {
      title: 'Automated Email Sender',
      description: 'An automated cold email system that reads contact details from Excel spreadsheets and sends personalized emails via Hostinger SMTP, streamlining outreach processes.',
      tags: ['Python', 'Automation', 'SMTP'],
      index: 2,
    },
    {
      title: 'YouTube Channel Landing Page',
      description: 'A performant and responsive landing page built for a YouTube channel founder. Optimized for fast server response times and cross-device compatibility.',
      tags: ['HTML', 'CSS', 'UI/UX'],
      index: 3,
    },
  ];

  return (
    <section className="relative w-full bg-background py-20 md:py-32 px-6 md:px-12">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-16 md:mb-24"
      >
        <div className="mb-4 font-metadata text-accent">
          03 / SELECTED WORK
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Featured <span className="text-accent">Projects</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
          A selection of recent projects showcasing my approach to design,
          engineering, and user experience. Each represents a unique challenge
          and solution.
        </p>
      </motion.div>

      {/* Projects grid - asymmetric layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* First column - full height on desktop */}
          <div className="space-y-6 md:space-y-8">
            <ProjectCard {...projects[0]} />
            <ProjectCard {...projects[2]} />
          </div>

          {/* Second column - offset */}
          <div className="space-y-6 md:space-y-8 md:mt-12">
            <ProjectCard {...projects[1]} />
            <ProjectCard {...projects[3]} />
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="mt-20 md:mt-32 max-w-7xl mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-left"
        />
      </div>

    </section>
  );
}
