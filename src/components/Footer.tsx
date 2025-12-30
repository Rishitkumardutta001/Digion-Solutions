"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#02060C] pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-4">
                        <Link href="/" className="inline-block relative h-10 w-32 hover:opacity-80 transition-opacity duration-500" aria-label="DigiOn Solutions Home">
                            <Image
                                src="/logo.png"
                                alt="DigiOn Solutions"
                                fill
                                className="object-contain opacity-60 hover:opacity-90 transition-opacity"
                                sizes="128px"
                            />
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Private Digital Engineering Studio. <br />
                            Leading Digital Marketing Agency & <br />
                            AI Automation Partner.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Capabilities</h4>
                        <ul className="space-y-3">
                            {["AI & Automation", "Performance Marketing", "SEO Strategy", "Creative Design"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-white/60 text-sm hover:text-accent transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Studio</h4>
                        <ul className="space-y-3">
                            <li><Link href="/#about" className="text-white/60 text-sm hover:text-accent transition-colors">About</Link></li>
                            <li><Link href="/#experience" className="text-white/60 text-sm hover:text-accent transition-colors">Experience</Link></li>
                            <li><Link href="/#contact" className="text-white/60 text-sm hover:text-accent transition-colors">Private Consultation</Link></li>
                            <li><Link href="#" className="text-white/60 text-sm hover:text-accent transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Mail size={16} className="text-accent" />
                                <span>info@digion.in</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <MapPin size={16} className="text-accent" />
                                <span>Bangalore, India</span>
                            </li>
                            <li className="flex items-center gap-3 text-white/60 text-sm">
                                <Phone size={16} className="text-accent" />
                                <span>+91 99001 19350</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-white/40 text-xs">
                        &copy; {new Date().getFullYear()} DigiOn Solutions. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="LinkedIn Profile"><Linkedin size={18} /></Link>
                        <Link href="#" className="text-white/40 hover:text-white transition-colors" aria-label="Twitter Profile"><Twitter size={18} /></Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
