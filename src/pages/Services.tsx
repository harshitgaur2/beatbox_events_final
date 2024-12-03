import React from 'react';
import { Music, Speaker, Mic, PartyPopper } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Music className="h-12 w-12" />,
      title: 'Event Planning',
      description: 'Complete event planning and management services for any occasion.',
    },
    {
      icon: <Speaker className="h-12 w-12" />,
      title: 'Sound Systems',
      description: 'Professional audio equipment and setup for perfect sound quality.',
    },
    {
      icon: <Mic className="h-12 w-12" />,
      title: 'Live Performance',
      description: 'Coordination of live performances and artist management.',
    },
    {
      icon: <PartyPopper className="h-12 w-12" />,
      title: 'Theme Design',
      description: 'Custom theme design and decoration services for your event.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-purple-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-purple-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="mb-6">
            We offer tailored event management solutions to meet your specific needs.
            Contact us to discuss your event requirements.
          </p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};