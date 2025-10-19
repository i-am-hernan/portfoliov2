"use client";
import { About, Contact, Hero, Projects } from '@/components/custom/portfolio-sections';
import { SlidingImage } from '@/components/three/SlidingImage';
import { Clouds, Cloud, Sky, Scroll, ScrollControls, StatsGl, useScroll } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { GoldenGateBridge } from '@/components/three/scenes/golden-gate-bridge/GoldenGateBridge';
import { useControls } from "leva"
import { useRef } from "react";
import * as THREE from "three";

const ScrollingCamera = () => {
  const scroll = useScroll();
  const { camera } = useThree();

  useFrame(() => {
    // Get scroll offset (0 to 1)
    const offset = scroll.offset;

    const radius = 150;
    const rotationAmount = (11 * Math.PI / 12); // 3/2 * PI rotation (270 degrees)

    // Split scroll into two phases
    const rotationPhase = 0.3; // First 60% of scroll is rotation

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

const ThreeContainer = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <Scroll>
      {/* Shift the initial images to the right and slightly lower to clear hero */}
      <SlidingImage url="/1.jpg" scale={[w / 3.2, w / 3.2]} position={[w / 4, -h * 0.15, 0]} />
      <SlidingImage url="/2.jpg" scale={[2, w / 3]} position={[w / 10, -h, 0]} />
      <SlidingImage url="/3.jpg" scale={[w / 3, w / 5]} position={[-w / 5, -h * 1, 0]} />
      <SlidingImage url="/4.jpg" scale={[w / 5, w / 5]} position={[w / 3.5, -h * 1.2, 0]} />
    </Scroll>
  )
}

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

// const ref = useRef()
// const cloud0 = useRef()
// const { color, x, y, z, range, ...config } = useControls({
//   seed: { value: 1, min: 1, max: 100, step: 1 },
//   segments: { value: 20, min: 1, max: 80, step: 1 },
//   volume: { value: 6, min: 0, max: 100, step: 0.1 },
//   opacity: { value: 0.6, min: 0, max: 1, step: 0.01 },
//   fade: { value: 10, min: 0, max: 400, step: 1 },
//   growth: { value: 4, min: 0, max: 20, step: 1 },
//   speed: { value: 0.1, min: 0, max: 1, step: 0.01 },
//   x: { value: 6, min: 0, max: 100, step: 1 },
//   y: { value: 1, min: 0, max: 100, step: 1 },
//   z: { value: 1, min: 0, max: 100, step: 1 },
//   color: "white",
// })
// useFrame((state, delta) => {
//   ref.current.rotation.y = Math.cos(state.clock.elapsedTime / 2) / 2
//   ref.current.rotation.x = Math.sin(state.clock.elapsedTime / 2) / 2
//   cloud0.current.rotation.y -= delta
// })
// return (
//   <>
//     <Sky />
//     <group ref={ref}>
//       <Clouds material={THREE.MeshLambertMaterial} limit={400} range={range}>
//         {/* <Cloud ref={cloud0} {...config} bounds={[x, y, z]} color={color} /> */}
//         {/* <Cloud {...config} bounds={[x, y, z]} color="#c5c5c5" seed={2} position={[15, 0, 0]} /> */}
//         {/* <Cloud {...config} bounds={[x, y, z]} color="#9a9a9a" seed={3} position={[-15, 0, 0]} /> */}
//         {/* <Cloud {...config} bounds={[x, y, z]} color="#adadad" seed={4} position={[0, 0, -12]} /> */}
//         {/* <Cloud {...config} bounds={[x, y, z]} color="#b0b0b0" seed={5} position={[0, 0, 12]} /> */}
//         {/* <Cloud concentrate="outside" growth={100} color="#d0d0d0" opacity={0.5} seed={0.3} bounds={200} volume={200} /> */}
//       </Clouds>
//     </group>
//   </>
// Reusable component for clouds following a logarithmic path
const CloudWithPath = ({
  startPosition = [0, 0, 0],
  peakPosition = [100, 30, 0],
  speed = 0.01,
  xSpeed = 1,  // Multiplier for x-axis movement (higher = faster horizontal movement)
  logScale = 10,
  cloudProps = {}
}) => {
  const ref = useRef()
  const cloud = useRef()
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    if (!ref.current) return

    timeRef.current += delta * speed

    const distance = timeRef.current

    // Logarithmic trajectory: y = peakY - logScale * log(distance + 1) + startY
    // As distance → ∞, y → peakY (asymptote at mountain peak)
    const x = startPosition[0] + distance * xSpeed * -1  // xSpeed controls horizontal movement rate
    const y = peakPosition[1] - logScale * Math.log(distance + 1) + startPosition[1]
    const z = startPosition[2]

    cloud.current.position.set(x, y, z)
  })

  return (
    <group ref={ref}>
      <Cloud ref={cloud} {...cloudProps} />
    </group>
  )
}

const SanFranciscoSky = () => {
  const { x, y, z, ...config } = useControls({
    seed: { value: 1, min: 1, max: 100, step: 1 },
    segments: { value: 37, min: 1, max: 80, step: 1 },
    volume: { value: 59.6, min: 0, max: 100, step: 0.1 },
    opacity: { value: 0.31, min: 0, max: 1, step: 0.01 },
    fade: { value: 180, min: 0, max: 400, step: 1 },
    growth: { value: 15, min: 0, max: 20, step: 1 },
    speed: { value: 0.3, min: 0, max: 1, step: 0.01 },
    x: { value: 17, min: 0, max: 100, step: 1 },
    y: { value: 3, min: 0, max: 100, step: 1 },
    z: { value: 70, min: 0, max: 100, step: 1 },
  })

  return (
    <>
      <Sky />
      <Clouds material={THREE.MeshLambertMaterial} limit={400}>
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 40, 0]}
          speed={0.5}
          logScale={10}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#F5F5F3" }}
        />
        <CloudWithPath
          startPosition={[400, 0, -400]}
          peakPosition={[400, 20, -400]}
          speed={4}
          logScale={8}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#E9EBEA", seed: 2 }}
        />
        <CloudWithPath
          startPosition={[250, 0, -200]}
          peakPosition={[250, 20, -200]}
          speed={4}
          logScale={8}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#E9EBEA", seed: 2 }}
        />

        <CloudWithPath
          startPosition={[250, 0, -100]}
          peakPosition={[250, 10, -100]}
          speed={4}
          logScale={5}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#E9EBEA", seed: 2 }}
        />
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 10, 0]}
          speed={4}
          logScale={4}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#E9EBEA", seed: 2 }}
        />

        <CloudWithPath
          startPosition={[300, 0, 60]}
          peakPosition={[300, 10, 60]}
          speed={4}
          logScale={4}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#E9EBEA", seed: 2 }}
        />

        {/* Optimized volumetric clouds - fewer but larger and more impressive */}

        {/* Far background - large volumetric clouds */}
        <Cloud bounds={[x * 3.0, y * 2.0, z * 2.5]} segments={40} volume={95} opacity={0.50} fade={250} growth={18} seed={10} color="#FFFFFF" position={[350, 35, -480]} />
        <Cloud bounds={[x * 2.8, y * 2.2, z * 2.8]} segments={42} volume={98} opacity={0.55} fade={240} growth={19} seed={37} color="#FFFFFF" position={[180, 30, -420]} />
        <Cloud bounds={[x * 3.2, y * 1.8, z * 2.3]} segments={38} volume={92} opacity={0.48} fade={235} growth={17} seed={64} color="#FFFFFF" position={[500, 38, -380]} />

        {/* Mid foreground - prominent volumetric clouds */}
        <Cloud bounds={[x * 3.0, y * 2.3, z * 2.7]} segments={45} volume={108} opacity={0.65} fade={210} growth={21} seed={61} color="#FFFFFF" position={[250, 44, -60]} />

        {/* Foreground - massive volumetric clouds */}
        <Cloud bounds={[x * 3.1, y * 2.5, z * 3.3]} segments={49} volume={108} opacity={0.68} fade={185} growth={20} seed={99} color="#FFFFFF" position={[220, 48, 120]} />
      </Clouds>
    </>
  )
}

export const Portfolio = () => {
  return (
    <Canvas camera={{ position: [0, 50, 100], fov: 75 }} gl={{ antialias: true }} dpr={[1, 1.5]}>
      <ScrollControls pages={3} damping={0.1}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <GoldenGateBridge />
        <SanFranciscoSky />
        <ScrollingCamera />
        <HtmlContainer />
      </ScrollControls>
    </Canvas>
  )
}

