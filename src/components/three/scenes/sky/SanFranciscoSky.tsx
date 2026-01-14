"use client";
import { Clouds, Cloud, Stars } from "@react-three/drei";
import { CloudWithPath } from "./CloudWithPath";
import * as THREE from "three";
// import { useControls } from "leva"

export const SanFranciscoSky = () => {
  // const { x, y, z, ...config } = useControls({
  //   seed: { value: 1, min: 1, max: 100, step: 1 },
  //   segments: { value: 37, min: 1, max: 80, step: 1 },
  //   volume: { value: 59.6, min: 0, max: 100, step: 0.1 },
  //   opacity: { value: 0.31, min: 0, max: 1, step: 0.01 },
  //   fade: { value: 180, min: 0, max: 400, step: 1 },
  //   growth: { value: 15, min: 0, max: 20, step: 1 },
  //   speed: { value: 0.3, min: 0, max: 1, step: 0.01 },
  //   x: { value: 17, min: 0, max: 100, step: 1 },
  //   y: { value: 3, min: 0, max: 100, step: 1 },
  //   z: { value: 70, min: 0, max: 100, step: 1 },
  // })

  // Thicker cloud config for daytime
  const { x, y, z, ...config } = {
    seed: 1,
    segments: 50,
    volume: 80,
    opacity: 0.8,
    fade: 200,
    growth: 18,
    speed: 0.2,
    x: 25,
    y: 8,
    z: 80,
  };
  return (
    <>
      {/* Daytime sky gradient */}
      <color attach="background" args={['#4A90C2']} />
      {/* No stars during day */}
      <Clouds material={THREE.MeshLambertMaterial} limit={800}>
        {/* Animated clouds */}
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 50, 0]}
          speed={0.3}
          logScale={12}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF" }}
        />
        <CloudWithPath
          startPosition={[400, 0, -400]}
          peakPosition={[400, 35, -400]}
          speed={2}
          logScale={10}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />
        <CloudWithPath
          startPosition={[250, 0, -200]}
          peakPosition={[250, 30, -200]}
          speed={2.5}
          logScale={10}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 3 }}
        />
        <CloudWithPath
          startPosition={[250, 0, -100]}
          peakPosition={[250, 25, -100]}
          speed={3}
          logScale={8}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 4 }}
        />
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 20, 0]}
          speed={2}
          logScale={6}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 5 }}
        />
        <CloudWithPath
          startPosition={[300, 0, 60]}
          peakPosition={[300, 18, 60]}
          speed={2.5}
          logScale={6}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 6 }}
        />

        {/* Thick dramatic clouds - far background */}
        <Cloud bounds={[x * 4, y * 3, z * 3]} segments={55} volume={120} opacity={0.85} fade={300} growth={20} seed={10} color="#FFFFFF" position={[350, 45, -500]} />
        <Cloud bounds={[x * 3.5, y * 2.8, z * 3.2]} segments={50} volume={115} opacity={0.82} fade={280} growth={19} seed={37} color="#FFFFFF" position={[180, 40, -450]} />
        <Cloud bounds={[x * 4.2, y * 2.5, z * 2.8]} segments={52} volume={110} opacity={0.80} fade={270} growth={18} seed={64} color="#FFFFFF" position={[500, 50, -400]} />

        {/* Mid-range thick clouds */}
        <Cloud bounds={[x * 3.8, y * 3, z * 3.5]} segments={55} volume={125} opacity={0.88} fade={250} growth={22} seed={61} color="#FFFFFF" position={[250, 55, -80]} />
        <Cloud bounds={[x * 3.5, y * 2.8, z * 3]} segments={50} volume={118} opacity={0.85} fade={240} growth={20} seed={72} color="#FFFFFF" position={[50, 48, -150]} />
        <Cloud bounds={[x * 3.2, y * 2.5, z * 2.8]} segments={48} volume={112} opacity={0.82} fade={230} growth={19} seed={83} color="#FFFFFF" position={[-100, 42, -200]} />

        {/* Foreground - massive billowing clouds */}
        <Cloud bounds={[x * 4, y * 3.2, z * 4]} segments={60} volume={130} opacity={0.90} fade={220} growth={22} seed={99} color="#FFFFFF" position={[220, 60, 100]} />
        <Cloud bounds={[x * 3.8, y * 3, z * 3.8]} segments={58} volume={125} opacity={0.88} fade={210} growth={21} seed={88} color="#FFFFFF" position={[100, 55, 50]} />

        {/* Additional thick clouds scattered across sky */}
        <Cloud bounds={[x * 3, y * 2.5, z * 2.8]} segments={45} volume={105} opacity={0.80} fade={260} growth={18} seed={15} color="#FFFFFF" position={[-150, 38, -350]} />
        <Cloud bounds={[x * 2.8, y * 2.2, z * 2.5]} segments={42} volume={100} opacity={0.78} fade={250} growth={17} seed={22} color="#FFFFFF" position={[-80, 32, -180]} />
        <Cloud bounds={[x * 3.5, y * 2.8, z * 3]} segments={50} volume={115} opacity={0.84} fade={270} growth={19} seed={33} color="#FFFFFF" position={[120, 45, -280]} />
        <Cloud bounds={[x * 2.5, y * 2, z * 2.2]} segments={40} volume={95} opacity={0.75} fade={240} growth={16} seed={44} color="#FFFFFF" position={[450, 35, -220]} />
        <Cloud bounds={[x * 3.8, y * 3, z * 3.5]} segments={55} volume={120} opacity={0.86} fade={280} growth={20} seed={55} color="#FFFFFF" position={[-20, 52, -380]} />
        <Cloud bounds={[x * 3, y * 2.4, z * 2.6]} segments={45} volume={102} opacity={0.79} fade={250} growth={17} seed={66} color="#FFFFFF" position={[-200, 40, -120]} />
        <Cloud bounds={[x * 3.2, y * 2.6, z * 3]} segments={48} volume={108} opacity={0.81} fade={260} growth={18} seed={77} color="#FFFFFF" position={[180, 48, 30]} />

        {/* Low horizon clouds */}
        <Cloud bounds={[x * 4.5, y * 2, z * 4]} segments={55} volume={100} opacity={0.75} fade={350} growth={16} seed={111} color="#FFFFFF" position={[0, 20, -550]} />
        <Cloud bounds={[x * 4, y * 1.8, z * 3.5]} segments={50} volume={95} opacity={0.72} fade={330} growth={15} seed={122} color="#FFFFFF" position={[300, 18, -520]} />
        <Cloud bounds={[x * 3.8, y * 1.6, z * 3.2]} segments={48} volume={90} opacity={0.70} fade={320} growth={14} seed={133} color="#FFFFFF" position={[-200, 16, -480]} />
      </Clouds>
    </>
  )
}
