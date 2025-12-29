"use client";

import { motion } from "framer-motion";

const steps = [
    "Discover", "Design", "Engineer", "Automate", "Scale"
];

export default function HowWeWork() {
    return (
        <section className="py-32 bg-primary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-16">
                    <div className="md:w-1/3">
                        <span className="text-xs font-medium tracking-[0.2em] text-accent/80 uppercase block mb-4">
                            The Process
                        </span>
                        <h2 className="text-3xl font-display font-light text-white mb-6">
                            Linear Precision.
                        </h2>
                        <p className="text-text-dim font-light leading-relaxed">
                            We strip away the noise. Our workflow is a direct line from problem to solution, ensuring no momentum is lost.
                        </p>
                    </div>

                    <div className="md:w-2/3">
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                            {steps.map((step, i) => (
                                <div key={i} className="relative group cursor-default">
                                    <div className="h-full border-l border-white/10 pl-6 py-4 group-hover:border-accent transition-colors duration-500">
                                        <span className="text-xs text-text-dim/50 font-mono mb-2 block group-hover:text-accent/50 transition-colors">0{i + 1}</span>
                                        <span className="text-lg font-medium text-white group-hover:text-accent transition-colors duration-300 transform group-hover:translate-x-2 inline-block">{step}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
