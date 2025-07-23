import React, { useState } from 'react';
import { Search, Filter, Calendar, School, Users } from 'lucide-react';

const GalleryPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Photos', count: 156 },
    { id: 'sports', name: 'Sports Events', count: 45 },
    { id: 'academic', name: 'Academic Events', count: 38 },
    { id: 'graduation', name: 'Graduations', count: 23 },
    { id: 'field-trips', name: 'Field Trips', count: 32 },
    { id: 'performances', name: 'Performances', count: 18 },
  ];

  const photos = [
    { id: 1, title: 'Science Fair Winners', school: 'Lincoln Elementary', date: '2024-03-15', category: 'academic', image: 'https://images.pexels.com/photos/8613059/pexels-photo-8613059.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 2, title: 'Basketball Championship', school: 'Jefferson High', date: '2024-03-12', category: 'sports', image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 3, title: 'Spring Concert', school: 'Roosevelt Middle', date: '2024-03-10', category: 'performances', image: 'https://images.pexels.com/photos/7606068/pexels-photo-7606068.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 4, title: 'Museum Field Trip', school: 'Washington Academy', date: '2024-03-08', category: 'field-trips', image: 'https://images.pexels.com/photos/8363026/pexels-photo-8363026.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 5, title: 'Class of 2024 Graduation', school: 'Central High', date: '2024-05-20', category: 'graduation', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 6, title: 'Art Exhibition', school: 'Westside Elementary', date: '2024-03-05', category: 'academic', image: 'https://images.pexels.com/photos/8613087/pexels-photo-8613087.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 7, title: 'Soccer Team Victory', school: 'Lincoln Elementary', date: '2024-03-03', category: 'sports', image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 8, title: 'Theater Performance', school: 'Jefferson High', date: '2024-03-01', category: 'performances', image: 'https://images.pexels.com/photos/7148390/pexels-photo-7148390.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 9, title: 'Robotics Competition', school: 'Roosevelt Middle', date: '2024-02-28', category: 'academic', image: 'https://images.pexels.com/photos/8613102/pexels-photo-8613102.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 10, title: 'Zoo Field Trip', school: 'Washington Academy', date: '2024-02-25', category: 'field-trips', image: 'https://images.pexels.com/photos/8363028/pexels-photo-8363028.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 11, title: 'Swimming Championships', school: 'Central High', date: '2024-02-22', category: 'sports', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { id: 12, title: 'Winter Concert', school: 'Westside Elementary', date: '2024-02-20', category: 'performances', image: 'https://images.pexels.com/photos/7606071/pexels-photo-7606071.jpeg?auto=compress&cs=tinysrgb&w=400' },
  ];

  const filteredPhotos = photos.filter(photo => {
    const matchesFilter = selectedFilter === 'all' || photo.category === selectedFilter;
    const matchesSearch = photo.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         photo.school.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Photo Gallery</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore moments of joy, achievement, and growth from schools across our network
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search photos or schools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedFilter(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedFilter === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
              <div className="relative overflow-hidden">
                <img 
                  src={photo.image} 
                  alt={photo.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity"></div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2 line-clamp-2">{photo.title}</h3>
                
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-slate-500">
                    <School className="h-4 w-4 mr-2" />
                    <span>{photo.school}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{new Date(photo.date).toLocaleDateString()}</span>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-slate-100">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                    {categories.find(c => c.id === photo.category)?.name || 'Other'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-600 mb-2">No photos found</h3>
            <p className="text-slate-500">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredPhotos.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Load More Photos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;