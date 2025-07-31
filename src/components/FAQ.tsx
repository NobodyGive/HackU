import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Who can participate in United Hacks V6?',
      answer: 'Anyone with a passion for coding and innovation! Students, professionals, and hobbyist developers from around the world are welcome to join.'
    },
    {
      question: 'How much does it cost to participate?',
      answer: 'United Hacks V6 is completely free to participate. We believe in making technology accessible to everyone.'
    },
    {
      question: 'Can I participate as a team?',
      answer: 'Yes! You can form teams of up to 4 members. You can find teammates on our Discord server or participate solo.'
    },
    {
      question: 'What are the rules and guidelines?',
      answer: 'All code must be written during the hackathon period. Open source libraries and APIs are allowed. Full rules will be shared upon registration.'
    },
    {
      question: 'What should I build?',
      answer: 'Anything! Build web apps, mobile apps, games, AI/ML projects, or any innovative solution. Creativity is encouraged!'
    },
    {
      question: 'How will projects be judged?',
      answer: 'Projects are evaluated based on technical complexity, innovation, UI/UX, real-world impact, and presentation quality.'
    },
    {
      question: 'When is the deadline to register?',
      answer: 'Registration closes 24 hours before the hackathon begins. Register early to secure your spot!'
    },
    {
      question: 'Will there be mentorship available?',
      answer: 'Yes! Industry experts will be available throughout the event to provide guidance and answer technical questions.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300">
            Got questions? We've got answers!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700/50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-400" size={24} />
                ) : (
                  <ChevronDown className="text-blue-400" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;