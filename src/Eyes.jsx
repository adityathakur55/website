

import React, { useEffect, useState, useRef } from "react";
import musicFile from "./assets/music.mp3";
import gsap from "gsap";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(musicFile));
  const eyeRef = useRef(null);
  const [color, setColor] = useState("#FFFFFF");
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const eyeCenterX = window.innerWidth / 2;
      const eyeCenterY = window.innerHeight / 2;
      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;

      
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);

      
      const maxPupilOffset = 20; 
      const distance = Math.min(
        Math.sqrt(deltaX * deltaX + deltaY * deltaY),
        maxPupilOffset
      );
      const pupilX = (distance * deltaX) / Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const pupilY = (distance * deltaY) / Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      setPupilPosition({ x: pupilX, y: pupilY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    
    const colorInterval = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 1000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(colorInterval);
    };
  }, []);

  const handlePlayClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    gsap.to(eyeRef.current, {
      scale: 1.2,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(eyeRef.current, {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-full relative bg-cover bg-center -mt-8">
        <div className="absolute flex gap-12 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {[1, 2].map((index) => (
            <div
              key={index}
              className="flex items-center justify-center w-[20vw] h-[20vw] rounded-full bg-zinc-100"
              onClick={handlePlayClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={eyeRef}
              style={{
                transition: "background 0.3s ease",
                backgroundColor: color,
                cursor: "pointer",
              }}
            >
              <div
                className="w-2/3 h-2/3 relative rounded-full bg-zinc-900"
                style={{
                  transform: `rotate(${rotate}deg)`,
                  transition: "transform 0.1s ease",
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-3xl text-white font-bold"
                >
                  
                </div>
                <div
                  className="line absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-zinc-100"
                  style={{
                    transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`,
                    transition: "transform 0.1s ease",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Eyes;
