"use client";

import { motion } from "framer-motion";

const industries = [
    "Global Enterprise", "B2B SaaS", "FinTech", "Healthcare", "Real Estate", "Manufacturing"
];

export default function Industries() {
    return (
        <section id="industries" className="py-24 bg-[#050505] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-baseline justify-between mb-16">
                    <span className="text-xs font-medium tracking-[0.2em] text-accent/80 uppercase block mb-4">
                        Sectors
                    </span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-l border-white/10 pl-6 py-2"
                        >
                            <span className="text-lg font-light text-text-dim hover:text-white transition-colors cursor-default">
                                {ind}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
