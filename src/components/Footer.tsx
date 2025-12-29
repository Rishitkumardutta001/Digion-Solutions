"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#02060C] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-display font-bold text-white tracking-tighter">
                            DigiOn<span className="text-accent">.</span>
                        </Link>
                        <p className="text-text-dim text-sm leading-relaxed">
                            Private Digital Engineering Studio. <br />
                            By Invitation Only.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Capabilities</h4>
                        <ul className="space-y-3">
                            {["Digital Platforms", "Growth Systems", "AI Intelligence", "Brand Experience"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-text-dim text-sm hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Studio</h4>
                        <ul className="space-y-3">
                            {["About", "Experience", "Private Consultation", "Careers"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-text-dim text-sm hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-text-dim text-sm">
                                <Mail size={16} className="text-accent" />
                                <span>private@digion.com</span>
                            </li>
                            <li className="flex items-center gap-3 text-text-dim text-sm">
                                <MapPin size={16} className="text-accent" />
                                <span>Bangalore, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-text-dim/50 text-xs">
                        &copy; {new Date().getFullYear()} DigiOn Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-text-dim/50 hover:text-white transition-colors"><Linkedin size={18} /></Link>
                        <Link href="#" className="text-text-dim/50 hover:text-white transition-colors"><Twitter size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
