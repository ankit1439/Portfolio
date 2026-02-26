import Header from '@/components/Header';
import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-12 flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-xl mx-auto px-6 text-center"
                >
                    <div className="mb-4 font-metadata text-accent">GET IN TOUCH</div>
                    <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8">
                        Let's <span className="text-accent">Connect</span>
                    </h1>

                    <p className="text-lg text-foreground/70 mb-12">
                        I'm currently looking for new opportunities and my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="flex flex-col gap-6 items-center">
                        <a
                            href="mailto:ankit.joshi1439@gmail.com"
                            className="px-8 py-4 border-2 border-accent text-accent hover:bg-accent/10 transition-colors duration-300 rounded-lg font-bold text-lg w-full max-w-sm"
                        >
                            Say Hello
                        </a>

                        <div className="flex gap-6 mt-8">
                            <a
                                href="https://github.com/ankit1439"
                                target="_blank"
                                rel="noreferrer"
                                className="text-foreground/70 hover:text-accent transition-colors duration-300 font-metadata"
                            >
                                GITHUB
                            </a>
                            <a
                                href="tel:+919354116261"
                                className="text-foreground/70 hover:text-accent transition-colors duration-300 font-metadata"
                            >
                                PHONE (+91 93541 16261)
                            </a>
                        </div>
                    </div>
                </motion.div>
            </main>

            <footer className="relative w-full bg-background border-t border-accent/10 py-8 px-6 text-center">
                <p className="text-foreground/50 text-xs font-metadata">
                    © 2026 Ankit Joshi. Built with React & Framer Motion.
                </p>
            </footer>
        </div>
    );
}
