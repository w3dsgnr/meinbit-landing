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

    // iOS blocks muted-inline autoplay in Low Power Mode (and occasionally
    // until a gesture). Try to play; if the browser rejects it, start on the
    // first user interaction. Setting muted imperatively also sidesteps
    // React not always rendering the `muted` attribute.
    video.muted = true;
    const gestureEvents = ["touchstart", "pointerdown", "scroll", "click"] as const;
    const startOnGesture = () => { video.play().catch(() => {}); cleanup(); };
    const cleanup = () =>
      gestureEvents.forEach((e) => window.removeEventListener(e, startOnGesture));
    const tryPlay = () => {
      const p = video.play();
      if (p) p.catch(() => {
        gestureEvents.forEach((e) =>
          window.addEventListener(e, startOnGesture, { once: true, passive: true }));
      });
    };
    tryPlay();

    return () => {
      video.removeEventListener("loadedmetadata", applyRate);
      cleanup();
    };
  }, []);

  return (
    <div id="bg">
      <video ref={videoRef} className="bg-video" autoPlay muted loop playsInline>
        <source src="/bg-video2-boomerang.mp4" type="video/mp4" />
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
