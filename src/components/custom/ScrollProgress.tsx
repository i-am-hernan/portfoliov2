"use client";

import { useEffect, useState, useRef } from "react";

export const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const scrollContainerRef = useRef<Element | null>(null);

  useEffect(() => {
    const findScrollContainer = () => {
      // drei's ScrollControls creates a div with overflow-y: auto
      const containers = document.querySelectorAll('div');
      for (const container of containers) {
        const style = window.getComputedStyle(container);
        if (
          (style.overflowY === 'auto' || style.overflowY === 'scroll') &&
          container.scrollHeight > container.clientHeight
        ) {
          return container;
        }
      }
      return null;
    };

    const updateProgress = () => {
      const container = scrollContainerRef.current;
      if (container) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;
        if (scrollHeight > 0) {
          setProgress((scrollTop / scrollHeight) * 100);
        }
      }
    };

    const handleScroll = () => {
      if (!scrollContainerRef.current) {
        scrollContainerRef.current = findScrollContainer();
      }
      updateProgress();
    };

    // Use MutationObserver to detect when scroll container is added
    const observer = new MutationObserver(() => {
      if (!scrollContainerRef.current) {
        scrollContainerRef.current = findScrollContainer();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.addEventListener('scroll', handleScroll);
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Also listen with capture for immediate scroll events
    window.addEventListener('scroll', handleScroll, true);

    // Initial check
    scrollContainerRef.current = findScrollContainer();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll, true);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[200] h-[2px] bg-white/[0.05]">
      <div
        className="h-full bg-gradient-to-r from-white/30 via-white/60 to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.3)]"
        style={{ width: `${progress}%`, transition: 'width 0.1s ease-out' }}
      />
    </div>
  );
};
