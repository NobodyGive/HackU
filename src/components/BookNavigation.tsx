import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Menu } from 'lucide-react';

interface Page {
  id: string;
  title: string;
  component: React.ComponentType;
}

interface BookNavigationProps {
  currentPage: number;
  totalPages: number;
  onPrevPage: () => void;
  onNextPage: () => void;
  onGoToPage: (pageIndex: number) => void;
  pages: Page[];
}

const BookNavigation: React.FC<BookNavigationProps> = ({
  currentPage,
  totalPages,
  onPrevPage,
  onNextPage,
  onGoToPage,
  pages
}) => {
  const [showTableOfContents, setShowTableOfContents] = useState(false);

  return (
    <>
      {/* Navigation Arrows */}
      <div className="fixed inset-y-0 left-0 flex items-center z-40">
        <button
          onClick={onPrevPage}
          disabled={currentPage === 0}
          className={`ml-4 p-3 rounded-full shadow-lg transition-all duration-300 ${
            currentPage === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-110 shadow-blue-200'
          }`}
          title="Previous page (←)"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="fixed inset-y-0 right-0 flex items-center z-40">
        <button
          onClick={onNextPage}
          disabled={currentPage === totalPages - 1}
          className={`mr-4 p-3 rounded-full shadow-lg transition-all duration-300 ${
            currentPage === totalPages - 1
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-50'
              : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-110 shadow-blue-200'
          }`}
          title="Next page (→)"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Page Counter */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200">
          <span className="text-sm font-medium text-gray-700">
            Page {currentPage + 1} of {totalPages}
          </span>
        </div>
      </div>

      {/* Table of Contents Button */}
      <div className="fixed top-20 right-4 z-40">
        <button
          onClick={() => setShowTableOfContents(!showTableOfContents)}
          className="p-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg border border-gray-200 hover:bg-blue-50 hover:text-blue-600 transition-all duration-300"
          title="Table of Contents"
        >
          <BookOpen size={20} />
        </button>
      </div>

      {/* Table of Contents Overlay */}
      {showTableOfContents && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-96 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                  <BookOpen size={20} />
                  Table of Contents
                </h3>
                <button
                  onClick={() => setShowTableOfContents(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto">
              {pages.map((page, index) => (
                <button
                  key={page.id}
                  onClick={() => {
                    onGoToPage(index);
                    setShowTableOfContents(false);
                  }}
                  className={`w-full text-left px-6 py-3 hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                    currentPage === index ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{page.title}</span>
                    <span className="text-sm text-gray-500">
                      {index + 1}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-30">
        <div className="h-1 bg-gray-200">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
            style={{ width: `${((currentPage + 1) / totalPages) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Keyboard Navigation Hint */}
      <div className="fixed bottom-6 right-6 z-40">
        <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg border border-gray-200 text-xs text-gray-600">
          Use ← → keys to navigate
        </div>
      </div>
    </>
  );
};

export default BookNavigation;