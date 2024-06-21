import React , {useEffect} from "react";
import frog from "../assets/suitfrog.png";
import FallingMeteors from "../Components/starts";
import AOS from "aos"
import "aos/dist/aos.css"

function FullScreenVideo() {

  useEffect(()=>{
    AOS.init({duration:2000})
  } , [])

  return (
    <div
      id="media"
      className="relative h-screen w-full overflow-hidden  pt-4 bg-ocean-blue-900 "
    >
      <FallingMeteors />
      <div className="absolute   md:left-[50%]    z-0">
        <img src={frog} alt="Background Image" className="animate-float" />
      </div>
      <div className="absolute inset-0 z-10 h-full w-full "></div>
      <div className="relative z-20 flex h-full w-full items-center justify-center md:justify-start" data-aos="fade-right">
        <div className="w-full max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl px-4 md:px-8 lg:px-12 xl:ml-16">
          <div className="  top-64 md:top-0 relative  w-full pt-[56.25%] fade-out">
            <iframe
              className="absolute  bottom-40 md:bottom-0 md:top-0 left-0 w-full h-full rounded-lg shadow-lg border-4 border-white/50 bg-gradient-to-r from-[#2c5282] to-[#4c51bf] bg-clip-padding backdrop-filter backdrop-blur-sm"
              src="https://www.youtube.com/embed/VIDEO_ID_HERE"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenVideo;
