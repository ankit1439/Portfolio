import Header from '@/components/Header';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

/**
 * Home Page - Scrollytelling Portfolio
 * 
 * Design Philosophy: Cinematic Minimalism
 * - Full-bleed canvas animation as hero section
 * - Parallax text overlays guide narrative
 * - Projects grid showcases work
 * - Smooth scroll experience throughout
 */

export default function Home() {
  return (
    <div className="w-full bg-background">
      {/* Header Navigation */}
      <Header />

      {/* Scrollytelling Hero Section */}
      <div className="relative">
        <ScrollyCanvas frameCount={136} framePrefix="/sequence/frame_" />
        <Overlay />
      </div>

      <div id="work">
        <Projects />
      </div>

      <div id="about">
        <Experience />
      </div>

      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <footer className="relative w-full bg-background border-t border-accent/10 py-12 md:py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ankit<span className="text-accent">Joshi</span>
              </h3>
              <p className="text-foreground/60 text-sm">
                B.Tech in CS & AI at JK Lakshmipat University.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-metadata text-accent mb-4">NAVIGATE</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#work" className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm font-metadata text-accent mb-4">CONNECT</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="mailto:ankit.joshi1439@gmail.com"
                    className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ankit1439"
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919354116261"
                    className="text-foreground/70 hover:text-accent transition-colors duration-300 text-sm"
                  >
                    Phone
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-accent/10 mb-8" />

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/50 text-xs font-metadata">
              © 2026 Ankit Joshi. All rights reserved.
            </p>
            <p className="text-foreground/50 text-xs font-metadata">
              Designed & Built with Motion
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
