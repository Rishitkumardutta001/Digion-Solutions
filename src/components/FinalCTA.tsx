"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function FinalCTA() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        // SERVICE CONFIGURATION
        // For Web3Forms: Use "https://api.web3forms.com/submit" and your Access Key
        // For Formspree: Use "https://formspree.io/f/YOUR_FORM_ID"
        const ENDPOINT = "https://formspree.io/f/xkoneyzg";
        const ACCESS_KEY = ""; // Formspree doesn't use this, but we'll leave it empty for clarity

        try {
            const response = await fetch(ENDPOINT, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: ACCESS_KEY, // This line is for Web3Forms
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Consultation Request from ${formData.name}`,
                    from_name: "DigiOn Showroom",
                }),
            });

            const result = await response.json();
            if (response.ok || result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-32 bg-[#020202] relative overflow-hidden">
            {/* Ambient Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-[10px] font-medium tracking-[0.4em] text-accent/50 uppercase block mb-6">
                            Application
                        </span>
                        <h2 className="text-4xl md:text-6xl font-display font-light text-white/95 mb-8 tracking-tight leading-tight">
                            Ready to Engineer <br />
                            <span className="text-accent">Dominance?</span>
                        </h2>
                        <p className="text-sm md:text-base text-white/60 font-light tracking-wide max-w-xl mx-auto leading-relaxed">
                            We operate by invitation and selective application. <br />
                            Tell us about your digital vision.
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <AnimatePresence mode="wait">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="bg-accent/5 border border-accent/20 rounded-sm p-12 text-center"
                                >
                                    <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-6" />
                                    <h3 className="text-2xl font-light text-white mb-4">Transmission Received</h3>
                                    <p className="text-white/60 font-light leading-relaxed">
                                        Your vision has been recorded. Our studio will review your <br />
                                        application and reach out if there is a strategic fit.
                                    </p>
                                    <button
                                        onClick={() => setStatus("idle")}
                                        className="mt-10 text-[10px] uppercase tracking-[0.2em] text-accent/60 hover:text-accent transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.form
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onSubmit={handleSubmit}
                                    className="space-y-8"
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 ml-1">Name</label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10"
                                                placeholder="Enter your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 ml-1">Email</label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10"
                                                placeholder="email@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[9px] uppercase tracking-[0.3em] text-white/30 ml-1">Project Vision</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-white/[0.02] border border-white/10 rounded-sm px-5 py-4 text-white focus:outline-none focus:border-accent/40 focus:bg-white/[0.04] transition-all duration-500 placeholder:text-white/10 resize-none"
                                            placeholder="Describe the scale and impact you're aiming for..."
                                        />
                                    </div>

                                    <div className="pt-4 flex flex-col items-center">
                                        <button
                                            disabled={status === "loading"}
                                            type="submit"
                                            className="group relative px-12 py-5 bg-transparent overflow-hidden rounded-full transition-all hover:scale-105 duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
                                        >
                                            <div className="absolute inset-0 w-full h-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-500" />
                                            <div className="absolute inset-0 border border-accent/30 rounded-full group-hover:border-accent/50 transition-colors duration-500" />
                                            <span className="relative text-accent font-medium tracking-[0.2em] text-[10px] uppercase flex items-center gap-3">
                                                {status === "loading" ? (
                                                    <>
                                                        <Loader2 className="w-3 h-3 animate-spin" />
                                                        Processing Application
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Application
                                                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </button>

                                        {status === "error" && (
                                            <p className="mt-6 text-[10px] text-red-400 tracking-widest uppercase font-medium">
                                                An error occurred. Please try again or email us directly.
                                            </p>
                                        )}
                                    </div>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
