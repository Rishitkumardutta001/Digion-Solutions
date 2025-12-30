"use client";

import { motion } from "framer-motion";

export default function WhyDigiOn() {
    return (
        <section id="why-digion" className="py-32 bg-primary">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <span className="text-xs font-medium tracking-[0.2em] text-accent/80 uppercase block mb-8">
                            Differentiation
                        </span>
                        <h2 className="text-3xl font-display font-light text-white leading-tight">
                            Quiet Authority.<br />
                            Loud Results.
                        </h2>
                    </div>

                    <div className="space-y-12">
                        {[
                            { title: "Precision over Volume", desc: "We accept limited engagements to ensure absolute focus on your architecture." },
                            { title: "Engineering First", desc: "Strategy is useless without execution. We are builders at our core." },
                            { title: "Accredited Excellence", desc: "Recognized as a Top 10 Most Promising Digital Marketing Consultant and a Top 20 Digital Agency in India." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <h3 className="text-xl font-medium text-white mb-2">{item.title}</h3>
                                <p className="text-white/60 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
