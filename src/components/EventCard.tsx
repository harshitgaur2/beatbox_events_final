import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  time: string;
  image: string;
  category: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  location,
  time,
  image,
  category,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-purple-600 bg-purple-100 rounded-full mb-2">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="space-y-2 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};