import React, { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "What if the developer isn't a good fit?",
      answer: "We offer a 2-week risk-free trial. If the engineer doesn't meet your expectations for any reason within the first 14 days, we will replace them immediately at no cost, or refund your money."
    },
    {
      question: "How does pricing work?",
      answer: "We charge a transparent, flat monthly fee based on the engineer's seniority level. Unlike typical agencies that take a 40-60% cut, we ensure the developer receives 85%+ of the fee. This guarantees you're working with highly motivated talent."
    },
    {
      question: "Who owns the Intellectual Property (IP)?",
      answer: "You do. 100%. All of our client contracts include strict IP assignment and non-disclosure clauses ensuring that your code, ideas, and data remain securely yours."
    },
    {
      question: "How does time zone alignment actually work?",
      answer: "Instead of just offering a 1-2 hour overlap window, our remote engineers fully align with your time zone. They attend your standups, collaborate in real-time, and act as a seamless extension of your core team."
    },
    {
      question: "Can I scale the team up or down?",
      answer: "Yes. Our flexible model allows you to scale your engineering team dynamically based on your product roadmap and funding cycle, giving you agility without the overhead of full-time hiring."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 relative border-t border-slate-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400">Everything you need to know about partnering with LearnShiz.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-slate-900/60 shadow-[0_0_15px_rgba(37,99,235,0.05)]' : 'bg-slate-900/20 hover:bg-slate-900/40'}`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className={`font-semibold pr-8 ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-blue-400' : 'text-slate-500'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
