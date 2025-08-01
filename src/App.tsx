import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GalaxySection from './components/GalaxySection';
import About from './components/About';
import WhyParticipate from './components/WhyParticipate';
import Explore from './components/Explore';
import Judges from './components/Judges';
import Requirements from './components/Requirements';
import Prizes from './components/Prizes';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookNavigation from './components/BookNavigation';

const pages = [
  { id: 'hero', component: Hero, title: 'Welcome' },
  { id: 'about', component: About, title: 'About' },
  { id: 'galaxy', component: GalaxySection, title: 'Previous Hackathons' },
  { id: 'why-participate', component: WhyParticipate, title: 'Why Participate' },
  { id: 'explore', component: Explore, title: 'Explore' },
  { id: 'judges', component: Judges, title: 'Judges' },
  { id: 'requirements', component: Requirements, title: 'Requirements' },
  { id: 'prizes', component: Prizes, title: 'Prizes' },
  { id: 'faq', component: FAQ, title: 'FAQ' },
  { id: 'contact', component: Contact, title: 'Contact' }
];

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToPage = (pageIndex: number) => {
    if (pageIndex >= 0 && pageIndex < pages.length && pageIndex !== currentPage) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentPage(pageIndex);
        setIsTransitioning(false);
      }, 150);
    }
  };

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      goToPage(currentPage - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevPage();
      } else if (e.key === 'ArrowRight') {
        nextPage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentPage]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      {/* Book Container */}
      <div className="min-h-screen flex flex-col relative">
        {/* Navbar - Always visible */}
        <div className="relative z-50">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="flex-1 relative overflow-hidden">
          {/* Notebook Paper Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 opacity-30"></div>
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px'
            }}
          ></div>
          
          {/* Left margin line */}
          <div className="absolute left-16 top-0 bottom-0 w-px bg-red-300 opacity-30 hidden md:block"></div>

          {/* Page Content with Animation */}
          <div 
            className={`relative z-10 transition-all duration-300 ease-in-out ${
              isTransitioning ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'
            }`}
          >
            <div className="bg-white bg-opacity-80 backdrop-blur-sm min-h-full shadow-lg border-l-4 border-blue-200">
              <CurrentPageComponent />
            </div>
          </div>
        </div>

        {/* Footer - Always visible */}
        <div className="relative z-50 bg-white bg-opacity-90 backdrop-blur-sm border-t border-gray-200">
          <Footer />
        </div>

        {/* Book Navigation */}
        <BookNavigation
          currentPage={currentPage}
          totalPages={pages.length}
          onPrevPage={prevPage}
          onNextPage={nextPage}
          onGoToPage={goToPage}
          pages={pages}
        />
      </div>
    </div>
  );
}

export default App;