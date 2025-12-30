"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Studio", href: "/#about" },
    { name: "Capabilities", href: "/#capabilities" },
    { name: "Experience", href: "/#experience" },
];

export default function Header() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Intersection Observer for Active Section
    useEffect(() => {
        if (pathname !== "/") {
            setActiveSection("");
            return;
        }

        const observerOptions = {
            root: null,
            rootMargin: "-25% 0px -65% 0px", // Precise window for active state
            threshold: 0
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Track all major sections
        const sections = [
            "about",
            "capabilities",
            "experience",
            "industries",
            "how-we-work",
            "why-digion",
            "testimonials",
            "contact"
        ];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        // Simple scroll listener for header background only
        const handleHeaderScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleHeaderScroll);
        handleHeaderScroll();

        return () => {
            observer.disconnect();
            window.removeEventListener("scroll", handleHeaderScroll);
        };
    }, [pathname]);

    const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const targetId = href.split("#")[1];

        if (pathname === "/") {
            e.preventDefault();
            const element = document.getElementById(targetId);
            if (element) {
                const offset = 100; // Slightly larger offset for better clearance
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update URL hash without jumping
                window.history.pushState(null, "", href);
                setIsOpen(false);
            }
        }
    }, [pathname]);

    return (
        <>
            <motion.header
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                    scrolled
                        ? "metallic-glass py-4 shadow-xl"
                        : "bg-primary/40 backdrop-blur-sm py-8 border-b border-white/[0.02]"
                )}
            >
                {/* Metallic Chrome Sheen Overlay */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" />
                </div>

                <div className="container mx-auto px-8 flex items-center justify-between relative z-10">
                    {/* Logo */}
                    <Link
                        href="/"
                        onClick={(e) => {
                            if (pathname === "/") {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: "smooth" });
                                window.history.pushState(null, "", "/");
                            }
                        }}
                        className="relative h-10 w-36 hover:opacity-80 transition-opacity duration-500"
                    >
                        <Image
                            src="/logo.png"
                            alt="DigiOn Solutions"
                            fill
                            className="object-contain opacity-90"
                            priority
                        />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all duration-500 relative group",
                                    activeSection === link.href.split("#")[1]
                                        ? "text-accent"
                                        : "text-white/40 hover:text-white"
                                )}
                            >
                                {link.name}
                                {activeSection === link.href.split("#")[1] && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent rounded-full"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA */}
                    <div className="hidden md:flex items-center gap-6">
                        <a
                            href="tel:+919886616448"
                            className="text-white/40 hover:text-accent transition-colors"
                            aria-label="Call DigiOn"
                        >
                            <Phone size={18} />
                        </a>
                        <Link
                            href="/#contact"
                            onClick={(e) => scrollToSection(e, "/#contact")}
                            className="inline-flex items-center justify-center px-8 py-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#050505] bg-accent rounded-sm hover:bg-white transition-all duration-700 shadow-[0_0_20px_rgba(212,175,55,0.15)]"
                        >
                            Private Access
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white/80 hover:text-white p-2 rounded-md focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
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
                        className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-10 md:hidden"
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
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={cn(
                                        "text-4xl font-display font-light transition-colors",
                                        activeSection === link.href.split("#")[1] ? "text-accent" : "text-white/60 hover:text-white"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={(e) => scrollToSection(e, "/#contact")}
                            className="mt-8 px-10 py-4 bg-accent text-[#050505] font-bold rounded-sm uppercase tracking-[0.2em] text-xs shadow-[0_0_30px_rgba(212,175,55,0.2)]"
                        >
                            Private Access
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
