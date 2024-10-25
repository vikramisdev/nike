import { useEffect, useRef } from "react";
import "../App.css"

function HeroSection(props) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className={props.className} onClick={() => props.onClick}>
      <video className="object-cover h-hero-section w-full overflow-clip px-5 py-5" loop={true} autoPlay={true} muted={true} ref={videoRef}>
        <source src="nike_video.mp4" type="video/mp4"></source>
      </video>

      <div className="text-center py-24 px-5">
        <h1 className="font-semibold">Built Different</h1>
        <h1 className="md:text-8xl text-6xl font-extrabold">RUN IN THE RAIN</h1>
        <h1>A waterproof and responsive for running on wet roads</h1>
        <button className="px-4 py-2 bg-black rounded-full text-white mt-6">SHOP NOW</button>
      </div>
    </div>
  );
}
export default HeroSection;
