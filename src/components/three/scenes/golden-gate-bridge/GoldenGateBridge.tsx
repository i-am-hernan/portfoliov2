"use client";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export const GoldenGateBridge = () => {
  const gltf = useLoader(GLTFLoader, 'models/golden-gate-bridge/scene.gltf')
  return <primitive object={gltf.scene} />
}
