"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Studio", href: "#about" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Experience", href: "#experience" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-1000",
                    // Deeper refinement: Extremely subtle hairline, almost invisible
                    "bg-[#050505]/60 backdrop-blur-[12px] border-b border-white/[0.02]"
                )}
            >
                <div className="container mx-auto px-8 h-24 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative h-12 w-40 hover:opacity-80 transition-opacity duration-500">
                        <img
                            src="/logo.jpg"
                            alt="DigiOn Solutions"
                            className="h-full w-full object-contain opacity-90 mix-blend-screen"
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-6 py-2 rounded-full text-sm font-medium text-white/60 hover:text-white hover:bg-white/[0.03] transition-all duration-500 tracking-[0.05em] uppercase"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3 text-xs font-bold uppercase tracking-[0.15em] text-[#050505] bg-accent rounded-sm hover:bg-white transition-all duration-700 hover:shadow-[0_0_50px_rgba(16,185,129,0.12)]"
                        >
                            Private Access
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white/80 hover:text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-3xl font-light text-white hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-8 px-8 py-3 bg-accent text-[#050505] font-bold rounded-sm uppercase tracking-widest text-sm"
                        >
                            Private Access
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
