import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { XIcon } from 'lucide-react';
interface HomepageProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}
type ModalType = 'help' | 'faq' | 'about' | null;
export function Homepage({ searchQuery, onSearchChange, onSearchSubmit }: HomepageProps) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  return (
    <div className="flex-1 flex flex-col items-center justify-center px-12 min-h-full">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          ease: 'easeOut'
        }}
        className="text-7xl text-[#7b64b0] mb-12 tracking-wider font-bold"
        style={{
          fontFamily: "'Raleway', serif"
        }}>
        
        Craigslist
      </motion.h1>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: 'easeOut'
        }}
        className="w-full max-w-lg mb-10">
        
        <SearchBar value={searchQuery} onChange={onSearchChange} onSubmit={onSearchSubmit}/>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6,
          delay: 0.4,
          ease: 'easeOut'
        }}
        className="flex items-center gap-8 text-purple-800">
        
        <button
          onClick={() => setActiveModal('help')}
          className="hover:text-purple-950 transition-all duration-200 hover:scale-105 text-base">
          
          help
        </button>
        <button
          onClick={() => setActiveModal('faq')}
          className="hover:text-purple-950 transition-all duration-200 hover:scale-105 text-base">
          
          faq
        </button>
        <button
          onClick={() => setActiveModal('about')}
          className="hover:text-purple-950 transition-all duration-200 hover:scale-105 text-base">
          
          about us
        </button>
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal &&
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveModal(null)}>
          
            <motion.div
            initial={{
              scale: 0.95,
              opacity: 0
            }}
            animate={{
              scale: 1,
              opacity: 1
            }}
            exit={{
              scale: 0.95,
              opacity: 0
            }}
            transition={{
              type: 'spring',
              duration: 0.4
            }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            
              <div className="p-6 border-b border-gray-200 flex items-center justify-between">
                <h3
                className="text-2xl font-semibold text-[#7b64b0] capitalize"
                style={{
                  fontFamily: "'Raleway', serif"
                }}>
                
                  {activeModal === 'faq' ?
                'Frequently Asked Questions' :
                activeModal === 'about' ?
                'About Us' :
                'Help Center'}
                </h3>
                <button
                onClick={() => setActiveModal(null)}
                className="text-gray-500 hover:text-gray-700 transition-colors">
                
                  <XIcon size={24} />
                </button>
              </div>

              <div className="p-6 max-h-[60vh] overflow-y-auto">
                {activeModal === 'help' &&
              <div className="space-y-4 text-gray-700">
                    <h4 className="font-semibold text-gray-900">
                      Getting Started
                    </h4>
                    <p>
                      Browse categories using the sidebar on the left. Click any
                      category to see available listings in your area.
                    </p>
                    <h4 className="font-semibold text-gray-900">Posting</h4>
                    <p>
                      Click the pencil icon in the top right to create a new
                      post. Choose a category, add a title and description, and
                      publish.
                    </p>
                    <h4 className="font-semibold text-gray-900">
                      Search & Filter
                    </h4>
                    <p>
                      Use the search bar to find specific listings. On category
                      pages, use the filter button to narrow results by
                      subcategory.
                    </p>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p>
                      Click the map pin on the right sidebar to set your
                      location and search radius. This helps show listings near
                      you.
                    </p>
                    <h4 className="font-semibold text-gray-900">
                      Saving Favorites
                    </h4>
                    <p>
                      Click the star icon on any listing to save it to your
                      favorites. Access saved listings via the star icon in the
                      header.
                    </p>
                    <h4 className="font-semibold text-gray-900">Contact</h4>
                    <p>
                      For support, email{' '}
                      <span className="text-[#7b64b0] font-medium">
                        support@craigslist-redesign.org
                      </span>
                    </p>
                  </div>
              }

                {activeModal === 'faq' &&
              <div className="space-y-5 text-gray-700">
                    {[
                {
                  q: 'Is Craigslist free to use?',
                  a: 'Yes! Browsing and most postings are completely free. Some categories like job listings in certain cities may have a small fee.'
                },
                {
                  q: 'How do I contact a poster?',
                  a: 'Click on any listing and use the "Reply to Poster" button. You\'ll be connected via our anonymous email relay system.'
                },
                {
                  q: 'Can I edit or delete my post?',
                  a: "Yes. When you create a post, you'll receive a management link via email that lets you edit or remove your listing at any time."
                },
                {
                  q: 'How do I report a suspicious listing?',
                  a: 'Each listing has a "flag" option. Click it and select the reason. Our moderation team reviews all flagged posts.'
                },
                {
                  q: "Why can't I see listings in my area?",
                  a: 'Make sure your location is set correctly using the map pin in the right sidebar. Adjust the search radius if needed.'
                },
                {
                  q: 'Is my personal information shared?',
                  a: 'No. We use anonymous email relays and never share your personal contact information with other users.'
                }].
                map((item, i) =>
                <div key={i}>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {item.q}
                        </h4>
                        <p className="text-sm">{item.a}</p>
                      </div>
                )}
                  </div>
              }

                {activeModal === 'about' &&
              <div className="space-y-4 text-gray-700">
                    <p>
                      This is a redesigned version of Craigslist, created as a
                      university project to explore how a beloved but aging
                      platform can be modernized while preserving its core
                      simplicity and accessibility.
                    </p>
                    <h4 className="font-semibold text-gray-900">Our Mission</h4>
                    <p>
                      We believe Craigslist's strength lies in its directness —
                      connecting people locally without unnecessary complexity.
                      Our redesign aims to improve visual hierarchy, navigation,
                      and filtering while keeping that spirit alive.
                    </p>
                    <h4 className="font-semibold text-gray-900">The Team</h4>
                    <p>
                      We're a group of students passionate about UI/UX design
                      and web development. This project combines Figma
                      prototyping with a React-based front-end implementation.
                    </p>
                    <h4 className="font-semibold text-gray-900">Technology</h4>
                    <p>
                      Built with React, TypeScript, Tailwind CSS, Framer Motion,
                      and Leaflet. Designed in Figma.
                    </p>
                    <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                      <p className="text-sm text-[#7b64b0] italic">
                        "The best interface is one that gets out of the way and
                        lets people connect."
                      </p>
                    </div>
                  </div>
              }
              </div>

              <div className="p-4 border-t border-gray-200 bg-gray-50">
                <button
                onClick={() => setActiveModal(null)}
                className="w-full bg-purple-900 text-white py-2.5 rounded-lg hover:bg-purple-800 transition-colors font-medium">
                
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}