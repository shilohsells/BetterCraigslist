import React from 'react';
import { Edit3Icon, StarIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface HeaderProps {
  onCreatePostClick?: () => void;
  onFavoritesClick?: () => void;
}
export function Header({ onCreatePostClick, onFavoritesClick }: HeaderProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      transition={{
        duration: 0.5,
        delay: 0.2
      }}
      className="flex items-center justify-end gap-4 px-6 pt-4 pb-2">
      
      <div className="relative group">
        <button
          onClick={onCreatePostClick}
          className="text-gray-600 hover:text-purple-900 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-purple-50">
          
          <Edit3Icon size={22} />
        </button>
        <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
          Create Post
        </div>
      </div>

      <div className="relative group">
        <button
          onClick={onFavoritesClick}
          className="text-gray-600 hover:text-yellow-500 transition-all duration-200 hover:scale-110 p-2 rounded-lg hover:bg-yellow-50">
          
          <StarIcon size={22} />
        </button>
        <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
          Favorites
        </div>
      </div>
    </motion.div>);

}