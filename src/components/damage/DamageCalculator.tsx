// src/components/damage/DamageCalculator.tsx
import React from 'react';

interface CasualtyBreakdown {
  dead: number;
  walkingWounded: number;
  lifeThreateningInjuries: number;
  majorNonLifeThreateningInjuries: number;
  severeBurns: number;
}

export const DamageCalculator = () => {
  // Sample data - we'll make this dynamic based on inputs later
  const casualties: CasualtyBreakdown = {
    dead: 15,
    walkingWounded: 23,
    lifeThreateningInjuries: 8,
    majorNonLifeThreateningInjuries: 12,
    severeBurns: 6
  };

  return (
    <div className="bg-white p-4 mt-4 rounded-lg shadow">
      <h2 className="text-xl mb-4">Casualty Estimate</h2>
      <div className="grid grid-cols-1 gap-4">
        <div className="border-b pb-2">
          <span className="font-semibold">KIA/Dead:</span>
          <span className="float-right">{casualties.dead}</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-semibold">Walking Wounded:</span>
          <span className="float-right">{casualties.walkingWounded}</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-semibold">Life-Threatening Injuries:</span>
          <span className="float-right">{casualties.lifeThreateningInjuries}</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-semibold">Major Non-Life-Threatening Injuries:</span>
          <span className="float-right">{casualties.majorNonLifeThreateningInjuries}</span>
        </div>
        <div className="border-b pb-2">
          <span className="font-semibold">Burns &gt;20% Body Area:</span>
          <span className="float-right">{casualties.severeBurns}</span>
        </div>
        <div className="mt-4 pt-2 border-t">
          <span className="font-bold">Total Casualties:</span>
          <span className="float-right font-bold">
            {Object.values(casualties).reduce((a, b) => a + b, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};