"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-32 bg-primary relative overflow-hidden">
            {/* Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-light text-white mb-8 tracking-tight">
                    Ready to Engineer <br />
                    <span className="text-accent">Dominance?</span>
                </h2>

                <p className="text-xl text-text-dim font-light mb-12 max-w-xl mx-auto">
                    We operate by invitation and application. Tell us about your vision.
                </p>

                <Link
                    href="mailto:private@digion.com"
                    className="inline-flex items-center gap-4 text-white border-b border-whitepb-1 hover:text-accent hover:border-accent transition-all duration-300 text-lg group"
                >
                    Request Private Consultation
                    <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </section>
    );
}
