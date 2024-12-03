import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface PreviousEventProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  attendees: number;
}

export const PreviousEvent: React.FC<PreviousEventProps> = ({
  title,
  date,
  location,
  description,
  image,
  attendees,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
          {attendees}+ Attendees
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span>{location}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};