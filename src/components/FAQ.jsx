import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "Do you offer both Online and Offline classes?",
            answer: "Yes! Based in Vadodara, we provide physical offline classes. For students outside Vadodara or those who prefer flexibility, we offer high-quality interactive online sessions."
        },
        {
            question: "How long is the typical coaching duration?",
            answer: "Our plans range from a 2-week Grammar Drill or Crash Course for quick results to a 4-month Confidence Program for long-term mastery."
        },
        {
            question: "Are mock tests and study materials included?",
            answer: "Absolutely. Depending on your plan, we include multiple full-length mock tests and comprehensive study notes. All essential strategies and materials are provided."
        },
        {
            question: "Can I get a free demo class before enrolling?",
            answer: "Yes, we encourage students to book a free demo class. This helps you understand our teaching methodology and see if our personalized approach fits your needs."
        },
        {
            question: "What is your success rate?",
            answer: "Over the past 5 years in Vadodara, we have maintained an excellent success rate, with students consistently achieving their desired results in both IELTS and professional communication."
        }
    ];

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-brand-primary/5 rounded-full blur-3xl -ml-36 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 bg-brand-light/50 px-4 py-1.5 rounded-full text-brand-primary font-bold text-sm mb-4">
                        <HelpCircle size={16} />
                        FAQ
                    </div>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-dark mb-6">
                        Common Questions
                    </h2>
                    <p className="text-slate-600 text-lg">
                        Everything you need to know about starting your journey with Speakifly.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'border-brand-primary shadow-lg shadow-brand-primary/5 bg-brand-highlight/10' : 'border-slate-100 bg-slate-50 hover:bg-white'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                            >
                                <span className={`text-lg md:text-xl font-bold transition-colors ${activeIndex === index ? 'text-brand-primary' : 'text-brand-dark group-hover:text-brand-primary'}`}>
                                    {faq.question}
                                </span>
                                <div className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${activeIndex === index ? 'bg-brand-primary text-white rotate-180' : 'bg-white text-slate-400 border border-slate-100 group-hover:border-brand-primary group-hover:text-brand-primary'}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 md:px-8 md:pb-8">
                                            <div className="w-full h-px bg-slate-200/50 mb-6"></div>
                                            <p className="text-slate-600 leading-relaxed text-lg">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
