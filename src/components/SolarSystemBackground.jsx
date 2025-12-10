import React, { useEffect, useState } from 'react';

const SolarSystemBackground = () => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = [];
            for (let i = 0; i < 100; i++) {
                newStars.push({
                    id: i,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.3,
                    animationDelay: `${Math.random() * 5}s`,
                });
            }
            setStars(newStars);
        };

        generateStars();
    }, []);

    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0f] pointer-events-none">
            {/* Stars */}
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                        animationDelay: star.animationDelay,
                    }}
                />
            ))}

            {/* Sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full blur-3xl opacity-40 animate-pulse-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-400 rounded-full shadow-[0_0_60px_rgba(255,165,0,0.6)]" />
            </div>

            {/* Orbits Container - Centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] flex items-center justify-center">

                {/* Orbit 1 - Mercury */}
                <div className="absolute w-[200px] h-[200px] border border-white/5 rounded-full animate-orbit-fast">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gray-300 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>

                {/* Orbit 2 - Venus */}
                <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-orbit-medium">
                    <div className="absolute top-[15%] left-[85%] -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-orange-200 rounded-full shadow-[0_0_10px_rgba(255,200,100,0.8)]" />
                </div>

                {/* Orbit 3 - Earth */}
                <div className="absolute w-[450px] h-[450px] border border-white/5 rounded-full animate-orbit-slow">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(0,100,255,0.8)] overflow-hidden">
                        {/* Continents detail (abstract) */}
                        <div className="absolute top-0 left-0 w-full h-full bg-green-400/30 rounded-full" />
                    </div>
                </div>

                {/* Orbit 4 - Mars */}
                <div className="absolute w-[600px] h-[600px] border border-white/5 rounded-full animate-orbit-slower">
                    <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-red-500 rounded-full shadow-[0_0_15px_rgba(255,50,50,0.8)]" />
                </div>

                {/* Orbit 5 - Jupiter (faint, large) */}
                <div className="absolute w-[800px] h-[800px] border border-white/5 rounded-full animate-spin-slowest">
                    <div className="absolute top-[80%] left-[10%] w-10 h-10 bg-orange-300 rounded-full shadow-[0_0_20px_rgba(255,200,150,0.4)] opacity-80" />
                </div>

            </div>
        </div>
    );
};

export default SolarSystemBackground;
