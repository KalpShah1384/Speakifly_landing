import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = ({ onContactClick }) => {
    const plans = [
        {
            name: "Crash Course",
            price: "₹1,999",
            duration: "2 Weeks",
            features: [
                "10 Hours of Live Classes",
                "2 Full-Length Mock Tests",
                "Basic Writing Evaluation",
                "Speaking Tips & Tricks"
            ],
            recommended: false
        },
        {
            name: "Grammar Drill",
            price: "₹749",
            duration: "2 Weeks",
            features: [
                "Live Classes",
                "Daily Speaking Practices",
                "Comprehensive Grammar Notes",
                "Interactive Role Plays"
            ],
            recommended: false
        },
        {
            name: "Communication Program",
            price: "₹3,500",
            duration: "4 Weeks",
            features: [
                "Live Classes",
                "Complete Grammar Notes",
                "Real-world Role Plays",
                "1-on-1 Speaking Practice"
            ],
            recommended: true
        },
        {
            name: "Confidence Program",
            price: "₹18,000",
            duration: "4 Months",
            features: [
                "1-on-1 Live Classes",
                "Recorded Lecture Access",
                "Confidence Building Activities",
                "Advance Grammar & Interview Prep"
            ],
            recommended: false
        },
        {
            name: "Comprehensive",
            price: "₹4,999",
            duration: "4 Weeks",
            features: [
                "30 Hours of Live Classes",
                "8 Full-Length Mock Tests",
                "Unlimited Writing Evaluation",
                "1-on-1 Speaking Interviews (5)",
                "Daily Grammar Drills"
            ],
            recommended: false
        },
        {
            name: "Personal Mentorship",
            price: "₹14,999",
            duration: "Until Exam",
            features: [
                "Personalized 1-on-1 Coaching",
                "Customized Study Schedule",
                "Unlimited Mock Tests",
                "Daily Performance Tracking",
                "Visa Assistance Included"
            ],
            recommended: false
        }
    ];

    return (
        <section id="services" className="py-24 bg-brand-highlight/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-brand-primary font-semibold tracking-wide uppercase mb-2">Our Plans</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark">
                        Choose the Right Path to Success
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{
                                y: -12,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className={`group relative rounded-2xl p-8 transition-all duration-300 ${plan.recommended ? 'bg-white shadow-2xl border-2 border-brand-primary' : 'bg-white border border-brand-light shadow-lg hover:shadow-2xl'}`}
                        >
                            {plan.recommended && (
                                <motion.div
                                    initial={{ scale: 0.8 }}
                                    whileInView={{ scale: 1 }}
                                    className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md"
                                >
                                    Most Popular
                                </motion.div>
                            )}
                            <h4 className="text-2xl font-bold text-brand-dark mb-2 group-hover:text-brand-primary transition-colors">{plan.name}</h4>
                            <div className="flex items-baseline gap-1 mb-4">
                                <motion.span
                                    whileHover={{ scale: 1.1 }}
                                    className={`text-4xl font-bold transition-colors ${plan.recommended ? 'text-brand-primary' : 'text-brand-dark'}`}
                                >
                                    {plan.price}
                                </motion.span>
                                <span className="text-slate-500 font-medium lowercase">/ {plan.duration}</span>
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 + (idx * 0.1) }}
                                        className="flex items-start gap-3 group/feature"
                                    >
                                        <motion.span
                                            whileHover={{ scale: 1.2, rotate: 360 }}
                                            className={`rounded-full p-1 mt-0.5 transition-colors ${plan.recommended ? 'bg-brand-primary/10 text-brand-primary' : 'bg-brand-light/30 text-brand-secondary'}`}
                                        >
                                            <Check size={14} />
                                        </motion.span>
                                        <span className="text-slate-700 group-hover/feature:text-brand-dark transition-colors">{feature}</span>
                                    </motion.div>
                                ))}
                            </ul>

                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => onContactClick(plan.name)}
                                className={`w-full py-4 rounded-xl font-semibold transition-all shadow-md text-center block cursor-pointer ${plan.recommended ? 'bg-brand-primary hover:bg-brand-secondary text-white hover:shadow-lg shadow-brand-primary/20' : 'bg-brand-highlight hover:bg-brand-light text-brand-dark hover:shadow-lg'}`}
                            >
                                Enroll Now
                            </motion.button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
