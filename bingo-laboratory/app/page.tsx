'use client';
import { useState } from 'react';

export default function Home() {
  const [clicked, setClicked] = useState<boolean[]>(new Array(25).fill(false));
  
  const handleClick = (index: number) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Interactive Bingo!</h1>
      <div className="grid grid-cols-5 gap-3 max-w-md mx-auto">
        {Array.from({length: 25}, (_, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            className={`p-4 text-center rounded transition-all ${
              clicked[i] 
                ? 'bg-green-500 text-white transform scale-110' 
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
          >
            Item {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}