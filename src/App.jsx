import React, { useState, useEffect } from 'react';
import { Sparkles, Ghost, Flame, PartyPopper } from 'lucide-react';
import './index.css';
import huTao1 from './assets/hutao1.png';
import huTao2 from './assets/hutao2.png';
import huTao3 from './assets/hutao3.png';

export default function BirthdayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [mounted, setMounted] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const targetDate = new Date('2025-11-18T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
        setIsBirthday(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsBirthday(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const phrases = [
    "The 77th Director of the Wangsheng Funeral Parlor wishes Leo a happy birthday!",
    "O-ya? O-ya-ya-ya? a birthday boy ? hmmmmmmm..., now how could it be ? 👀",
    "Aiya~ Leo's getting older! Time to prepare a 50% off coupon! Just kidding~",
    "May your birthday be as lively as Hu Tao's spirit!",
    "One happy Leo, Two happy Leos, Three Happy Leos !!! 🦋"
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const phraseTimer = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);
    return () => clearInterval(phraseTimer);
  }, [phrases.length]);

  if (!mounted) return null;

  const images = [huTao1, huTao2, huTao3];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-orange-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating ghosts */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`ghost-${i}`}
            className="absolute text-6xl opacity-10 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            👻
          </div>
        ))}
        
        {/* Butterflies */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`butterfly-${i}`}
            className="absolute text-4xl opacity-20 animate-butterfly"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            🦋
          </div>
        ))}

        {/* Glowing orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        {/* Main card */}
        <div className="bg-gradient-to-br from-red-950/80 via-slate-900/80 to-orange-950/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-orange-500/20 overflow-hidden">
          {/* Header with glow effect */}
          <div className="relative p-8 border-b border-orange-500/20">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-orange-600/10 to-red-600/10"></div>
            <div className="relative text-center">
              <div className="flex items-center justify-center gap-4 mb-3">
                <Ghost className="w-10 h-10 text-orange-400 animate-bounce" />
                <h1 className="text-6xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent">
                  Leo's Birthday
                </h1>
                <Flame className="w-10 h-10 text-red-400 animate-pulse" />
              </div>
              <p className="text-orange-300/80 text-lg flex items-center justify-center gap-2">
                <Sparkles className="w-5 h-5" />
                A gift, To Hu Tao's biggest fan
                <Sparkles className="w-5 h-5" />
              </p>
            </div>
          </div>

          {/* Countdown section */}
          <div className="p-8">
            {!isBirthday ? (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(timeLeft).map(([unit, value], index) => (
                    <div 
                      key={unit} 
                      className="relative group"
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                      <div className="relative bg-gradient-to-br from-slate-900 to-red-950 rounded-2xl p-6 border border-orange-500/30 shadow-xl transform hover:scale-105 transition-all duration-300">
                        <div className="text-6xl md:text-7xl font-black bg-gradient-to-br from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                          {String(value).padStart(2, '0')}
                        </div>
                        <div className="text-orange-300 uppercase text-sm tracking-widest font-semibold">
                          {unit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rotating phrases */}
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-slate-900/50 to-red-950/50 rounded-2xl p-8 border border-orange-500/20 backdrop-blur-sm min-h-[120px] flex items-center justify-center">
                    <p className="text-orange-100 text-2xl text-center font-medium transition-all duration-500 animate-fadeIn">
                      {phrases[currentPhrase]}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <PartyPopper className="w-24 h-24 mx-auto mb-6 text-orange-400 animate-bounce" />
                <h2 className="text-6xl font-black bg-gradient-to-r from-orange-400 via-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  🎉 HAPPY BIRTHDAY LEO! 🎉
                </h2>
                <p className="text-orange-200 text-2xl">
                  Hope your day is as amazing as you are!
                </p>
              </div>
            )}

            {/* Hu Tao images grid */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {images.map((image, i) => (
                <div
                  key={i}
                  className="relative aspect-square group overflow-hidden rounded-xl"
                >
                  <img 
                    src={image} 
                    alt={`Hu Tao ${i + 1}`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-600/20 group-hover:from-orange-500/10 group-hover:to-red-600/10 transition-all duration-300"></div>
                  <div className="absolute inset-0 border-2 border-orange-500/30 group-hover:border-orange-400/60 rounded-xl transition-all duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center">
              <div className="inline-block relative group mb-4">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-orange-600 to-red-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl border-2 border-orange-400 transform group-hover:scale-105 transition-transform">
                  🎂 Happy Birthday Leo! 🎂
                </div>
              </div>
              <p className="text-orange-300/70 text-base italic">
                "Tonight the stars are dazzling and the moon majestic, it must be a special day... But just what day could it be... Haha, I know, I know! It's your birthday! It really is a great day."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="mt-6 flex justify-center gap-6 text-5xl">
          <span className="animate-bounce" style={{animationDelay: '0s'}}>🦋</span>
          <span className="animate-bounce" style={{animationDelay: '0.2s'}}>🌸</span>
          <span className="animate-bounce" style={{animationDelay: '0.4s'}}>🔥</span>
          <span className="animate-bounce" style={{animationDelay: '0.6s'}}>🦋</span>
        </div>
      </div>
    </div>
  );
}