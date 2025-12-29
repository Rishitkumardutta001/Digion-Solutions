"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const capabilities = [
    {
        title: "Digital Platforms & Websites",
        desc: "Architecting high-performance, SEO-first web experiences that serve as the foundation of your digital estate."
    },
    {
        title: "Growth & Performance Systems",
        desc: "Data-driven marketing infrastructures designed to capture, nurture, and convert high-value leads."
    },
    {
        title: "AI Automation & Intelligence",
        desc: "Deploying custom AI agents and workflow automations to reduce operational drag and scale efficiency."
    },
    {
        title: "Brand & Experience Design",
        desc: "Crafting visual identities and corporate narratives that command authority in the global marketplace."
    }
];

export default function WhatWeEngineer() {
    return (
        <section id="capabilities" className="py-32 bg-secondary border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <span className="text-xs font-medium tracking-[0.2em] text-accent/80 uppercase block mb-4">
                        System Capabilities
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-light text-white">
                        What We Engineer
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/5">
                    {capabilities.map((cap, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-primary p-12 relative group overflow-hidden border-b border-r border-white/5"
                        >
                            <div className="absolute inset-0 bg-white/[0.02] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />

                            <h3 className="text-2xl font-light text-white mb-4 group-hover:text-accent transition-colors relative z-10">
                                {cap.title}
                            </h3>
                            <p className="text-text-dim leading-relaxed font-light relative z-10 group-hover:text-white/80 transition-colors">
                                {cap.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
