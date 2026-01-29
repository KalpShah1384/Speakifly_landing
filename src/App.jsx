import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Comparison from './components/Comparison';
import Process from './components/Process';
import Features from './components/Features';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSubject, setModalSubject] = useState("");

  const openModal = (subject = "") => {
    console.log("Opening modal with subject:", subject);
    setModalSubject(subject);
    setIsModalOpen(true);
  };
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <Navbar onContactClick={() => openModal("General Enquiry")} />
      <main>
        <Hero onContactClick={() => openModal("IELTS Coaching Interest")} />
        <About />
        <Comparison />
        <Process />
        <Features onContactClick={(title) => openModal(`Interest in ${title}`)} />
        <Services onContactClick={(plan) => openModal(`Enrollment: ${plan}`)} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onContactClick={() => openModal("Newsletter / Support")} />

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSubject={modalSubject}
      />
    </div>
  );
}

export default App;
