import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  speed?: number;
}

export function TypeWriter({ text, speed = 20 }: TypeWriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, speed);

    return () => {
      clearInterval(interval);
    };
  }, [text, speed]);

  return (
    <p className="relative">
      <span className="opacity-0">{text}</span>
      <span className="absolute top-0 left-0 h-full">
        {displayText}
        {showCursor && (
          <motion.span className="animate-blink scale-110 text-primary-main">
            |
          </motion.span>
        )}
      </span>
    </p>
  );
}
