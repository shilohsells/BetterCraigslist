import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchBar } from './SearchBar';
import { Listing } from '../data/listings';
import {
  MessageSquareIcon,
  MapPinIcon,
  BriefcaseIcon,
  UserIcon,
  StarIcon } from
'lucide-react';
interface CategoryPageProps {
  category: string;
  items: Listing[];
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterOpen: boolean;
  onToggleFilter: () => void;
  onItemClick: (item: Listing) => void;
  favorites?: number[];
  onToggleFavorite?: (id: number) => void;
}
export function CategoryPage({
  category,
  items,
  searchQuery,
  onSearchChange,
  filterOpen,
  onToggleFilter,
  onItemClick,
  favorites = [],
  onToggleFavorite
}: CategoryPageProps) {
  const filteredItems = items.filter(
    (item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const renderDiscussionList = () =>
  <div className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden">
      {filteredItems.map((item, index) => {
      const isFav = favorites.includes(item.id);
      return (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.3,
            delay: index * 0.05
          }}
          onClick={() => onItemClick(item)}
          className="p-5 border-b border-gray-200 last:border-b-0 hover:bg-purple-50 cursor-pointer transition-colors flex items-start justify-between group relative">
          
            {onToggleFavorite &&
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(item.id);
            }}
            className={`absolute top-5 right-16 p-2 rounded-full transition-colors z-10 ${isFav ? 'text-yellow-500' : 'text-gray-300 hover:text-yellow-500 hover:bg-white'}`}>
            
                <StarIcon size={18} className={isFav ? 'fill-current' : ''} />
              </button>
          }

            <div>
              <h3 className="text-lg font-semibold text-[#7B64B0] group-hover:text-purple-700 transition-colors mb-1 pr-12">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-1 pr-12">
                {item.description}
              </p>
              <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.location}</span>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center text-gray-400 group-hover:text-purple-600 transition-colors ml-4">
              <MessageSquareIcon size={20} className="mb-1" />
              <span className="text-xs font-medium">
                {item.metadata?.replies || 0}
              </span>
            </div>
          </motion.div>);

    })}
    </div>;

  const renderCardGrid = () =>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredItems.map((item, index) => {
      const isFav = favorites.includes(item.id);
      return (
        <motion.div
          key={item.id}
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.05
          }}
          className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col group relative">
          
            {onToggleFavorite &&
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(item.id);
            }}
            className={`absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full transition-colors shadow-sm ${isFav ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500 hover:bg-white'}`}>
            
                <StarIcon size={18} className={isFav ? 'fill-current' : ''} />
              </button>
          }

            <div
            className="cursor-pointer flex flex-col flex-1"
            onClick={() => onItemClick(item)}>
            
              {item.image && category !== 'resumes' &&
            <div className="h-48 overflow-hidden relative">
                  <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                  {(item.price || item.metadata?.salary) &&
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#7B64B0] shadow-sm">
                      {item.price || item.metadata?.salary}
                    </div>
              }
                </div>
            }

              {category === 'resumes' &&
            <div className="h-24 bg-purple-100 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-purple-200">
                    <UserIcon size={32} className="text-purple-400" />
                  </div>
                </div>
            }

              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#7B64B0] transition-colors pr-8">
                  {item.title}
                </h3>

                {(category === 'jobs' || category === 'resumes') &&
              <div className="flex items-center gap-2 text-xs text-gray-600 mb-3">
                    <BriefcaseIcon size={14} />
                    <span className="truncate">
                      {item.metadata?.company ||
                  item.metadata?.experience ||
                  'Professional'}
                    </span>
                  </div>
              }

                <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1 truncate max-w-[60%]">
                    <MapPinIcon size={12} className="flex-shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                  <span className="flex-shrink-0">{item.date}</span>
                </div>
              </div>
            </div>
          </motion.div>);

    })}
    </div>;

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
      className="flex-1 flex flex-col px-12 py-8 h-full overflow-y-auto">
      
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
                Filter Options
              </h4>
              <p className="text-sm text-gray-500">
                Filters for {category} coming soon...
              </p>
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
        className="text-6xl text-[#7B64B0] mb-10 tracking-wide font-bold capitalize"
        style={{
          fontFamily: "'Raleway', serif"
        }}>
        
        {category.replace('-', ' ')}
      </motion.h2>

      {category === 'discussion' ? renderDiscussionList() : renderCardGrid()}
    </motion.div>);

}