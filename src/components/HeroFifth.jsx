'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const cities = [
  { name: 'Singapore', tz: 'Asia/Singapore'},
  { name: 'Lagos', tz: 'Africa/Lagos'},
  { name: 'London', tz: 'Europe/London'},
  { name: 'Lomé', tz: 'Africa/Lome'},
  { name: 'New York', tz: 'America/New_York'},
];

const getTimeInTZ = (tz) => {
  const now = new Date();
  const localTime = now.toLocaleString('en-US', { timeZone: tz });
  return new Date(localTime);
};

const ClockFace = ({ time }) => {
  const sec = time.getSeconds();
  const min = time.getMinutes();
  const hour = time.getHours() % 12;

  const hourDeg = (hour + min / 60) * 30;
  const minDeg = (min + sec / 60) * 6;
  const secDeg = sec * 6;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="relative w-30 h-30 rounded-full border-4 border-white bg-gray-800">
      {numbers.map((num) => {
        const angle = ((num - 3) * 30 * Math.PI) / 180;
        const x = 50 + 42 * Math.cos(angle);
        const y = 50 + 42 * Math.sin(angle);

        return (
          <span
            key={num}
            className="absolute text-white text-sm font-bold"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            {num}
          </span>
        );
      })}

      {/* Clock Hands */}
      <div
        className="absolute w-0.5 h-5.5 bg-white origin-bottom left-1/2 top-[30%]"
        style={{ transform: `translateX(-50%) rotate(${hourDeg}deg)` }}
      />
      <div
        className="absolute w-0.5 h-8 bg-green-400 origin-bottom left-1/2 top-[20%]"
        style={{ transform: `translateX(-50%) rotate(${minDeg}deg)` }}
      />
      <div
        className="absolute w-0.5 h-10 bg-red-500 origin-bottom left-1/2 top-[10%]"
        style={{ transform: `translateX(-50%) rotate(${secDeg}deg)` }}
      />
      <div className="absolute w-3 h-3 bg-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
    </div>
  );
};

const AnalogClock = ({ name, tz, flag }) => {
  const [time, setTime] = useState(getTimeInTZ(tz));
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeInTZ(tz)), 1000);
    return () => clearInterval(interval);
  }, [tz]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=740a38e58a47f15092d4a7e908204845`
        );
        const data = await res.json();
        if (data?.weather?.[0]?.description) {
          setWeather(data.weather[0].description);
        } else {
          setWeather('Unavailable');
        }
      } catch (err) {
        console.error('Weather fetch error:', err);
        setWeather('Unavailable');
      }
    };

    fetchWeather();
  }, [name]);

  const isDay = time.getHours() >= 6 && time.getHours() < 18;
  const dateStr = time.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="p-4 rounded-xl shadow-lg w-60 flex flex-col items-center">
      <div className="flex items-center justify-between w-full text-2xl mb-2">
        <span>{flag}</span>
        {isDay ? (
          <Sun className="text-yellow-400 w-5 h-5" />
        ) : (
          <Moon className="text-blue-400 w-5 h-5" />
        )}
      </div>
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <ClockFace time={time} />
      <p className="mt-3 font-semibold">
        {dateStr} </p>
      <p className='font-medium'>  {weather && ` 🌤️ ${weather.charAt(0).toUpperCase() + weather.slice(1)}`}
      </p>
    </div>
  );
};

const AnalogClockGrid = () => {
  return (
    <div>
      <h1 className="lg:text-3xl font-bold text-center text-black mt-2 mb-3">🌧️ Report</h1>
<div className="overflow-x-auto md:overflow-x-visible whitespace-nowrap flex lg:flex-nowrap gap-6 p-6">
  {cities.map((city) => (
    <div key={city.name} className="inline-block md:flex-shrink-0">
      <AnalogClock {...city} />
    </div>
  ))}
</div>
</div>
  );
};

export default AnalogClockGrid;
