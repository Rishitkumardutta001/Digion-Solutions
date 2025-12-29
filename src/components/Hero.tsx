"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-[5px] md:pt-[21px] pb-10 md:pb-16 px-6 overflow-hidden bg-primary">
            {/* Abstract Background Texture - Visually starts below divider */}
            <div className="absolute inset-0 top-[1px] bg-[url('/hero-bg.png')] opacity-40 bg-cover bg-center pointer-events-none mix-blend-overlay [mask-image:linear-gradient(to_bottom,transparent,black_150px)]" />
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

            {/* Deep Ambient Glows - Subtler */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-900/5 rounded-full blur-[180px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="mb-8 inline-block">
                        <span className="text-xs md:text-sm font-medium tracking-[0.25em] text-accent/60 uppercase">
                            Private Digital Engineering Studio
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-bold font-display tracking-tight text-white mb-8 leading-[1.1]">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="block"
                        >
                            We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">Growth-Systems.</span>
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-emerald-200/50 to-accent/50 opacity-90"
                        >
                            Not Just Websites.
                        </motion.span>
                    </h1>

                    <p className="text-lg md:text-xl text-text-dim/80 mb-10 max-w-2xl mx-auto leading-loose font-light tracking-wide">
                        A curated gateway to premium digital experiences. We combine enterprise strategy with silicon-valley precision.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                        <Link
                            href="#contact"
                            className="group relative px-10 py-5 bg-transparent overflow-hidden rounded-full transition-all hover:scale-105 duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
                        >
                            <div className="absolute inset-0 w-full h-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                            <div className="absolute inset-0 border border-accent/20 rounded-full group-hover:border-accent/40 transition-colors duration-500" />
                            <span className="relative text-accent font-medium tracking-widest text-xs uppercase group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                                Request Access
                                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                            </span>
                        </Link>
                        <Link
                            href="#experience"
                            className="text-text-dim hover:text-white transition-all tracking-widest text-xs uppercase border-b border-transparent hover:border-white/20 pb-1 hover:translate-x-1 duration-300"
                        >
                            Explore Our Work
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
