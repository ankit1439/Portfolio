import { motion } from 'framer-motion';

export default function Experience() {
    return (
        <section className="relative w-full bg-background py-20 px-6 md:px-12 border-t border-accent/10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="mb-4 font-metadata text-accent">04 / EXPERIENCE</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Professional <span className="text-accent">Journey</span>
                    </h2>
                </motion.div>

                <div className="relative border-l border-accent/30 pl-8 pb-8">
                    {/* Timeline Dot */}
                    <div className="absolute w-4 h-4 rounded-full bg-accent left-[-8.5px] top-2" />

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-foreground">Junior Web Developer Intern</h3>
                        <p className="text-lg text-accent mb-4">GamingPur Media (OPC) Pvt. Ltd. | 06/2025 – 08/2026 | Greater Noida West</p>

                        <ul className="space-y-4 text-foreground/70 leading-relaxed text-base md:text-lg">
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                Developed responsive Landing Page and Contact Page using HTML and CSS, ensuring clean UI and mobile compatibility.
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                Improved website loading speed and server response time through structured code optimization and efficient hosting deployment.
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                Built an automated Cold Email Sender using Python that reads names and email IDs from Excel and sends personalized emails via Hostinger SMTP.
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                Successfully completed 3 projects including a YouTube Channel Founder website, automated mail sender system, and business landing page.
                            </li>
                            <li className="relative pl-6">
                                <span className="absolute left-0 top-2.5 w-1.5 h-1.5 rounded-full bg-accent/50" />
                                Worked under direct mentorship of senior developer and delivered assigned tasks within deadlines.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
