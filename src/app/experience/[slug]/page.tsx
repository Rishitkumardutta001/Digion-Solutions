"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/experience-data";
import { notFound } from "next/navigation";

export default function CategoryPage() {
    const params = useParams();
    const slug = params.slug as string;

    const category = categories.find(c => c.slug === slug);

    if (!category) {
        return notFound();
    }

    return (
        <div className="min-h-screen bg-[#020202] text-white">
            {/* Minimal Navigation */}
            <div className="container mx-auto px-6 py-12">
                <Link
                    href="/#experience"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-[10px] uppercase tracking-[0.3em] group"
                >
                    <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                    All Rooms
                </Link>
            </div>

            {/* Room Hero */}
            <section className="container mx-auto px-6 pt-8 pb-20 md:pt-12 md:pb-32">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[10px] font-medium tracking-[0.4em] text-accent/60 uppercase block mb-6 md:mb-8">
                            {category.subtext}
                        </span>
                        <h1 className="text-4xl md:text-8xl font-display font-light mb-8 md:mb-12 tracking-tight leading-tight">
                            {category.title}
                        </h1>
                        <p className="text-base md:text-2xl text-white/80 font-light leading-relaxed max-w-3xl">
                            {category.descriptor}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curated Experiences Gallery */}
            <section className="container mx-auto px-6 pb-40">
                <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32">
                    {category.experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                                {/* Visual Card */}
                                <div className="lg:col-span-8 relative aspect-[16/10] overflow-hidden rounded-sm border border-white/5 bg-[#050505]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out group-hover:scale-105 opacity-80"
                                        style={{ backgroundImage: `url(${exp.image || '/hero-bg.png'})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#020202] via-transparent to-transparent" />
                                </div>

                                {/* Text Detail */}
                                <div className="lg:col-span-4 pb-4 md:pb-8">
                                    <h2 className="text-2xl md:text-4xl font-display font-light mb-4 md:mb-6 tracking-tight">
                                        {exp.title}
                                    </h2>
                                    <p className="text-sm md:text-base text-white/60 font-light leading-relaxed mb-8 md:mb-10">
                                        {exp.descriptor}
                                    </p>

                                    <a
                                        href={exp.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 text-[10px] font-medium tracking-[0.3em] text-accent uppercase group/link"
                                    >
                                        Private View
                                        <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Navigation */}
            <section className="border-t border-white/5 py-24 bg-primary/30">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-white/40 text-sm mb-8 font-light italic">End of Session</p>
                    <Link
                        href="/#experience"
                        className="text-2xl font-display font-light text-white hover:text-accent transition-colors flex items-center justify-center gap-4 group"
                    >
                        Return to All Categories
                        <ArrowLeft size={24} className="rotate-180 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
