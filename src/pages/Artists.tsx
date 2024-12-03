import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { BookingModal } from '../components/BookingModal';

const artists = [
  {
    name: 'DJ Pulse',
    genre: 'Electronic/House',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1601643157091-ce5c665179ab',
    bio: 'Internationally acclaimed DJ with over 10 years of experience.',
  },
  {
    name: 'The Groove Band',
    genre: 'Jazz/Funk',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    bio: 'Five-piece band bringing soul and energy to any event.',
  },
  {
    name: 'Sarah Voice',
    genre: 'Pop/Soul',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    bio: 'Versatile vocalist perfect for weddings and corporate events.',
  },
];

export const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState<typeof artists[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookNow = (artist: typeof artists[0]) => {
    setSelectedArtist(artist);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Featured Artists</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{artist.name}</h2>
                <p className="text-purple-600 mb-2">{artist.genre}</p>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2">{artist.rating}/5.0</span>
                </div>
                <p className="text-gray-600 mb-4">{artist.bio}</p>
                <button
                  onClick={() => handleBookNow(artist)}
                  className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedArtist && (
          <BookingModal
            artist={selectedArtist}
            isOpen={isModalOpen}
            onClose={() => {
              setIsModalOpen(false);
              setSelectedArtist(null);
            }}
          />
        )}
      </div>
    </div>
  );
};