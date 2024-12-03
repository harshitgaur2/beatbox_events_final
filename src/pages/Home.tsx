import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { EventCard } from '../components/EventCard';
import { PreviousEvent } from '../components/PreviousEvent';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

const events = [
  {
    id: 1,
    title: 'Summer Music Festival',
    date: 'July 15, 2024',
    location: 'Central Park',
    time: '2:00 PM',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    category: 'Music Festival',
  },
  {
    id: 2,
    title: 'Electronic Dance Night',
    date: 'June 20, 2024',
    location: 'Club Matrix',
    time: '10:00 PM',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7',
    category: 'Night Club',
  },
  {
    id: 3,
    title: 'Jazz in the Garden',
    date: 'August 5, 2024',
    location: 'Botanical Gardens',
    time: '6:00 PM',
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629',
    category: 'Jazz',
  },
];

const previousEvents = [
  {
    title: 'Tech Conference 2023',
    date: 'November 15, 2023',
    location: 'Convention Center',
    description: 'A spectacular tech conference featuring industry leaders and innovative presentations.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    attendees: 2000,
  },
  {
    title: 'New Year Gala',
    date: 'December 31, 2023',
    location: 'Grand Hotel',
    description: 'An elegant New Year celebration with live performances and gourmet dining.',
    image: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e',
    attendees: 500,
  },
  {
    title: 'Summer Beach Festival',
    date: 'August 20, 2023',
    location: 'Sunset Beach',
    description: 'A vibrant beach festival featuring top DJs and amazing food vendors.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3',
    attendees: 3000,
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Corporate Event Manager',
    comment: 'BeatBox Events transformed our annual conference into an unforgettable experience. Their attention to detail and professional service exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    role: 'Wedding Planner',
    comment: 'Working with BeatBox Events was a dream. They brought our clients\' vision to life with their creative solutions and exceptional event management.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Festival Organizer',
    comment: 'The team at BeatBox Events are true professionals. Their equipment and technical expertise made our festival run smoothly from start to finish.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = events.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-5xl font-bold mb-4">BeatBox Events</h1>
          <p className="text-xl mb-8">Creating Unforgettable Experiences</p>
          <SearchBar onSearch={setSearchQuery} />
        </div>
      </div>

      {/* Events Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>

      {/* Previous Events Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Previous Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousEvents.map((event, index) => (
              <PreviousEvent key={index} {...event} />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </div>
  );
};