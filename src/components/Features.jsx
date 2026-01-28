import React from 'react';
import { Target, Users, Clock, Award, Video, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = ({ onContactClick }) => {
    const features = [
        {
            icon: Target,
            title: "Targeted Coaching",
            description: "We focus specifically on your weak areas to maximize score improvement in the shortest time."
        },
        {
            icon: Users,
            title: "1-on-1 Sessions",
            description: "Get personalized attention with dedicated sessions to clear doubts and practice speaking."
        },
        {
            icon: Clock,
            title: "Flexible Timings",
            description: "Morning, evening, or weekend batches available to suit your busy schedule."
        },
        {
            icon: Award,
            title: "Proven Strategies",
            description: "Learn secret tips and tricks used by Band 9 scorers to master Reading and Listening."
        },
        {
            icon: Video,
            title: "Recorded Sessions",
            description: "Missed a class? Access high-quality recordings of every session anytime, anywhere."
        },
        {
            icon: MessageCircle,
            title: "24/7 Support",
            description: "Direct access to mentors via WhatsApp for instant feedback on Writing tasks."
        }
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-brand-light/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto mb-16"
                >
                    <h2 className="text-brand-secondary font-semibold tracking-wide uppercase mb-2">Why Speakifly?</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mb-6">
                        Not Just Coaching, It's a Partnership
                    </h3>
                    <p className="text-slate-600 text-lg">
                        We don't just teach English; we train you to master the IELTS exam format with confidence and precision.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                boxShadow: "0 25px 50px -12px rgba(15, 118, 110, 0.15)",
                                transition: { duration: 0.3, ease: "easeOut" }
                            }}
                            onClick={() => onContactClick(feature.title)}
                            className="group p-8 rounded-2xl bg-slate-50 hover:bg-white border border-slate-100 hover:border-brand-secondary/30 transition-all duration-300 cursor-pointer"
                        >
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0] }}
                                className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-secondary group-hover:text-white transition-colors duration-300 text-brand-secondary"
                            >
                                <feature.icon size={28} />
                            </motion.div>
                            <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{feature.title}</h4>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
