import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, StarIcon, MapPinIcon, ClockIcon } from 'lucide-react';
import { Listing } from '../data/listings';
interface ListingDetailProps {
  listing: Listing;
  onBack: () => void;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}
export function ListingDetail({
  listing,
  onBack,
  isFavorite = false,
  onToggleFavorite
}: ListingDetailProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: -20
      }}
      transition={{
        duration: 0.3
      }}
      className="flex-1 flex flex-col px-12 py-8 h-full overflow-y-auto">
      
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-purple-900 hover:text-purple-700 transition-colors mb-6 w-fit font-medium">
        
        <ArrowLeftIcon size={20} />
        Back to {listing.category}
      </button>

      <div className="bg-white rounded-xl shadow-sm border border-gray-300 overflow-hidden flex flex-col md:flex-row">
        {/* Left Column - Image (if applicable) */}
        {listing.category !== 'discussion' &&
        <div className="md:w-1/2 lg:w-3/5 bg-gray-100 border-r border-gray-200">
            {listing.image ?
          <img
            src={listing.image}
            alt={listing.title}
            className="w-full h-[400px] md:h-full object-cover" /> :


          <div className="w-full h-[400px] md:h-full flex items-center justify-center text-gray-400">
                No Image Available
              </div>
          }
          </div>
        }

        {/* Right Column - Details */}
        <div
          className={`p-8 flex flex-col ${listing.category === 'discussion' ? 'w-full' : 'md:w-1/2 lg:w-2/5'}`}>
          
          <div className="flex justify-between items-start mb-4">
            <h2
              className="text-3xl font-bold text-gray-900 leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif"
              }}>
              
              {listing.title}
            </h2>
            <button
              onClick={() => onToggleFavorite && onToggleFavorite(listing.id)}
              className={`transition-colors flex-shrink-0 ml-4 p-2 rounded-full hover:bg-gray-100 ${isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}>
              
              <StarIcon
                size={28}
                className={isFavorite ? 'fill-current' : ''} />
              
            </button>
          </div>

          {(listing.price || listing.metadata?.salary) &&
          <div className="text-2xl font-semibold text-purple-900 mb-6">
              {listing.price || listing.metadata?.salary}
            </div>
          }

          <div className="flex flex-col gap-3 text-sm text-gray-600 mb-8 pb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <MapPinIcon size={16} />
              {listing.location}
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon size={16} />
              Posted {listing.date}
            </div>
            {listing.metadata?.company &&
            <div className="font-medium text-gray-900 mt-2">
                Company: {listing.metadata.company}
              </div>
            }
            {listing.metadata?.jobType &&
            <div className="inline-block bg-purple-100 text-purple-900 px-2 py-1 rounded text-xs font-medium w-fit mt-1">
                {listing.metadata.jobType}
              </div>
            }
            {listing.metadata?.experience &&
            <div className="font-medium text-gray-900 mt-2">
                Experience: {listing.metadata.experience}
              </div>
            }
            {listing.metadata?.bedrooms !== undefined &&
            <div className="font-medium text-gray-900 mt-2">
                Bedrooms:{' '}
                {listing.metadata.bedrooms === 0 ?
              'Studio' :
              listing.metadata.bedrooms}
              </div>
            }
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {listing.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col gap-3">
            <button className="w-full bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800 transition-colors font-medium shadow-sm hover:shadow-md">
              Reply to Poster
            </button>
            <div className="text-center text-xs text-gray-500 mt-2">
              Contact: user-{listing.id}@craigslist-clone.org
            </div>
          </div>
        </div>
      </div>
    </motion.div>);

}