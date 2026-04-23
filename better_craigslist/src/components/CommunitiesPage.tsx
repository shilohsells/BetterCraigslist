import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { CommunityGrid } from './CommunityGrid';
interface CommunitiesPageProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterOpen: boolean;
  onToggleFilter: () => void;
  onItemClick?: (item: any) => void;
  items: Array<{
    id: number;
    title: string;
    image?: string;
  }>;
}
export function CommunitiesPage({
  searchQuery,
  onSearchChange,
  filterOpen,
  onToggleFilter,
  onItemClick,
  items
}: CommunitiesPageProps) {
  const categories = ['activities', 'artist', 'childcare', 'pets', 'general'];
  return (
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
      transition={{
        duration: 0.3
      }}
      className="flex-1 flex flex-col px-12 py-8">
      
      <div className="mb-8 relative">
        <SearchBar
          value={searchQuery}
          onChange={onSearchChange}
          onToggleFilter={onToggleFilter}
          showFilter={true} />
        

        <AnimatePresence>
          {filterOpen &&
          <motion.div
            initial={{
              opacity: 0,
              y: -10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: -10
            }}
            transition={{
              duration: 0.2
            }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-4 z-10">
            
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Filter by Category
              </h4>
              <div className="space-y-2">
                {categories.map((category) =>
              <label
                key={category}
                className="flex items-center gap-2 cursor-pointer hover:bg-purple-50 p-2 rounded transition-colors">
                
                    <input
                  type="checkbox"
                  className="w-4 h-4 text-[#7b64b0] border-gray-300 rounded focus:ring-purple-900" />
                
                    <span className="text-sm text-gray-700 capitalize">
                      {category}
                    </span>
                  </label>
              )}
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </div>

      <motion.h2
        initial={{
          opacity: 0,
          x: -20
        }}
        animate={{
          opacity: 1,
          x: 0
        }}
        transition={{
          duration: 0.5
        }}
        className="text-6xl text-[#7b64b0] mb-10 tracking-wide font-bold"
        style={{
          fontFamily: "'Raleway', serif"
        }}>
        
        Communities
      </motion.h2>

      <CommunityGrid
        items={items}
        searchQuery={searchQuery}
        onItemClick={onItemClick} />
      
    </motion.div>);

}