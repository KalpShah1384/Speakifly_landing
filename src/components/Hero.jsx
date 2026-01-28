import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ onContactClick }) => {
    return (
        <section className="relative min-h-screen pt-24 flex items-center overflow-hidden bg-gradient-to-br from-brand-mint via-white to-brand-light/30">
            {/* Abstract Background Shapes */}
            <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-light/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10"
            />
            <motion.div
                animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 -z-10"
            />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Left Content */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-white border border-brand-light px-4 py-2 rounded-full shadow-sm text-sm font-semibold text-brand-primary"
                    >
                        <span className="w-2 h-2 rounded-full bg-brand-secondary animate-pulse"></span>
                        #1 Rated IELTS Coaching
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-display font-bold text-brand-dark leading-tight"
                    >
                        Speak with <span className="text-brand-primary">Confidence.</span> <br />
                        Fly High with <span className="text-brand-secondary">Success.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-600 leading-relaxed max-w-lg"
                    >
                        Unlock your potential with personalized IELTS coaching designed to get you the band score you need. Expert guidance using our proven strategies.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <motion.button
                            onClick={onContactClick}
                            className="bg-brand-primary hover:bg-brand-secondary text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg hover:shadow-brand-secondary/40 flex items-center justify-center gap-2 group cursor-pointer"
                        >
                            Start Your Journey
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </motion.button>
                        <button className="bg-white hover:bg-brand-mint text-brand-primary border border-brand-light px-8 py-4 rounded-full font-semibold transition-all shadow-sm hover:shadow-md">
                            View Success Stories
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="pt-8 grid grid-cols-2 gap-4"
                    >
                        {['Band 8+ Specialists', '1-on-1 Attention', 'Mock Tests Included', 'Flexible Schedule'].map((item) => (
                            <div key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                                <CheckCircle className="text-brand-secondary h-5 w-5" />
                                {item}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                        animate={{ opacity: 1, scale: 1, rotate: 2 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ rotate: 0, scale: 1.02 }}
                        className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Happy student studying"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/20 to-transparent pointer-events-none"></div>
                    </motion.div>

                    {/* Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
                        transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, default: { duration: 0.6, delay: 0.6 } }}
                        className="absolute -bottom-8 -left-8 bg-white p-5 rounded-2xl shadow-xl border border-brand-mint flex items-center gap-4 z-20"
                    >
                        <div className="bg-brand-mint p-3 rounded-full">
                            <span className="text-2xl">🌟</span>
                        </div>
                        <div>
                            <p className="text-sm text-slate-500 font-medium">Average Score</p>
                            <p className="text-xl font-bold text-brand-primary">Band 7.5+</p>
                        </div>
                    </motion.div>

                    {/* Another Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0, y: [0, 10, 0] }}
                        transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }, default: { duration: 0.6, delay: 0.8 } }}
                        className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-brand-light z-20 hidden md:block"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                            <span className="text-sm font-bold text-slate-700">Live Classes On</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
