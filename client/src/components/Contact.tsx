import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section className="relative w-full bg-background py-24 px-6 md:px-12 border-t border-accent/10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Left Side: Text and Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <div className="mb-4 font-metadata text-accent">05 / CONTACT</div>
                    <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                        Let's <span className="text-accent">Connect</span>
                    </h2>
                    <p className="text-lg text-foreground/70 mb-12 max-w-md leading-relaxed">
                        I'm currently open to new opportunities. Whether you have a project in mind,
                        a question, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Mail size={20} />
                            </div>
                            <a href="mailto:ankit.joshi1439@gmail.com" className="hover:text-accent transition-colors text-lg">
                                ankit.joshi1439@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <Phone size={20} />
                            </div>
                            <a href="tel:+919354116261" className="hover:text-accent transition-colors text-lg">
                                +91 93541 16261
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-foreground/80">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                <MapPin size={20} />
                            </div>
                            <span className="text-lg">Greater Noida West, India</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex-1"
                >
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="bg-accent/5 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm"
                    >
                        {/* Replace with your Web3Forms Access Key */}
                        <input type="hidden" name="access_key" value="df2bd528-1f21-4ef6-a097-6813a50261d8" />

                        {/* Subject for the email */}
                        <input type="hidden" name="subject" value="New message from Ankit Joshi Portfolio" />

                        <div className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-metadata text-accent mb-2">
                                    YOUR NAME
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full bg-background/50 border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-metadata text-accent mb-2">
                                    YOUR EMAIL
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full bg-background/50 border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-metadata text-accent mb-2">
                                    MESSAGE
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    className="w-full bg-background/50 border border-accent/20 rounded-lg px-4 py-3 text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-accent text-background font-bold py-4 rounded-lg flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors"
                            >
                                Send Message <Send size={18} />
                            </motion.button>
                        </div>
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
