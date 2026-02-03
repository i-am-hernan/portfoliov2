"use client";
import { Clouds, Cloud, Stars } from "@react-three/drei";
import * as THREE from "three";

export const SanFranciscoSky = () => {
  const x = 25;
  const y = 5;
  const z = 80;
  return (
    <>
      {/* Nighttime sky */}
      <color attach="background" args={['#061530']} />
      {/* Stars */}
      <Stars radius={300} depth={60} count={6000} factor={4} saturation={0.1} fade speed={1} />
      <Clouds material={THREE.MeshLambertMaterial} limit={200}>
        {/* Thin dark wisps scattered across sky */}
        <Cloud bounds={[x * 3, y * 2, z * 3]} segments={30} volume={40} opacity={0.12} fade={200} growth={10} seed={10} color="#1a2a4a" position={[350, 45, -500]} />
        <Cloud bounds={[x * 3.5, y * 2, z * 2.8]} segments={28} volume={35} opacity={0.15} fade={180} growth={9} seed={37} color="#1a2a4a" position={[180, 40, -450]} />
        <Cloud bounds={[x * 3, y * 1.8, z * 2.5]} segments={25} volume={30} opacity={0.10} fade={200} growth={8} seed={64} color="#1a2a4a" position={[500, 50, -400]} />
        <Cloud bounds={[x * 2.8, y * 1.5, z * 2.8]} segments={22} volume={28} opacity={0.18} fade={170} growth={8} seed={61} color="#1a2a4a" position={[250, 55, -80]} />
        <Cloud bounds={[x * 3.2, y * 1.8, z * 3]} segments={26} volume={32} opacity={0.12} fade={190} growth={9} seed={72} color="#1a2a4a" position={[50, 48, -150]} />
        <Cloud bounds={[x * 2.5, y * 1.5, z * 2.5]} segments={20} volume={25} opacity={0.20} fade={160} growth={7} seed={83} color="#1a2a4a" position={[-100, 42, -200]} />
        <Cloud bounds={[x * 3, y * 2, z * 3]} segments={28} volume={35} opacity={0.14} fade={200} growth={9} seed={99} color="#1a2a4a" position={[220, 60, 100]} />
        <Cloud bounds={[x * 2.8, y * 1.6, z * 2.8]} segments={24} volume={30} opacity={0.16} fade={180} growth={8} seed={88} color="#1a2a4a" position={[100, 55, 50]} />

        {/* Low fog banks near water level - SF bay fog */}
        <Cloud bounds={[x * 6, y * 1.2, z * 5]} segments={40} volume={20} opacity={0.25} fade={300} growth={5} seed={200} color="#1a2a4a" position={[0, 4, -100]} />
        <Cloud bounds={[x * 5, y * 1, z * 4.5]} segments={35} volume={18} opacity={0.20} fade={280} growth={4} seed={201} color="#1a2a4a" position={[200, 3, -200]} />
      </Clouds>
    </>
  )
}
