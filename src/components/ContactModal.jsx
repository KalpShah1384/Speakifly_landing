import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactModal = ({ isOpen, onClose, initialSubject = "" }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: initialSubject
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    React.useEffect(() => {
        if (isOpen) {
            console.log("ContactModal is now OPEN");
            setIsSuccess(false);
        }
    }, [isOpen]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using Formspree's AJAX API
            // Note: You can also use a specific form ID if you create an account at formspree.io
            // For now, we use the easiest "mailto" alternative that works via their API
            const response = await fetch("https://formspree.io/f/mqaebrda", { // This is a temporary ID for speakifly01@gmail.com
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Lead: ${formData.subject || 'IELTS Enquiry'}`,
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '', subject: initialSubject });
                setTimeout(() => {
                    setIsSuccess(false);
                    onClose();
                }, 4000);
            } else {
                alert("Something went wrong. Please try again or email us directly at speakifly01@gmail.com");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen && !isSuccess) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-brand-dark/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8">
                            <div className="mb-8">
                                <h3 className="text-2xl font-display font-bold text-brand-dark mb-2">Book Your Session</h3>
                                <p className="text-slate-600">Enter your details and our team will contact you shortly.</p>
                            </div>

                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="py-12 text-center"
                                >
                                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send size={40} />
                                    </div>
                                    <h4 className="text-2xl font-bold text-brand-dark mb-2">Message Sent!</h4>
                                    <p className="text-slate-600">We've received your request. Our team will call you back at the provided number.</p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={async (e) => {
                                        e.preventDefault();
                                        setIsSubmitting(true);
                                        const formDataObj = new FormData(e.target);
                                        formDataObj.append("access_key", "d4ffc3ea-c933-4716-aedc-4c986c9fe73f");

                                        const object = Object.fromEntries(formDataObj);
                                        const json = JSON.stringify(object);

                                        try {
                                            const res = await fetch("https://api.web3forms.com/submit", {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                    Accept: "application/json"
                                                },
                                                body: json
                                            }).then((res) => res.json());

                                            if (res.success) {
                                                setIsSuccess(true);
                                                setTimeout(() => {
                                                    setIsSuccess(false);
                                                    onClose();
                                                }, 5000);
                                            } else {
                                                alert("Invalid Access Key. Please follow the instructions to get your key!");
                                            }
                                        } catch (error) {
                                            alert("Network error. Please try again.");
                                        } finally {
                                            setIsSubmitting(false);
                                        }
                                    }}
                                    className="space-y-5"
                                >
                                    {/* Subject for the email */}
                                    <input type="hidden" name="subject" value={`Speakifly Lead: ${initialSubject}`} />
                                    <input type="hidden" name="from_name" value="Speakifly Landing Page" />

                                    <div className="relative">
                                        <User className="absolute left-4 top-4 text-slate-400" size={20} />
                                        <input
                                            required
                                            name="name"
                                            type="text"
                                            placeholder="Full Name"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-4 text-slate-400" size={20} />
                                            <input
                                                required
                                                name="email"
                                                type="email"
                                                placeholder="Email Address"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-4 text-slate-400" size={20} />
                                            <input
                                                required
                                                name="phone"
                                                type="tel"
                                                placeholder="Phone Number"
                                                className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                                            />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-slate-400" size={20} />
                                        <textarea
                                            required
                                            name="message"
                                            rows="4"
                                            placeholder="What can we help you with?"
                                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-brand-primary/20 focus:border-brand-primary"
                                        ></textarea>
                                    </div>

                                    <button
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="w-full bg-brand-primary hover:bg-brand-secondary text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-secondary/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>
                                                Submit Request
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>

                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
