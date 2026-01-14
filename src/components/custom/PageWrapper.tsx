"use client";

import { useState, useEffect } from "react";
import { Loading } from "./Loading";
import { Portfolio } from "./Portfolio";

export const PageWrapper = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [typingComplete, setTypingComplete] = useState(false);
  const [contentReady, setContentReady] = useState(false);

  // Simulate content ready after a minimum time for Three.js to load
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentReady(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Show main content when both typing is complete and content is ready
  useEffect(() => {
    if (typingComplete && contentReady) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [typingComplete, contentReady]);

  return (
    <>
      {/* Loading screen */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-1000 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Loading onComplete={() => setTypingComplete(true)} />
      </div>

      {/* Main content - always mounted but hidden initially */}
      <div
        className={`h-screen w-screen transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <main className="h-full w-full">
          <Portfolio />
        </main>
      </div>
    </>
  );
};
