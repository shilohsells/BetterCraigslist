import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categorySubcategories } from '../data/listings';
interface SidebarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  expandedCategory: string | null;
  onToggleExpand: (category: string) => void;
  activeSubcategory: string | null;
  onSubcategoryClick: (subcategory: string | null) => void;
}
export function Sidebar({
  currentView,
  onNavigate,
  expandedCategory,
  onToggleExpand,
  activeSubcategory,
  onSubcategoryClick
}: SidebarProps) {
  const mainLinks = [
  'Communities',
  'Services',
  'Discussion',
  'Housing',
  'For Sale',
  'Jobs',
  'Gigs',
  'Resumes'];

  return (
    <div className="w-56 bg-[#e8e4df] border-r border-gray-300 p-6 flex flex-col overflow-y-auto">
      <div className="mb-8 pb-6 border-b border-gray-300">
        <button 
          onClick={() => {
            onNavigate('home');
            onSubcategoryClick(null);
          }}
          className="cursor-pointer focus:outline-none">
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:scale-105 transition-transform duration-200"
            >
              {/* open C */}
              <circle
                cx="28"
                cy="28"
                r="18"
                stroke="#7751b6"
                strokeWidth="3.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="90 20"
                transform="rotate(38 28 28)"
              />

              {/* left branch */}
              <line
                x1="28"
                y1="28"
                x2="17"
                y2="40"
                stroke="#7751b6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* bottom peace line */}
              <line
                x1="28"
                y1="11"
                x2="28"
                y2="45"
                stroke="#7751b6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* peace line */}
              <line
                x1="28"
                y1="11"
                x2="28"
                y2="28"
                stroke="#7751b6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* right branch */}
              <line
                x1="28"
                y1="28"
                x2="39"
                y2="39"
                stroke="#7751b6"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
            </svg>
        </button>
      </div>

      <nav className="flex flex-col gap-1">
        {mainLinks.map((link) => {
          const subLinks = categorySubcategories[link] || [];
          const isExpanded = expandedCategory === link;
          const isActive = currentView === link;
          return (
            <div key={link}>
              <button
                onClick={() => {
                  onToggleExpand(link);
                  onNavigate(link);
                  onSubcategoryClick(null);
                }}
                className={`w-full text-left italic text-purple-900 hover:text-purple-950 transition-all duration-200 py-2 px-3 rounded-md relative group ${isActive ? 'font-semibold bg-purple-100 border-l-4 border-purple-900' : 'hover:bg-purple-50'}`}>
                
                {link}
              </button>

              <AnimatePresence>
                {isExpanded && subLinks.length > 0 &&
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 0
                  }}
                  animate={{
                    opacity: 1,
                    height: 'auto'
                  }}
                  exit={{
                    opacity: 0,
                    height: 0
                  }}
                  transition={{
                    duration: 0.2
                  }}
                  className="ml-4 mt-1 flex flex-col gap-1 overflow-hidden">
                  
                    <button
                    onClick={() => onSubcategoryClick(null)}
                    className={`text-left text-sm transition-colors py-1 px-3 rounded ${activeSubcategory === null && isActive ? 'text-purple-900 font-medium bg-purple-50' : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'}`}>
                    
                      • all
                    </button>
                    {subLinks.map((subLink) =>
                  <button
                    key={subLink}
                    onClick={() => onSubcategoryClick(subLink)}
                    className={`text-left text-sm transition-colors py-1 px-3 rounded ${activeSubcategory === subLink ? 'text-purple-900 font-medium bg-purple-50' : 'text-gray-600 hover:text-purple-900 hover:bg-purple-50'}`}>
                    
                        • {subLink}
                      </button>
                  )}
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </nav>
    </div>);

}