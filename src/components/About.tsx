"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-32 bg-primary relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('/about-bg.png')] opacity-20 bg-cover bg-center pointer-events-none mix-blend-screen" />

            <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-4xl font-display font-light text-white leading-relaxed mb-12"
                >
                    "We do not chase trends. We build <span className="text-accent">digital infrastructure</span> that compounds in value over time."
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-white/60 text-lg font-light leading-relaxed"
                >
                    <div className="space-y-6">
                        <p>
                            DigiOn Solutions is directed by elite MNC-pedigree leadership with backgrounds at <span className="text-white font-medium">Oracle, HP, and Vedantu</span>. We bring over <span className="text-white font-medium">60+ years of combined industry expertise</span> to every partnership.
                        </p>
                        <p>
                            We are not a typical agency. We are a private digital engineering studio that transforms complex business challenges into automated, high-yield digital assets.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <p>
                            Our mandate is precision. Our results are calibrated for maximum impact—proven through <span className="text-white font-medium">133% overall traffic increases</span> and <span className="text-white font-medium">68% reductions in acquisition costs</span> within our first days of engagement.
                        </p>
                        <p>
                            From the first line of code to the final AI automation, everything we build is intentional, scalable, and designed for total market dominance.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
