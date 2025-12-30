"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion, animate, useMotionValue, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/experience-data";
import { notFound } from "next/navigation";

function AnimatedNumber({ value }: { value: number }) {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: [0.16, 1, 0.3, 1]
            });
            return controls.stop;
        }
    }, [isInView, value, count]);

    return <motion.span ref={ref}>{rounded}</motion.span>;
}

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
                <div className="max-w-6xl mx-auto flex flex-col gap-32 md:gap-48">
                    {category.experiences.map((exp, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                                {/* Dual Device Preview */}
                                <div className="lg:col-span-8 relative">
                                    <a
                                        href={exp.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block relative group"
                                    >
                                        {/* Desktop Frame */}
                                        <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/10 bg-[#0A0A0A] shadow-2xl">
                                            <Image
                                                src={exp.image || '/hero-bg.png'}
                                                alt={exp.title}
                                                fill
                                                quality={80}
                                                className="object-cover object-top transition-transform duration-[3000ms] ease-out group-hover:scale-105"
                                                sizes="(max-width: 1024px) 100vw, 60vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#020202]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                        </div>

                                        {/* Mobile Frame Overlap */}
                                        {exp.mobileImage && (
                                            <div className="absolute -bottom-6 -right-6 md:-bottom-12 md:-right-12 w-[120px] md:w-[200px] aspect-[9/19.5] rounded-[2rem] border-[6px] border-[#1A1A1A] bg-[#050505] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden hidden sm:block transition-transform duration-700 group-hover:translate-y-[-10px]">
                                                <Image
                                                    src={exp.mobileImage}
                                                    alt={`${exp.title} mobile view`}
                                                    fill
                                                    className="object-cover"
                                                    sizes="200px"
                                                />
                                                {/* Device Shine */}
                                                <div className="absolute inset-x-0 top-0 h-1 bg-white/10" />
                                            </div>
                                        )}
                                    </a>
                                </div>

                                {/* Engineering Details */}
                                <div className="lg:col-span-4 lg:pt-12">
                                    <div className="mb-8">
                                        <h2 className="text-3xl md:text-4xl font-display font-light mb-6 tracking-tight text-white/95">
                                            {exp.title}
                                        </h2>
                                        <p className="text-sm md:text-base text-white/50 font-light leading-relaxed mb-10">
                                            {exp.descriptor}
                                        </p>
                                    </div>

                                    {/* Lighthouse Metrics - Editorial Styling */}
                                    {exp.scores && (
                                        <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12 py-8 border-y border-white/[0.03]">
                                            {[
                                                { label: "Performance", value: exp.scores.performance },
                                                { label: "SEO", value: exp.scores.seo },
                                                { label: "Accessibility", value: exp.scores.accessibility },
                                                { label: "Best Practices", value: exp.scores.bestPractices }
                                            ].map((score) => (
                                                <div key={score.label} className="space-y-3">
                                                    <div className="flex items-end justify-between">
                                                        <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">{score.label}</span>
                                                        <span className="text-lg font-display font-light text-accent leading-none">
                                                            <AnimatedNumber value={score.value} />
                                                        </span>
                                                    </div>
                                                    <div className="h-[1px] w-full bg-white/[0.05] relative overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            whileInView={{ width: `${score.value}%` }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 1.5, ease: "easeOut" }}
                                                            className="absolute inset-y-0 left-0 bg-accent/40"
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <a
                                        href={exp.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-accent uppercase group/link"
                                    >
                                        <span className="relative">
                                            Private View
                                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover/link:w-full" />
                                        </span>
                                        <ArrowUpRight size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-500" />
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
