import React, { useState } from 'react';
import { Heart, Thermometer, Moon, Pizza, Stethoscope, Pill } from 'lucide-react';

const PeddyGame = () => {
  const [happiness, setHappiness] = useState(30);
  const [health, setHealth] = useState(20);
  const [energy, setEnergy] = useState(40);
  const [hunger, setHunger] = useState(60);
  const [needsDoctor, setNeedsDoctor] = useState(true);
  const [message, setMessage] = useState('Oh no! Peddy non si sente molto bene oggi... Puoi aiutarlo?');

  const handleCare = (type) => {
    switch(type) {
      case 'love':
        setHappiness(prev => Math.min(100, prev + 20));
        setMessage('Un grande abbraccio fa sentire Peddy molto meglio! 💝');
        break;
      case 'medicine':
        setHealth(prev => Math.min(100, prev + 20));
        setMessage('Bravx! Hai dato la medicina a Peddy! 💊');
        break;
      case 'sleep':
        setEnergy(prev => Math.min(100, prev + 20));
        setMessage('Ssh... Peddy sta riposando! 😴');
        break;
      case 'food':
        setHunger(prev => Math.min(100, prev + 20));
        setMessage('Che buona questa pappa! 🍯');
        break;
      case 'doctor':
        setHealth(prev => Math.min(100, prev + 30));
        setNeedsDoctor(false);
        setMessage('Il pediatra ha visitato Peddy! Ora starà meglio 👨‍⚕️');
        break;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-blue-50 rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-2">
        Peddy non si sente bene
      </h1>
      <p className="text-center text-gray-600 mb-6">Aiutalo a guarire!</p>

      {/* Peddy Display */}
      <div className="flex justify-center mb-6">
        <div className="relative w-48 h-48 bg-amber-100 rounded-full flex items-center justify-center shadow-inner">
          <span className="text-7xl">🧸</span>
          {health < 50 && <span className="absolute top-0 right-0 text-2xl">🤒</span>}
        </div>
      </div>

      {/* Status Message */}
      <div className="text-center mb-6 text-lg font-medium text-blue-700 bg-white p-4 rounded-lg shadow-sm">
        {message}
      </div>

      {/* Status Bars */}
      <div className="space-y-4 mb-6">
        <div>
          <div className="flex items-center mb-1">
            <Heart className="w-4 h-4 text-red-500 mr-2" />
            <span>Felicità di Peddy</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-red-500 rounded-full h-2.5 transition-all duration-500"
              style={{ width: `${happiness}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <Thermometer className="w-4 h-4 text-green-500 mr-2" />
            <span>Salute</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-green-500 rounded-full h-2.5 transition-all duration-500"
              style={{ width: `${health}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <Moon className="w-4 h-4 text-blue-500 mr-2" />
            <span>Energia</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-blue-500 rounded-full h-2.5 transition-all duration-500"
              style={{ width: `${energy}%` }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center mb-1">
            <Pizza className="w-4 h-4 text-orange-500 mr-2" />
            <span>Fame</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-orange-500 rounded-full h-2.5 transition-all duration-500"
              style={{ width: `${hunger}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {needsDoctor && (
          <button
            onClick={() => handleCare('doctor')}
            className="col-span-2 p-4 bg-purple-100 rounded-lg hover:bg-purple-200 transition-colors flex items-center justify-center gap-2"
          >
            <Stethoscope className="w-5 h-5" />
            Chiama il Pediatra 👨‍⚕️
          </button>
        )}
        <button
          onClick={() => handleCare('love')}
          className="p-4 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
        >
          Abbraccia Peddy ❤️
        </button>
        <button
          onClick={() => handleCare('medicine')}
          className="p-4 bg-green-100 rounded-lg hover:bg-green-200 transition-colors flex items-center justify-center gap-2"
        >
          <Pill className="w-4 h-4" />
          Dai la Medicina
        </button>
        <button
          onClick={() => handleCare('sleep')}
          className="p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
        >
          Fai riposare Peddy 😴
        </button>
        <button
          onClick={() => handleCare('food')}
          className="p-4 bg-orange-100 rounded-lg hover:bg-orange-200 transition-colors"
        >
          Dai la Pappa 🍯
        </button>
      </div>
    </div>
  );
};

export default PeddyGame;
