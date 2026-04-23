import React from 'react';
import { motion } from 'framer-motion';
import { Listing } from '../data/listings';
import {
  MapPinIcon,
  BriefcaseIcon,
  UserIcon,
  MessageSquareIcon,
  StarIcon,
  Trash2Icon } from
'lucide-react';
interface FavoritesPageProps {
  favorites: number[];
  allListings: Listing[];
  onItemClick: (item: Listing) => void;
  onToggleFavorite: (id: number) => void;
}
export function FavoritesPage({
  favorites,
  allListings,
  onItemClick,
  onToggleFavorite
}: FavoritesPageProps) {
  const favoriteItems = allListings.filter((item) =>
  favorites.includes(item.id)
  );
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
        className="text-6xl italic text-[#7b64b0] mb-10 tracking-wide font-bold"
        style={{
          fontFamily: "'Playfair Display', serif"
        }}>
        
        Favorites
      </motion.h2>

      {favoriteItems.length === 0 ?
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
          <StarIcon size={64} className="mb-4 text-gray-300" />
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            No favorites yet
          </h3>
          <p>Click the star icon on any listing to save it here.</p>
        </div> :

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favoriteItems.map((item, index) =>
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
          className="bg-white border border-gray-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group relative">
          
              {/* Remove Favorite Button */}
              <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(item.id);
            }}
            className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full text-yellow-500 hover:text-red-500 hover:bg-red-50 transition-colors shadow-sm"
            title="Remove from favorites">
            
                <StarIcon size={18} className="fill-current" />
              </button>

              <div
            className="cursor-pointer flex flex-col flex-1"
            onClick={() => onItemClick(item)}>
            
                {item.image && item.category !== 'resumes' &&
            <div className="h-48 overflow-hidden relative">
                    <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
                    {(item.price || item.metadata?.salary) &&
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#7b64b0] shadow-sm">
                        {item.price || item.metadata?.salary}
                      </div>
              }
                  </div>
            }

                {item.category === 'resumes' &&
            <div className="h-24 bg-purple-100 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border-2 border-purple-200">
                      <UserIcon size={32} className="text-purple-400" />
                    </div>
                  </div>
            }

                {item.category === 'discussion' &&
            <div className="h-24 bg-blue-50 flex items-center justify-center">
                    <MessageSquareIcon size={32} className="text-blue-400" />
                  </div>
            }

                <div className="p-4 flex flex-col flex-1">
                  <div className="text-xs font-medium text-purple-600 mb-1 capitalize">
                    {item.category} • {item.subcategory}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#7b64b0] transition-colors">
                    {item.title}
                  </h3>

                  {(item.category === 'jobs' ||
              item.category === 'resumes') &&
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
            </motion.div>
        )}
        </div>
      }
    </motion.div>);

}