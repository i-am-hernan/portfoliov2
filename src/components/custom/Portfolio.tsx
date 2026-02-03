"use client";
import { About, CableDivider, Contact, Education, Experience, Hero, Projects } from '@/components/custom/portfolio-sections';
import { NavigateBar } from '@/components/custom/nav/NavigateBar';
import { Scroll, ScrollControls, useScroll, Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { GoldenGateBridge } from '@/components/three/scenes/golden-gate-bridge/GoldenGateBridge';
import { SanFranciscoSky } from '../three/scenes/sky';
import { ScrollProgressBar } from './ScrollProgress';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};

const ScrollingCamera = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    // Get scroll offset (0 to 1)
    const offset = scroll.offset;

    const radius = 150;
    const rotationAmount = (11 * Math.PI / 12); // 3/2 * PI rotation (270 degrees)

    // Split scroll into two phases
    const rotationPhase = 0.3; // First 30% of scroll is rotation

    if (offset < rotationPhase) {
      // Phase 1: Rotate around the model
      const rotationProgress = offset / rotationPhase; // 0 to 1
      const angle = (7 * Math.PI / 12) + rotationProgress * rotationAmount;

      camera.position.x = -1 * Math.sin(angle) * radius;
      camera.position.z = -1 * Math.cos(angle) * radius;
      camera.position.y = 40 + offset * -120; // Lower as you scroll

      // Look at the center during rotation
      camera.lookAt(0, 0, 0);
    } else {
      // Phase 2: Move in a straight line
      const moveProgress = (offset - rotationPhase) / (1 - rotationPhase); // 0 to 1

      // End position from rotation phase - must match the final angle from phase 1
      const finalAngle = (7 * Math.PI / 12) + rotationAmount;
      const startX = -1 * Math.sin(finalAngle) * radius;
      const startZ = -1 * Math.cos(finalAngle) * radius;
      const constantY = 40 + rotationPhase * -120; // Lock Y at the end of rotation phase

      // Move in a straight line in negative x direction
      camera.position.x = startX - moveProgress * 400; // Move in negative x direction
      camera.position.z = startZ;
      camera.position.y = constantY; // Keep Y constant during straight line movement

      // Look ahead in the direction of travel (negative x direction)
      camera.lookAt(camera.position.x - 100, constantY, startZ);
    }
  });

  return null;
};

const HtmlContainer = () => {
  return (
    <Scroll html style={{ width: '100%' }}>
      <Hero />

      {/* Cable dividers - viewport-width, always centered */}
      <CableDivider number="01" label="About" topMobile="100vh" topDesktop="100vh" />
      <CableDivider number="02" label="Experience" topMobile="280vh" topDesktop="175vh" />
      <CableDivider number="03" label="Open Source" topMobile="470vh" topDesktop="295vh" />
      <CableDivider number="04" label="Education" topMobile="720vh" topDesktop="460vh" />
      <CableDivider number="05" label="Contact" topMobile="870vh" topDesktop="540vh" />

      {/* Section content */}
      <About />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </Scroll>
  )
}

export const Portfolio = () => {
  const isMobile = useIsMobile();
  return (
    <>
      <ScrollProgressBar />
      <NavigateBar />
      <Canvas
        camera={{ position: [0, 50, 100], fov: 75 }}
        gl={{ antialias: true, toneMapping: 4 }} // ACESFilmicToneMapping
        dpr={[1, 1.5]}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <ScrollControls pages={isMobile ? 10 : 6} damping={0.1}>
          {/* Nighttime lighting setup */}

          {/* Moonlight */}
          <directionalLight
            position={[80, 120, 60]}
            intensity={0.4}
            color="#b4c6e0"
          />
          {/* Deep blue ambient */}
          <ambientLight intensity={0.15} color="#1a2744" />
          {/* Hemisphere: night sky + dark ground */}
          <hemisphereLight
            color="#0d1b3e"
            groundColor="#0a0a12"
            intensity={0.3}
          />
          {/* City glow fill from behind */}
          <directionalLight
            position={[-80, 10, -60]}
            intensity={0.08}
            color="#ff9944"
          />

          {/* Tower-top aviation warning lights */}
          <pointLight position={[0, 67, -18]} intensity={2.0} color="#ff6622" distance={120} />
          <pointLight position={[0, 67, 18]} intensity={2.0} color="#ff6622" distance={120} />

          {/* Cable point lights */}
          <pointLight position={[0, 45, -9]} intensity={0.6} color="#ffaa44" distance={60} />
          <pointLight position={[0, 45, 9]} intensity={0.6} color="#ffaa44" distance={60} />
          <pointLight position={[0, 55, 0]} intensity={0.6} color="#ffaa44" distance={60} />

          {/* Linear fog */}
          <fog attach="fog" args={['#0a1628', 100, 600]} />

          <GoldenGateBridge />
          <SanFranciscoSky />
          <ScrollingCamera />
          <HtmlContainer />
          <Preload all />
          {/* Post-processing for cinematic nighttime look */}
          <EffectComposer>
            <Bloom
              intensity={0.8}
              luminanceThreshold={0.4}
              luminanceSmoothing={0.7}
              mipmapBlur
            />
            <Vignette darkness={0.6} offset={0.4} />
          </EffectComposer>
        </ScrollControls>
      </Canvas>
    </>
  )
}
