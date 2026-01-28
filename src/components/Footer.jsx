import React from 'react';
import { Instagram, MessageCircle, Mail, Phone, MapPin, BookOpen } from 'lucide-react';

const Footer = ({ onContactClick }) => {
    return (
        <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t border-brand-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand Info */}
                    <div>
                        <div className="flex items-center gap-2 mb-6 text-white">
                            <BookOpen className="h-8 w-8 text-brand-secondary" />
                            <span className="text-2xl font-display font-bold">Speakifly</span>
                        </div>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Empowering students to achieve their dream IELTS scores with personalized coaching and proven strategies.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/speakifly.25?igsh=MW41aXZ5ZWE3cjcwbw==" },
                                { Icon: MessageCircle, href: "https://wa.me/919876543210" } // Placeholder WhatsApp link
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target={href !== "#" ? "_blank" : undefined}
                                    rel={href !== "#" ? "noopener noreferrer" : undefined}
                                    className="bg-slate-800 p-2 rounded-full hover:bg-brand-primary hover:text-white transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Coaching Plans', 'Success Stories', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href="#" className="hover:text-brand-light transition-colors block">
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-brand-secondary mt-1" size={18} />
                                <span>Vadodara, Gujarat, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-brand-secondary" size={18} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-brand-secondary" size={18} />
                                <a href="mailto:speakifly01@gmail.com" className="hover:text-brand-light transition-colors">speakifly01@gmail.com</a>
                            </li>
                        </ul>
                    </div>


                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>&copy; 2024 Speakifly. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
