import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { LocationWidget } from './components/LocationWidget';
import { Homepage } from './components/Homepage';
import { CommunitiesPage } from './components/CommunitiesPage';
import { CategoryPage } from './components/CategoryPage';
import { ListingDetail } from './components/ListingDetail';
import { CreatePostModal } from './components/CreatePostModal';
import { FavoritesPage } from './components/FavoritesPage';
import { listings, Listing } from './data/listings';
import { SearchBar } from './components/SearchBar';
export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [allListings, setAllListings] = useState<Listing[]>(listings);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);
  const handleNavigate = (view: string) => {
    setCurrentView(view);
    setSelectedListing(null);
    setSearchQuery('');
    setFilterOpen(false);
  };
  const handleToggleExpand = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };
  const handleSubcategoryClick = (subcategory: string | null) => {
    setActiveSubcategory(subcategory);
  };
  const handleItemClick = (item: Listing) => {
    setSelectedListing(item);
  };
  const handleToggleFavorite = (id: number) => {
    setFavorites((prev) =>
    prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const handleCreatePost = (postData: any) => {
    const newListing: Listing = {
      id: Date.now(),
      title: postData.title,
      description: postData.description,
      price: postData.price || undefined,
      location: postData.location,
      image:
      postData.image || `https://picsum.photos/seed/${Date.now()}/400/400`,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    }),
    keywords: generateKeywords(
      `${postData.title} ${postData.description}`),
      category: postData.category,
      subcategory: postData.subcategory
    };
    setAllListings([newListing, ...allListings]);
    setShowCreatePost(false);
    // Navigate to the new post's category and subcategory
    setExpandedCategory(postData.category);
    handleNavigate(postData.category);
    handleSubcategoryClick(postData.subcategory);
  };

  // genrate keywords for search
  const generateKeywords = (text: string) => {
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter((word) => word.length > 2);
};

  // Filter items by current category and optionally by subcategory
  const currentItems = allListings.filter((item) => {
    
  if (currentView !== 'search' && item.category !== currentView) return false;
  if (activeSubcategory && item.subcategory !== activeSubcategory) return false;

  const words = searchQuery
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  
  // if there's a search query, filter by it
  if (words.length === 0) return true;

  const searchableText = [
    item.title,
    item.description,
    item.location,
    item.category,
    item.subcategory,
    ...(item.keywords || [])
  ]
    .join(' ')
    .toLowerCase();

  return words.every((word) => searchableText.includes(word));
});

/* search function for home search bar */
const handleHomepageSearchSubmit = () => {
  const trimmedQuery = searchQuery.trim();

  if (!trimmedQuery) return;

  setSelectedListing(null);
  setActiveSubcategory(null);
  setExpandedCategory(null);
  setCurrentView('search'); 
  setFilterOpen(false);
};

  return (
    <div className="min-h-screen w-full bg-[#f0ede8] flex overflow-hidden">
      <Sidebar
        currentView={currentView}
        onNavigate={handleNavigate}
        expandedCategory={expandedCategory}
        onToggleExpand={handleToggleExpand}
        activeSubcategory={activeSubcategory}
        onSubcategoryClick={handleSubcategoryClick} />
      

      <div className="flex-1 bg-[#f0ede8] overflow-hidden flex flex-col">
        <Header
          onCreatePostClick={() => setShowCreatePost(true)}
          onFavoritesClick={() => handleNavigate('favorites')} />
        

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {selectedListing ?
            <ListingDetail
              key="detail"
              listing={selectedListing}
              onBack={() => setSelectedListing(null)}
              isFavorite={favorites.includes(selectedListing.id)}
              onToggleFavorite={handleToggleFavorite} /> :

            currentView === 'home' ?
            <Homepage
              key="home"
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearchSubmit={handleHomepageSearchSubmit}/> :

            currentView === 'favorites' ?
            <FavoritesPage
              key="favorites"
              favorites={favorites}
              allListings={allListings}
              onItemClick={handleItemClick}
              onToggleFavorite={handleToggleFavorite} /> :
              
            // search results page w/ search bar at top
            currentView === 'search' ? (
              <div className="px-12 py-10">
                <div className="mb-10">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onSubmit={handleHomepageSearchSubmit}
                    showFilter={false}
                  />
                </div>

                <h1
                  className="text-6xl text-[#7b64b0] font-bold mb-3"
                  style={{ fontFamily: "'Raleway', serif" }}
                >
                  Search Results
                </h1>

                <p className="text-gray-600 mb-8">
                  {currentItems.length} result{currentItems.length !== 1 ? 's' : ''} for "{searchQuery}"
                </p>

                {currentItems.length === 0 ? (
                  <p className="text-gray-500">No matching posts found.</p>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {currentItems.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleItemClick(item)}
                        className="cursor-pointer"
                      >
                        {item.image && (
                          <div className="relative">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full aspect-square object-cover rounded-2xl"
                            />
                            {item.price && (
                              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold text-[#7B64B0] shadow-sm">
                                {item.price}
                              </div>
                            )}
                          </div>
                        )}

                        <h3 className="mt-3 text-lg italic text-[#7b64b0]">
                          {item.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          {item.category} • {item.location}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) :

            currentView === 'communities' ?
            <CommunitiesPage
              key={`communities-${activeSubcategory}`}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterOpen={filterOpen}
              onToggleFilter={() => setFilterOpen(!filterOpen)}
              items={currentItems}
              onItemClick={handleItemClick} /> :


            <CategoryPage
              key={`${currentView}-${activeSubcategory}`}
              category={currentView}
              items={currentItems}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              filterOpen={filterOpen}
              onToggleFilter={() => setFilterOpen(!filterOpen)}
              onItemClick={handleItemClick}
              favorites={favorites}
              onToggleFavorite={handleToggleFavorite} />

            }
          </AnimatePresence>
        </div>
      </div>

      <LocationWidget />

      <CreatePostModal
        isOpen={showCreatePost}
        onClose={() => setShowCreatePost(false)}
        onSubmit={handleCreatePost} />
      
    </div>);

}