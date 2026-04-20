import React from 'react';
import { motion } from 'framer-motion';
interface CommunityItem {
  id: number;
  title: string;
  image?: string;
}
interface CommunityGridProps {
  items: CommunityItem[];
  searchQuery: string;
  onItemClick?: (item: any) => void;
}
export function CommunityGrid({
  items,
  searchQuery,
  onItemClick
}: CommunityGridProps) {
  const filteredItems = items.filter((item) =>
  item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="grid grid-cols-4 gap-6">
      {filteredItems.map((item, index) =>
      <motion.div
        key={item.id}
        onClick={() => onItemClick && onItemClick(item)}
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
        className="flex flex-col group cursor-pointer">
        
          <div className="aspect-square bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm group-hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
            <img
            src={item.image || 'https://picsum.photos/400/400'}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
          
          </div>
          <div className="mt-3 text-sm italic text-purple-900 font-medium group-hover:text-purple-950 transition-colors">
            {item.title}
          </div>
        </motion.div>
      )}
    </div>);

}