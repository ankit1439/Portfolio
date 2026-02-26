import Header from '@/components/Header';
import Projects from '@/components/Projects';

export default function Work() {
    return (
        <div className="w-full min-h-screen bg-background flex flex-col">
            <Header />

            <main className="flex-grow pt-24 pb-12">
                <Projects />
            </main>

            <footer className="relative w-full bg-background border-t border-accent/10 py-12 md:py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-foreground/50 text-xs font-metadata">
                        © 2026 Ankit Joshi. All rights reserved.
                    </p>
                    <p className="text-foreground/50 text-xs font-metadata">
                        Designed & Built with Motion
                    </p>
                </div>
            </footer>
        </div>
    );
}
