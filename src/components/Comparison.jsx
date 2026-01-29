import React from 'react';
import { motion } from 'framer-motion';
import { X, Check, ArrowRight, ShieldCheck, Users, Edit3, Award, Star } from 'lucide-react';

const Comparison = () => {
    const comparisonPoints = [
        {
            feature: "Student Attention",
            speakifly: "1-on-1 Personalized focus on your specific weaknesses.",
            other: "Large batches (30-40 students) where you're just a number.",
            icon: Users
        },
        {
            feature: "Mentorship",
            speakifly: "Direct training from Isha Shah (Owner & Head Coach).",
            other: "Rotating junior faculties with limited experience.",
            icon: Award
        },
        {
            feature: "Writing Feedback",
            speakifly: "Immediate, modular feedback with custom Band 9 templates.",
            other: "Delayed, generic checking with no clear improvement path.",
            icon: Edit3
        },
        {
            feature: "Strategy",
            speakifly: "Proven, result-oriented strategies tailored to your target.",
            other: "Teaching from outdated textbooks and generic methods.",
            icon: ShieldCheck
        },
        {
            feature: "Mock Tests",
            speakifly: "Unlimited evaluation and real exam-like simulation.",
            other: "Monthly mock tests with standard scoring.",
            icon: Star
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="why-us" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl -ml-32 pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl -mr-32 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-primary font-bold tracking-wider uppercase text-sm bg-brand-primary/10 px-4 py-1.5 rounded-full"
                    >
                        The Speakifly Edge
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-brand-dark mt-6 mb-4"
                    >
                        Why We Are <span className="text-brand-primary italic">Different</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Don't settle for average coaching. Compare and see why Speakifly is the preferred choice for serious IELTS aspirants.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid gap-6"
                >
                    {/* Header Row (Desktop Only) */}
                    <div className="hidden lg:grid lg:grid-cols-7 gap-6 px-8 py-4 bg-slate-100/50 rounded-2xl border border-slate-200 text-sm font-bold text-slate-500 uppercase tracking-widest">
                        <div className="lg:col-span-1">Feature</div>
                        <div className="lg:col-span-3 text-brand-primary">Speakifly (The Winner)</div>
                        <div className="lg:col-span-3">Typical Coaching Centers</div>
                    </div>

                    {comparisonPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.01 }}
                            className="bg-white rounded-3xl p-6 lg:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 group"
                        >
                            <div className="grid lg:grid-cols-7 items-center gap-6 lg:gap-12">
                                {/* Feature Title */}
                                <div className="lg:col-span-1 flex items-center gap-4">
                                    <div className="p-3 bg-brand-light/30 rounded-2xl text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-500">
                                        <point.icon size={24} />
                                    </div>
                                    <h4 className="lg:hidden font-bold text-brand-dark text-lg">{point.feature}</h4>
                                </div>

                                {/* Speakifly Side */}
                                <div className="lg:col-span-3 bg-brand-highlight/20 p-6 rounded-2xl border-2 border-brand-primary/10 relative overflow-hidden group-hover:bg-brand-highlight/30 transition-colors">
                                    <div className="absolute top-0 right-0 p-2">
                                        <Check className="text-brand-primary" size={20} strokeWidth={3} />
                                    </div>
                                    <h4 className="hidden lg:block font-bold text-brand-dark mb-2">{point.feature}</h4>
                                    <p className="text-brand-dark font-medium leading-relaxed">
                                        {point.speakifly}
                                    </p>
                                </div>

                                {/* Others Side */}
                                <div className="lg:col-span-3 bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200 relative grayscale group-hover:grayscale-0 transition-all">
                                    <div className="absolute top-0 right-0 p-2">
                                        <X className="text-slate-400" size={20} strokeWidth={3} />
                                    </div>
                                    <h4 className="hidden lg:block font-bold text-slate-500 mb-2">{point.feature}</h4>
                                    <p className="text-slate-500 leading-relaxed italic">
                                        {point.other}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block p-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary rounded-full">
                        <button className="bg-white hover:bg-slate-50 text-brand-primary px-8 py-4 rounded-full font-bold flex items-center gap-2 transition-all group">
                            Experience the Speakifly Difference
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Comparison;
