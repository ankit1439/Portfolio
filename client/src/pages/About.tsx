import Header from '@/components/Header';
import Experience from '@/components/Experience';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 max-w-3xl"
                >
                    <div className="mb-4 font-metadata text-accent">ABOUT ME</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Code, <span className="text-accent">Algorithms</span> & AI
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                        Pursuing a B.Tech in Computer Science & Artificial Intelligence at JK Lakshmipat University (7 CGPA).
                        Proficient in Python, C, Next.js, and HTML/CSS. I am constantly strengthening my DSA skills and exploring backend automation and web innovation.
                    </p>
                </motion.div>

                <Experience />
            </main>

            <footer className="relative w-full bg-background border-t border-accent/10 py-12 md:py-16 px-6 md:px-12 mt-auto">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/50 text-xs font-metadata">
                        © 2026 Ankit Joshi. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
