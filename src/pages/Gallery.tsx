import React, { useState } from 'react';
import { X, Play } from 'lucide-react';

interface GalleryItem {
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  description: string;
  date: string;
  category: string;
}

interface ImageModalProps {
  item: GalleryItem;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ item, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-2 rounded-full bg-white hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="h-6 w-6 text-gray-500" />
        </button>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-2/3">
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-[500px] object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
          </div>
          <div className="p-6 w-full md:w-1/3">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-2">{item.date}</p>
            <p className="text-purple-600 mb-4">{item.category}</p>
            <p className="text-gray-700">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galleryItems: GalleryItem[] = [
    {
      type: 'image',
      src: 'https://img.100r.systems/img/5bdacb2f40523120bc4db1e42982f59a.jpg',
      title: 'Summer Music Festival',
      description: 'Annual summer music festival featuring top artists and our premium sound equipment',
      date: 'July 15, 2023',
      category: 'Festivals'
    },
    {
      type: 'video',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', // Example video URL
      thumbnail: '/api/placeholder/800/600',
      title: 'Corporate Event Setup',
      description: 'Behind the scenes of our professional setup for a major corporate event',
      date: 'September 3, 2023',
      category: 'Corporate'
    },
    {
      type: 'image',
      src: 'https://www.kalkifashion.com/blogs/wp-content/uploads/2023/02/An_Ultimate_Guide_To_Gujarati_Wedding_Traditions_Rituals__More.jpg',
      title: 'Wedding Ceremony',
      description: 'Elegant lighting and sound setup for a beautiful wedding ceremony',
      date: 'October 12, 2023',
      category: 'Weddings'
    },
    {
      type: 'video',
      src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', // Example video URL
      thumbnail: 'https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp',
      title: 'Live Concert Production',
      description: 'Full production setup for a live concert event',
      date: 'November 20, 2023',
      category: 'Concerts'
    },
    {
      type: 'image',
      src: 'https://www.signupgenius.com/cms/images/home/birthday-party-theme-ideas-article-600x400.jpg',
      title: 'Birthday Party',
      description: 'Colorful lighting and DJ setup for a milestone birthday celebration',
      date: 'December 5, 2023',
      category: 'Private Events'
    },
    {
      type: 'image',
      src: 'https://www.whitworth.edu/cms/media/whitworth/images/academics/theatre/theatre-department-hero-1.jpg',
      title: 'Theater Performance',
      description: 'Professional lighting design for a local theater production',
      date: 'January 15, 2024',
      category: 'Theater'
    }
  ];

  const handleItemClick = (item: GalleryItem) => {
    if (item.type === 'image') {
      setSelectedItem(item);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Event Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              {item.type === 'video' ? (
                <div className="relative">
                  <video
                    className="w-full h-64 object-cover"
                    controls
                    poster={item.thumbnail}
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.date}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="cursor-pointer"
                  onClick={() => handleItemClick(item)}
                >
                  <div className="relative">
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.date}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <ImageModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Gallery;