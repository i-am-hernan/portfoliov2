"use client";
import { About, Contact, Hero, Projects } from '@/components/custom/portfolio-sections';
import { NavigateBar } from '@/components/custom/nav/NavigateBar';
import { Scroll, ScrollControls, useScroll, Preload } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { GoldenGateBridge } from '@/components/three/scenes/golden-gate-bridge/GoldenGateBridge';
import { SanFranciscoSky } from '../three/scenes/sky';
import { ScrollProgressBar } from './ScrollProgress';

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
      <About />
      <Projects />
      <Contact />
    </Scroll>
  )
}

export const Portfolio = () => {
  return (
    <>
      <ScrollProgressBar />
      <NavigateBar />
      <Canvas
        camera={{ position: [0, 50, 100], fov: 75 }}
        gl={{ antialias: true }}
        dpr={[1, 1.5]}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
      >
        <ScrollControls pages={4.5} damping={0.1}>
          <ambientLight intensity={1} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <GoldenGateBridge />
          <SanFranciscoSky />
          <ScrollingCamera />
          <HtmlContainer />
          <Preload all />
        </ScrollControls>
      </Canvas>
    </>
  )
}

