// src/components/ship/ShipSelector.tsx
import React from 'react';
import { useState } from 'react';

export const ShipSelector = () => {
  const [selectedShip, setSelectedShip] = useState('');
  
  const shipTypes = [
    { id: 'frigate', name: 'Frigate' },
    { id: 'destroyer', name: 'Destroyer' },
    { id: 'cruiser', name: 'Cruiser' }
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl mb-4">Select Ship Type</h2>
      <select 
        value={selectedShip}
        onChange={(e) => setSelectedShip(e.target.value)}
        className="w-full p-2 border rounded"
      >
        <option value="">Select a ship type...</option>
        {shipTypes.map(ship => (
          <option key={ship.id} value={ship.id}>
            {ship.name}
          </option>
        ))}
      </select>
    </div>
  );
};