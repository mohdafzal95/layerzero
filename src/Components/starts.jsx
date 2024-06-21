import React, { useState, useEffect, useRef } from 'react';
import BlinkingStarsBackground from './BlinkingStarsBackground';

const FallingMeteors = () => {
  const [meteors, setMeteors] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      addMeteor();
    }, 530); // Slowed down the interval to 500ms

    return () => clearInterval(interval);
  }, []);

  const addMeteor = () => {
    const maxX = containerRef.current?.offsetWidth || 0;
    const maxY = containerRef.current?.offsetHeight || 0;

    const meteor = {
      id: Date.now(),
      angle: getRandomInt(30, 60), // Changed angle range to make meteors fall more downwards
      speed: getRandomInt(15, 30), // Increased speed range to slow down the animation
      delay: getRandomInt(1, 10), // Reduced delay range
      x: getRandomInt(-40, 20), // Changed x range to start from the left side
      y: getRandomInt(-40, 10), // Changed y range to start from the top
      travel: getRandomInt(80, 120), // Increased travel distance to reach the bottom
      trail: getRandomInt(1, 5),
    };

    setMeteors((prevMeteors) => [...prevMeteors, meteor]);

    setTimeout(() => {
      setMeteors((prevMeteors) => prevMeteors.filter((m) => m.id !== meteor.id));
    }, 8000); // Increased timeout to match the slower speed
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10" ref={containerRef}>
        <BlinkingStarsBackground/>
      <style>
        {`
          @keyframes shoot {
            0% { transform: rotate(var(--angle, 0deg)); }
            5%, 100% { transform: rotate(var(--angle, 0deg)) translate(var(--travel, 0), 0); }
          }
          @keyframes spark {
            0%, 5%, 100% { transform: scaleX(0); }
            1%, 4% { transform: scaleX(var(--trail, 1)); }
          }
          .meteor {
            position: absolute;
            top: calc(var(--y, 0) * 1vh);
            left: calc(var(--x, 0) * 1vw);
            animation: shoot calc(var(--speed, 1s) * 1s) calc(var(--delay, 0s) * 1s) infinite linear both;
          }
          .meteor::before {
            content: "";
            position: absolute;
            height: 2px;
            width: 25px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.85));
            border-radius: 100% 25% 25% 100%;
            filter: blur(1px);
            transform-origin: right;
            filter: drop-shadow(0 0 5px #fafafa);
            animation: spark calc(var(--speed, 1s) * 1s) calc(var(--delay, 0s) * 1s) infinite linear both;
          }
        `}
      </style>
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor"
          style={{
            '--angle': `${meteor.angle}deg`,
            '--speed': meteor.speed,
            '--delay': meteor.delay,
            '--x': meteor.x,
            '--y': meteor.y,
            '--travel': `${meteor.travel}vw`,
            '--trail': meteor.trail,
          }}
        />
        
      ))}
     
    </div>
  );
};

export default FallingMeteors;