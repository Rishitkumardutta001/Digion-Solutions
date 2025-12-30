"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { categories } from "@/lib/experience-data";

export default function Experience() {
    return (
        <section id="experience" className="py-32 bg-[#020202]">
            {/* Section Header */}
            <div className="container mx-auto px-6 mb-40 text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] font-medium tracking-[0.35em] text-accent/50 uppercase block mb-8">
                        The Showroom
                    </span>
                    <h2 className="text-4xl md:text-7xl font-display font-light text-white/95 tracking-tight leading-[1.1] mb-12">
                        Digital Experiences. <br /> Curated by Intent.
                    </h2>
                    <p className="text-white/60 font-light max-w-2xl mx-auto text-lg leading-relaxed">
                        Step into specialized environments engineered for specific operational demands.
                        Each room is a case study in precision.
                    </p>
                </div>
            </div>

            {/* Category Entry Points */}
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-16">
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                delay: i * 0.1,
                                duration: 1.2,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                        >
                            <Link
                                href={`/experience/${cat.slug}`}
                                className="group relative block w-full h-[400px] md:h-[50vh] overflow-hidden rounded-sm border border-white/5 bg-[#050505] hover:border-white/10 transition-all duration-700"
                            >
                                {/* Abstract Cinematic Visual Background */}
                                <div className="absolute inset-0 grayscale opacity-30 group-hover:opacity-50 group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105">
                                    <Image
                                        src={cat.image || '/hero-bg.png'}
                                        alt={cat.title}
                                        fill
                                        quality={60}
                                        className="object-cover object-center"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#020202] via-[#020202]/60 md:via-[#020202]/40 to-transparent" />
                                </div>

                                {/* Content Layer */}
                                <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-16 z-10">
                                    <div className="max-w-xl">
                                        <span className="text-[9px] md:text-[10px] font-medium tracking-[0.3em] text-accent/60 uppercase block mb-4 md:mb-6 transition-transform duration-700 group-hover:-translate-y-1">
                                            {cat.subtext}
                                        </span>
                                        <h3 className="text-3xl md:text-6xl font-display font-light text-white mb-4 md:mb-6 tracking-tight leading-tight">
                                            {cat.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 md:mb-10 max-w-md font-light group-hover:text-white/80 transition-colors">
                                            {cat.descriptor}
                                        </p>

                                        {/* Action */}
                                        <div className="flex items-center gap-4 group/action">
                                            <span className="text-[9px] md:text-[10px] font-medium tracking-[0.25em] text-white/40 uppercase group-hover/action:text-accent transition-colors">
                                                Explore Room
                                            </span>
                                            <div className="relative w-8 h-[1px] bg-white/10 group-hover/action:bg-accent group-hover/action:w-12 transition-all duration-500">
                                                <ArrowRight
                                                    size={12}
                                                    className="absolute -right-1 -top-[5px] text-white/20 group-hover/action:text-accent transition-colors"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Overlay Accent */}
                                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent/30 group-hover:w-full transition-all duration-1000 ease-in-out" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
