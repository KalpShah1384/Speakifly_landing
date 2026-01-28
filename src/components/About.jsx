import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, User, CheckCircle2, Monitor, Users } from 'lucide-react';

const About = () => {
    const stats = [
        { icon: Calendar, label: "Experience", value: "5+ Years" },
        { icon: CheckCircle2, label: "Success Rate", value: "Excellent" },
        { icon: MapPin, label: "Location", value: "Vadodara, Gujarat" },
        { icon: Users, label: "Session Type", value: "1-on-1 Personalized" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-secondary/5 rounded-full -ml-48 -mb-48 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image / Card Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative"
                    >
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
                        >
                            <div className="bg-gradient-to-br from-brand-primary/80 to-brand-dark p-1">
                                <div className="bg-white rounded-[22px] p-8 md:p-12">
                                    <div className="flex flex-col items-center text-center">
                                        <motion.div
                                            initial={{ scale: 0.8, opacity: 0 }}
                                            whileInView={{ scale: 1, opacity: 1 }}
                                            transition={{ delay: 0.3, duration: 0.5 }}
                                            className="w-24 h-24 bg-brand-light rounded-full flex items-center justify-center mb-6 border-4 border-brand-primary/20 shadow-inner"
                                        >
                                            <User size={48} className="text-brand-primary" />
                                        </motion.div>
                                        <motion.h4
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.5 }}
                                            className="text-2xl font-display font-bold text-brand-dark mb-1"
                                        >
                                            Isha Shah
                                        </motion.h4>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.6 }}
                                            className="text-brand-primary font-semibold mb-6 italic"
                                        >
                                            Owner & Head Coach
                                        </motion.p>
                                        <motion.p
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ delay: 0.7 }}
                                            className="text-slate-600 leading-relaxed mb-8"
                                        >
                                            "Our mission is to bridge the gap between your current English proficiency and your dream IELTS score through dedicated mentorship and personalized strategies."
                                        </motion.p>
                                        <div className="w-full h-px bg-slate-100 mb-8"></div>
                                        <div className="grid grid-cols-2 gap-4 w-full text-left">
                                            <div className="flex items-center gap-2 group cursor-default">
                                                <div className="w-2 h-2 rounded-full bg-brand-secondary group-hover:scale-150 transition-transform"></div>
                                                <span className="text-sm font-medium text-slate-700">Online Sessions</span>
                                            </div>
                                            <div className="flex items-center gap-2 group cursor-default">
                                                <div className="w-2 h-2 rounded-full bg-brand-secondary group-hover:scale-150 transition-transform"></div>
                                                <span className="text-sm font-medium text-slate-700">Offline Classes</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        {/* Decorative element (Desktop Only) */}
                        <motion.div
                            animate={{ rotate: [12, 15, 12], scale: [1, 1.05, 1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-secondary/20 rounded-2xl -z-10 hidden md:block"
                        ></motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-brand-secondary font-semibold tracking-wide uppercase mb-4"
                        >
                            About Speakifly
                        </motion.h2>
                        <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-8 leading-tight"
                        >
                            Elevating Your IELTS Journey Since 2021
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 text-lg mb-10 leading-relaxed"
                        >
                            Based in the heart of <span className="text-brand-dark font-bold underline decoration-brand-secondary/30 decoration-4 underline-offset-4">Vadodara, Gujarat</span>, Speakifly has established itself as a premier destination for IELTS preparation. Over the past 5 years, we have consistently delivered excellent results by focusing on what truly matters: <span className="text-brand-primary font-semibold">The Student.</span>
                        </motion.p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid sm:grid-cols-2 gap-6 mb-10"
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        borderColor: 'rgba(15, 118, 110, 0.3)',
                                        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)'
                                    }}
                                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-colors duration-300"
                                >
                                    <div className="bg-brand-light/50 p-2.5 rounded-lg text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                                        <stat.icon size={22} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">{stat.label}</p>
                                        <p className="text-brand-dark font-bold">{stat.value}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-3 text-slate-700 hover:text-brand-primary transition-colors cursor-default">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    className="bg-green-100 text-green-600 p-1 rounded-full"
                                >
                                    <CheckCircle2 size={16} />
                                </motion.div>
                                <span className="font-medium">One-on-One Personalized Improvement</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-700 hover:text-brand-primary transition-colors cursor-default">
                                <motion.div
                                    whileHover={{ scale: 1.2, rotate: 360 }}
                                    className="bg-green-100 text-green-600 p-1 rounded-full"
                                >
                                    <CheckCircle2 size={16} />
                                </motion.div>
                                <span className="font-medium">Online & Offline Availability</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
