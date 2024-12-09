// src/App.tsx
import React from 'react';
import { ShipSelector } from './components/ship/ShipSelector';
import { DamageCalculator } from './components/damage/DamageCalculator';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-navy-600 text-white p-4">
        <h1 className="text-2xl">Naval Damage Calculator</h1>
      </header>
      <main className="container mx-auto p-4">
        <ShipSelector />
        <DamageCalculator />
      </main>
    </div>
  );
};

export default App;