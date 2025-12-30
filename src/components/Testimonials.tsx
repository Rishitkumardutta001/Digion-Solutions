"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        text: "It has been a journey of over 1.5 years with DigiOn now. A highly customer-driven company with competitive pricing and possess the flexible ability to understand and support small and start-up businesses. They demonstrate empathy and value relationships to the core.",
        author: "Gayatri Tribhuvan",
        role: "Founder, Fluenc"
    },
    {
        text: "They really have expertise in their domain and manage things pretty well. Each member from their team is very much approachable and they assist really well. I have observed a multifold increase in the revenue of my business.",
        author: "Dinkar Agarwal",
        role: "CEO, IPflair"
    },
    {
        text: "They have been hands-on from day one, developing our website and right content. Amit Kumar has 20+ years of proven track record and he personally involves with you to come with the right strategy. Highly recommended.",
        author: "Suhani Prabhu",
        role: "Founder & CEO, SetupIQ"
    },
    {
        text: "We rate DigiOn 9 out of 10 for quality services and quick response. Our new website was setup pretty quick and we can now respond to enquiries at a faster rate. A great experience so far.",
        author: "Hussain Mehtawala",
        role: "Marketing Manager, Hydrofabs"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#020202] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <span className="text-[10px] font-medium tracking-[0.4em] text-accent/50 uppercase block mb-6">
                        Voice of Strategy
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-light text-white mb-8 tracking-tight">
                        Clients Speak
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white/[0.02] border border-white/5 p-10 rounded-sm relative group hover:bg-white/[0.04] transition-all duration-500"
                        >
                            <Quote className="absolute top-8 right-8 w-8 h-8 text-accent/10 group-hover:text-accent/20 transition-colors" />
                            <p className="text-lg text-white/60 font-light leading-relaxed mb-8 italic">
                                "{t.text}"
                            </p>
                            <div>
                                <h4 className="text-white font-medium tracking-wide">{t.author}</h4>
                                <span className="text-xs text-accent/60 uppercase tracking-widest">{t.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
