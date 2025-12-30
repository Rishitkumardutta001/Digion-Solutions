"use client";

import { motion } from "framer-motion";

const industries = [
    "Automobile & EV", "Kitchen & Home Appliances", "Education & Schools", "Healthcare & Wellness", "Industrial Engineering", "FinTech & IT SaaS"
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

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-24">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="border-l border-accent/20 pl-6 py-2"
                        >
                            <span className="text-lg font-light text-white/60 hover:text-white transition-colors cursor-default">
                                {ind}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <div className="border-t border-white/5 pt-16">
                    <span className="text-[9px] font-medium tracking-[0.4em] text-white/40 uppercase block mb-12 text-center">
                        Brands We Scale
                    </span>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                        {["OBEN Electric", "Blowhot", "JTB", "Hydrofabs", "Wealthapp", "Fluenc", "IPflair", "SetupIQ"].map((brand) => (
                            <span key={brand} className="text-xs md:text-sm font-medium tracking-widest text-white uppercase whitespace-nowrap">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
