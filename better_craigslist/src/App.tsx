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
  // Filter items by current category and optionally by subcategory
  const currentItems = allListings.filter((item) => {
    if (item.category !== currentView) return false;
    if (activeSubcategory && item.subcategory !== activeSubcategory)
    return false;
    return true;
  });
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
              onSearchChange={setSearchQuery} /> :

            currentView === 'favorites' ?
            <FavoritesPage
              key="favorites"
              favorites={favorites}
              allListings={allListings}
              onItemClick={handleItemClick}
              onToggleFavorite={handleToggleFavorite} /> :

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