"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone, MessageSquare, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#050505] pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Subtle Gradient Accent */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Meta */}
                    <div className="md:col-span-4 space-y-8">
                        <Link
                            href="/"
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="inline-block relative h-10 w-36 hover:opacity-80 transition-opacity duration-500"
                        >
                            <Image
                                src="/logo.png"
                                alt="DigiOn Solutions"
                                fill
                                className="object-contain opacity-80"
                                sizes="144px"
                            />
                        </Link>
                        <p className="text-white/50 text-base font-light leading-relaxed max-w-sm">
                            A private digital engineering studio specializing in AI automation,
                            high-performance marketing, and elite digital infrastructure.
                        </p>

                        {/* Direct Channels */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <a
                                href="https://wa.me/919620652556"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:bg-accent hover:text-[#050505] hover:border-accent transition-all duration-500"
                            >
                                <MessageSquare size={14} />
                                WhatsApp
                            </a>
                            <a
                                href="tel:+919620652556"
                                className="inline-flex items-center gap-3 px-6 py-3 border border-white/10 rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-white hover:border-white/40 transition-all duration-500"
                            >
                                <Phone size={14} />
                                Call Studio
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-2">
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Capabilities</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "AI Automation", href: "/#capabilities" },
                                { name: "Growth Systems", href: "/#capabilities" },
                                { name: "Showroom", href: "/#experience" },
                                { name: "Industries", href: "/#industries" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-white/40 text-sm font-light hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Studio</h4>
                        <ul className="space-y-4">
                            <li><Link href="/#about" className="text-white/40 text-sm font-light hover:text-white transition-colors">Philosophy</Link></li>
                            <li><Link href="/#experience" className="text-white/40 text-sm font-light hover:text-white transition-colors">Case Studies</Link></li>
                            <li><Link href="/#contact" className="text-white/40 text-sm font-light hover:text-white transition-colors">Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-4">
                        <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-10 text-accent/80">Global Headquarters</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 text-white/50 text-sm font-light leading-relaxed">
                                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                                <span>108, 2nd Floor, 27th Main Rd, <br /> HSR Layout, Sector 2, <br /> Bangalore, India 560102</span>
                            </li>
                            <li className="flex items-center gap-4 text-white/50 text-sm font-light">
                                <Mail size={18} className="text-accent shrink-0" />
                                <a href="mailto:contact@digion.in" className="hover:text-white transition-colors">contact@digion.in</a>
                            </li>
                            <li className="flex items-center gap-4 text-white/50 text-sm font-light">
                                <Linkedin size={18} className="text-accent shrink-0" />
                                <a href="https://www.linkedin.com/company/digion.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/[0.03] pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex flex-col md:flex-row items-center gap-8 text-[10px] uppercase tracking-[0.2em] text-white/20">
                        <p>&copy; {new Date().getFullYear()} DigiOn Solutions Private Limited.</p>
                        <div className="flex gap-8">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Mandate</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Engagement</Link>
                        </div>
                    </div>

                    <div className="flex gap-8 items-center">
                        <Link href="https://www.linkedin.com/company/digion.in/" target="_blank" className="text-white/20 hover:text-accent transition-colors" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </Link>
                        <Link href="https://www.facebook.com/digion.in/" target="_blank" className="text-white/20 hover:text-accent transition-colors" aria-label="Facebook">
                            <Facebook size={20} />
                        </Link>
                        <Link href="https://www.instagram.com/digion.in/" target="_blank" className="text-white/20 hover:text-accent transition-colors" aria-label="Instagram">
                            <Instagram size={20} />
                        </Link>
                        <Link href="https://x.com/digion_in" target="_blank" className="text-white/20 hover:text-accent transition-colors" aria-label="Twitter">
                            <Twitter size={20} />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
