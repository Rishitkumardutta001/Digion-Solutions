"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const experiences = [
    {
        title: "Aeronyx V3",
        category: "Private Aviation",
        descriptor: "Ultra-luxury private aviation digital experience",
        href: "https://aerionyx-v3.vercel.app/",
        image: "/work-aerionyx-v3.png"
    },
    {
        title: "Aeronyx Studio",
        category: "Digital Experience",
        descriptor: "Curated platform for aviation excellence",
        href: "https://studio.digion.in/websites/website-aerionyx-air",
        image: "/work-aerionyx-studio.png"
    },
    {
        title: "Luxe Lift Air",
        category: "Private Aviation",
        descriptor: "Premium charter experience platform",
        href: "https://luxe-lift-air.vercel.app/",
        image: "/work-luxe-lift.png"
    },
    {
        title: "Aeronyx V2",
        category: "Private Aviation",
        descriptor: "Evolution of private charter experience",
        href: "https://aerionyx-v2.vercel.app/",
        image: "/work-aerionyx-v2.png"
    },
    {
        title: "Estate Prime",
        category: "Luxury Real Estate",
        descriptor: "Elevated property discovery platform",
        href: "https://real-estate-demo-1-livid.vercel.app",
        image: "/work-realestate.png"
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-[#020202]">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-40">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-medium tracking-[0.35em] text-accent/50 uppercase block mb-8">
                        The Showroom
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-light text-white/95 tracking-tight leading-[1.1]">
                        Experience Our Work
                    </h2>
                </div>
            </div>

            {/* Vertical Gallery - Single Column */}
            <div className="container mx-auto px-6">
                <div className="max-w-5xl mx-auto flex flex-col gap-40">
                    {experiences.map((exp, i) => (
                        <motion.a
                            key={i}
                            href={exp.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-20%" }}
                            transition={{
                                delay: i * 0.05,
                                duration: 1.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group cursor-pointer block"
                        >
                            {/* Tall Vertical Card (Poster-like) */}
                            <div className="relative w-full h-[80vh] overflow-hidden rounded-sm shadow-[0_0_0_1px_rgba(255,255,255,0.02)] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_0_60px_rgba(16,185,129,0.08)] transition-all duration-1000">

                                {/* Cinematic Image - Reduced Dominance */}
                                {exp.image && (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-all duration-[1200ms] ease-out group-hover:scale-[1.02] opacity-65 group-hover:opacity-85"
                                        style={{ backgroundImage: `url(${exp.image})` }}
                                    />
                                )}

                                {/* Stronger Bottom Gradient Mask (20-25% height) for Text Clarity */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-[25%] via-black/50 to-transparent group-hover:from-black/85 group-hover:via-black/40 transition-all duration-1000" />

                                {/* Minimal Content Hierarchy */}
                                <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-16">
                                    {/* Eyebrow / Category */}
                                    <span className="text-[9px] md:text-[10px] font-medium tracking-[0.35em] text-white/40 uppercase mb-8 group-hover:text-accent/60 transition-colors duration-700">
                                        {exp.category}
                                    </span>

                                    {/* Experience Name (Primary Focus) */}
                                    <h3 className="text-5xl md:text-7xl lg:text-8xl font-display font-light text-white mb-5 tracking-tight leading-[0.95] group-hover:tracking-normal transition-all duration-700">
                                        {exp.title}
                                    </h3>

                                    {/* One-line Descriptor */}
                                    <p className="text-sm md:text-base text-white/45 font-light tracking-wide mb-12 max-w-2xl leading-relaxed">
                                        {exp.descriptor}
                                    </p>

                                    {/* Single Entry Action */}
                                    <div className="flex items-center gap-3 opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                                        <span className="text-[10px] font-medium tracking-[0.25em] text-white/50 group-hover:text-white/80 uppercase transition-colors duration-700">
                                            Enter Experience
                                        </span>
                                        <div className="relative overflow-hidden w-6 h-3 flex items-center">
                                            <ArrowRight
                                                size={14}
                                                className="text-accent/60 absolute left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-900 ease-out"
                                            />
                                            <ArrowRight
                                                size={14}
                                                className="text-white/25 absolute left-0 group-hover:translate-x-full transition-transform duration-900 ease-out"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
