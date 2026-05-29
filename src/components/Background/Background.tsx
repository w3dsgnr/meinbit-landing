import { useEffect, useRef } from "react";
import "./Background.css";

const PLAYBACK_RATE = 0.75;

export default function Background() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const applyRate = () => { video.playbackRate = PLAYBACK_RATE; };
    video.addEventListener("loadedmetadata", applyRate);
    applyRate();
    return () => video.removeEventListener("loadedmetadata", applyRate);
  }, []);

  return (
    <div id="bg">
      <video ref={videoRef} className="bg-video" autoPlay muted loop playsInline>
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="bg-aurora" />
      <div className="bg-dots" />
      <svg className="bg-grain" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="gf">
          <feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves={3} stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#gf)" />
      </svg>
    </div>
  );
}
