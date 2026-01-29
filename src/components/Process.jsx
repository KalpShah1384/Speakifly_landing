import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, ClipboardCheck, UserCheck, GraduationCap, ArrowDown } from 'lucide-react';

const Process = () => {
    const steps = [
        {
            title: "Free Demo",
            description: "Experience our unique 1-on-1 teaching style first-hand with a no-obligation demo session.",
            icon: Laptop,
            color: "bg-blue-100 text-blue-600"
        },
        {
            title: "Skill Assessment",
            description: "We conduct a thorough evaluation to identify your weak areas across all 4 IELTS modules.",
            icon: ClipboardCheck,
            color: "bg-purple-100 text-purple-600"
        },
        {
            title: "Tailored Training",
            description: "Get personalized, target-oriented 1-on-1 coaching sessions focused on your specific needs.",
            icon: UserCheck,
            color: "bg-emerald-100 text-emerald-600"
        },
        {
            title: "Dream Score",
            description: "Achieve your target band score and get ready to fly high for your international dreams!",
            icon: GraduationCap,
            color: "bg-orange-100 text-orange-600"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12
            }
        }
    };

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -z-10 skew-x-12 transform origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-brand-secondary font-bold tracking-widest uppercase text-sm"
                    >
                        Your Success Path
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-display font-bold text-brand-dark mt-4 mb-6"
                    >
                        The Speakifly <span className="text-brand-primary">Student Journey</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-600 text-lg max-w-2xl mx-auto"
                    >
                        Our proven 4-step workflow ensures you don't just study for IELTS, you master it.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
                >
                    {/* Progress Line (Desktop) */}
                    <div className="absolute top-1/4 left-0 w-full h-0.5 bg-slate-100 -z-10 hidden lg:block"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-brand-primary/20 transition-all duration-300 relative group"
                        >
                            {/* Step Number */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                {index + 1}
                            </div>

                            {/* Icon Box */}
                            <div className={`w-20 h-20 rounded-[2rem] ${step.color} flex items-center justify-center mb-8 shadow-inner group-hover:rotate-6 transition-transform duration-500`}>
                                <step.icon size={36} />
                            </div>

                            <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">
                                {step.title}
                            </h3>
                            <p className="text-slate-500 leading-relaxed font-medium">
                                {step.description}
                            </p>

                            {/* Mobile/Tablet Arrow */}
                            {index < steps.length - 1 && (
                                <div className="mt-8 text-slate-200 lg:hidden">
                                    <ArrowDown size={24} className="animate-bounce" />
                                </div>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Process;
