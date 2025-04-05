"use client";

import { useRef, useState, useCallback, useEffect } from 'react';

export const useVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoEnter = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
      setIsPlaying(true);
    }
  }, []);

  const handleVideoLeave = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  return { 
    videoRef, 
    isPlaying, 
    handleVideoEnter, 
    handleVideoLeave 
  };
};
