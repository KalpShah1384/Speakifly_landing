import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
    const testimonials = [
        {
            name: "Priya Sharma",
            score: "Band 8.0",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            text: "Speakifly changed my whole perspective on IELTS. I was stuck at 6.5 for months, but their writing templates helped me score a 7.5 in writing and 8.0 overall!"
        },
        {
            name: "Sneha Patel",
            score: "Communication Mastery",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            text: "The Communication Program was exactly what I needed for my career. The 1-on-1 speaking practice and role plays gave me the confidence to ace my job interviews!"
        },
        {
            name: "Anjali Gupta",
            score: "Band 8.5",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
            text: "I needed a CLB 9 for my Canada PR, and Speakifly made it possible. The flexible timings allowed me to prepare while working a full-time job."
        }
    ];

    return (
        <section id="testimonials" className="py-24 bg-brand-primary text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 left-20 w-64 h-64 bg-brand-light rounded-full blur-3xl"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1, 1.3, 1], x: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-20 right-20 w-80 h-80 bg-brand-secondary rounded-full blur-3xl"
                ></motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-brand-light font-semibold tracking-wide uppercase mb-2">Success Stories</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                        Don't Just Take Our Word For It
                    </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 100,
                                damping: 15
                            }}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                borderColor: "rgba(255, 255, 255, 0.5)",
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                            }}
                            className="group bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-all shadow-xl cursor-default"
                        >
                            <Quote className="text-brand-light w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                            <p className="text-lg text-brand-mint mb-8 leading-relaxed italic">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4">
                                <motion.img
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full border-2 border-brand-secondary object-cover shadow-lg"
                                />
                                <div>
                                    <h4 className="font-bold text-white group-hover:text-brand-light transition-colors">{t.name}</h4>
                                    <p className="text-brand-highlight text-sm font-semibold">{t.score}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
