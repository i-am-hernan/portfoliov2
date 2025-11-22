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

  const { x, y, z, ...config } = {
    seed: 1,
    segments: 37,
    volume: 59.6,
    opacity: 0.31,
    fade: 180,
    growth: 15,
    speed: 0.3,
    x: 17,
    y: 3,
    z: 70,
  };
  return (
    <>
      <color attach="background" args={['#061530']} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[100, 80, -50]} intensity={1.2} color="#c8d5e8" />
      <Stars radius={300} depth={60} count={5000} factor={4} saturation={0} fade={true} speed={2} />
      <Clouds material={THREE.MeshLambertMaterial} limit={400}>
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 40, 0]}
          speed={0.5}
          logScale={10}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF" }}
        />
        <CloudWithPath
          startPosition={[400, 0, -400]}
          peakPosition={[400, 20, -400]}
          speed={4}
          logScale={8}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />
        <CloudWithPath
          startPosition={[250, 0, -200]}
          peakPosition={[250, 20, -200]}
          speed={4}
          logScale={8}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />

        <CloudWithPath
          startPosition={[250, 0, -100]}
          peakPosition={[250, 10, -100]}
          speed={4}
          logScale={5}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />
        <CloudWithPath
          startPosition={[300, 0, 0]}
          peakPosition={[300, 10, 0]}
          speed={4}
          logScale={4}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />

        <CloudWithPath
          startPosition={[300, 0, 60]}
          peakPosition={[300, 10, 60]}
          speed={4}
          logScale={4}
          cloudProps={{ ...config, bounds: [x, y, z], color: "#FFFFFF", seed: 2 }}
        />

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
