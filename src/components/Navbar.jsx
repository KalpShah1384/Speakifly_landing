import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onContactClick }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Coaching Plans', href: '#services' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <BookOpen className="h-8 w-8 text-brand-primary" />
                    <span className={`text-2xl font-display font-bold ${isScrolled ? 'text-brand-dark' : 'text-brand-dark'}`}>
                        Speakifly
                    </span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-slate-600 hover:text-brand-primary font-medium transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <button
                        onClick={() => {
                            console.log("Navbar button clicked");
                            onContactClick();
                        }}
                        className="bg-brand-primary hover:bg-brand-secondary text-white px-6 py-2.5 rounded-full font-medium transition-colors shadow-md hover:shadow-brand-primary/30 text-center cursor-pointer"
                    >
                        Book Free Demo
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-brand-dark"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-6 px-6 flex flex-col gap-4 md:hidden overflow-hidden"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-brand-dark font-medium text-lg hover:text-brand-primary"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onContactClick();
                            }}
                            className="bg-brand-primary text-white px-6 py-3 rounded-full font-medium w-full mt-2"
                        >
                            Book Free Demo
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
