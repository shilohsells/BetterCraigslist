import React from 'react';
import { SearchIcon, FilterIcon } from 'lucide-react';
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onToggleFilter?: () => void;
  showFilter?: boolean;
}
export function SearchBar({
  value,
  onChange,
  onToggleFilter,
  showFilter = false
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 flex items-center gap-3 bg-white border-2 border-gray-300 px-5 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-200 focus-within:border-purple-900 focus-within:ring-2 focus-within:ring-purple-200">
        <SearchIcon size={20} className="text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search Craigslist..."
          className="flex-1 outline-none bg-transparent text-gray-900 placeholder-gray-400" />
        
      </div>

      {showFilter &&
      <button
        onClick={onToggleFilter}
        className="flex flex-col items-center gap-1 text-gray-600 hover:text-purple-900 transition-all duration-200 hover:scale-105 px-3">
        
          <FilterIcon size={22} />
          <span className="text-xs font-medium">filter</span>
        </button>
      }
    </div>);

}