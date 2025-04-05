"use client";

import { useRef, useState, useEffect } from 'react';

export const useExpandableText = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [isTextTruncated, setIsTextTruncated] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const isTruncated = textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsTextTruncated(isTruncated);
    }
  }, []);

  const handleShowMore = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowFullDescription(true);
  };

  const handleShowLess = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setShowFullDescription(false);
  };

  return {
    textRef,
    showFullDescription,
    isTextTruncated,
    handleShowMore,
    handleShowLess
  };
};
