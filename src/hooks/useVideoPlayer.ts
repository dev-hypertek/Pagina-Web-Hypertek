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

  // Limpiar referencias cuando el componente se desmonta para evitar memory leaks
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        setIsPlaying(false);
      }
    };
  }, []);

  return { 
    videoRef, 
    isPlaying, 
    handleVideoEnter, 
    handleVideoLeave 
  };
};
