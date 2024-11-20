import "./index.css";
import Canvas from "./Canvas";
import data from "./data";
import 'remixicon/fonts/remixicon.css';
import "locomotive-scroll/dist/locomotive-scroll.css";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clickSound from "./assets/click-sound.mp3"; 
import Eyes from "./Eyes";

import { Link } from 'react-scroll';
import "./style.css";
import Outro from "./Outro";
import Footer from "./Footer";
import Hero from "./Hero";

import ServicesAndHoverOverlay from "./ServicesAndOverlay";

const Home = () => {
  return <div>Home Page</div>; 
};



gsap.registerPlugin(ScrollTrigger);

function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);
  const cursorRef = useRef(null);
  const sound = new Audio(clickSound);

  const images = [
    'https://images.pexels.com/photos/19358148/pexels-photo-19358148/free-photo-of-river-and-forest-on-hill-behind.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/1264077/pexels-photo-1264077.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
];

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      gsap.set(cursorRef.current, {
        x: e.clientX - 15, 
        y: e.clientY - 15,
      });
    };

    const handleClick = (e) => {
      sound.play(); 
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 100,
            duration: 2,
            ease: "power2.inOut",
      
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };
    

    document.addEventListener("mousemove", handleMouseMove);
    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    headingElement.addEventListener("mouseenter", () => {
      gsap.to(cursorRef.current, {
        scale:6, 
        background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzYSa3n5cPSHL8ejDjLO77sSi743b5W2cLnQ&s) no-repeat center center / cover",
        zIndex: 200,  
        duration: 0.5, 
        ease: "power2.out",
      });

      
      gsap.to(headingElement, {
      
        duration: 0.5,
        ease: "power2.out",
      });
    });

    headingElement.addEventListener("mouseleave", () => {
      gsap.to(cursorRef.current, { 
        scale: 1, 
        background: "red", 
        duration: 0.5,
        ease: "power2.out",
      });

      gsap.to(headingElement, {
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    return () => {
      headingElement.removeEventListener("click", handleClick);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <div className="overflow-hidden">
      <span
        ref={growingSpan}
        className="growing rounded-full block fixed top-[-20px] left-[-20px] w-5 h-5"
      ></span>
      <div ref={cursorRef} className="cursor-circle fixed w-5 h-5 rounded-full bg-red-500 pointer-events-none z-[200]"></div>
      <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {showCanvas &&
          data[0].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <div className="w-full relative z-[1] h-screen ">
          <nav className="w-full p-8 flex justify-between z-50 h-[2vw] items-center">
        <div className="brand text-2xl font-md">thirtysixstudios</div>
        <div className="links flex gap-12 mr-10 w-[30vw] h-[4vw] text-[1.3vw] font-medium font-['Helvetica_Now_Display'] items-center cursor-pointer">
          {["Home", "what we do", "who we are", "talk to us"].map((link, index) => (
            <Link
              key={index}
              to={link.toLowerCase().replace(/ /g, '')}  
              smooth={true}  
              duration={1000}  
              offset={-50}  
              className="text-md hover:text-gray-300"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>


          <div className="textcontainer w-full px-[29%]  mt-6">
            <div className="text w-[50%]">
              <h3 className="text-2xl leading-[1.1]">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h3>
              <p className="text-sm w-[75%] mt-10">
                We are a team of designers, developers, and strategists who are
                passionate about creating digital experiences that are both
                beautiful and functional.
              </p>
              <p className="text-md mt-10">scroll</p>
            </div>
          </div>
          <div className="w-full absolute bottom-0 left-0">
          <div className="flex justify-center items-center">
      
    
    </div>
            
            <h1
              ref={headingref}
              className="text-[15rem]  font-normal z-[-1] tracking-tight leading-none pl-8"
            >
              Thirtysixstudios
            </h1>
          </div>
        </div>
      </div>

      <div className="relative " id="whatwedo">
      {showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <Hero />
      </div>

      <div className="relative  mt-20">
      {showCanvas &&
          data[2].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <Eyes />
      </div>

            
      <div className="relative" id="whoweare">
        {showCanvas &&
          data[4].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <Outro />
        </div>

        <div className="relative mt-12">
      {showCanvas &&
          data[6].map((canvasdets, index) => <Canvas details={canvasdets} />)}
        <ServicesAndHoverOverlay images={images}/>
      </div>

        <div className="relative" id="talktous">
        {showCanvas &&
          data[8].map((canvasdets, index) => <Canvas details={canvasdets} />)}
          <Footer />
        </div>
        </div>
    </>
  );
}

export default App;
