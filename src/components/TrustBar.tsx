"use client";

import { motion } from "framer-motion";

const awards = [
    "Top 10 Most Promising Digital Marketing Consultants",
    "Top 20 Most Promising Digital Marketing Agency",
    "10 Best SEO Service Providers in India",
    "60+ Years Combined MNC Expertise"
];

export default function TrustBar() {
    return (
        <section className="bg-primary/50 border-y border-white/5 py-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-x-16 gap-y-6 md:gap-y-8 max-w-max mx-auto md:max-w-none">
                    {awards.map((award, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                            <span className="text-[10px] md:text-xs font-medium tracking-[0.2em] text-white/40 uppercase">
                                {award}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
