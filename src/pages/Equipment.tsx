import React, { useState } from 'react';
import RentalModal from '../components/RentalModal';

interface EquipmentItem {
  name: string;
  description: string;
  price: string;
  image: string;
}

interface CategoryItem {
  category: string;
  items: EquipmentItem[];
}

const equipmentList: CategoryItem[] = [
  {
    category: 'Sound Systems',
    items: [
      {
        name: 'Professional PA System',
        description: 'Complete PA system suitable for venues up to 500 people',
        price: '$500/day',
        image: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0',
      },
      {
        name: 'DJ Equipment Set',
        description: 'Professional DJ controller, monitors, and mixer',
        price: '$300/day',
        image: 'https://images.unsplash.com/photo-1461784180009-21121b2f204c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ],
  },
  {
    category: 'Lighting',
    items: [
      {
        name: 'LED Par Lights Set',
        description: 'Set of 8 LED par lights with controller',
        price: '$200/day',
        image: 'https://images.unsplash.com/photo-1504509546545-e000b4a62425',
      },
      {
        name: 'Moving Head Lights',
        description: 'Professional moving head lights for dynamic effects',
        price: '$150/day',
        image: 'https://images.unsplash.com/photo-1558985590-e84f133009b2',
      },
    ],
  },
];

export const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState<(EquipmentItem & { category: string }) | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleRentClick = (item: EquipmentItem, category: string) => {
    setSelectedEquipment({ ...item, category });
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Equipment Rental</h1>
        {equipmentList.map((category) => (
          <div key={category.category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-purple-600 font-semibold">
                        {item.price}
                      </span>
                      <button
                        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                        onClick={() => handleRentClick(item, category.category)}
                      >
                        Rent Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedEquipment && (
        <RentalModal
          equipment={selectedEquipment}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};