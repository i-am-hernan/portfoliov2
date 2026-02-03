"use client";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'

export const GoldenGateBridge = () => {
  const gltf = useLoader(GLTFLoader, 'models/golden-gate-bridge/scene.gltf')

  // Bridge: Dark crimson with subtle emissive glow
  const bridgeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8B2020'),
      metalness: 0.6,
      roughness: 0.35,
      emissive: new THREE.Color('#3a0a0a'),
      emissiveIntensity: 0.05,
    })
  }, [])

  // Terrain: Near-black silhouette
  const terrainMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1a1812'),
      metalness: 0.1,
      roughness: 0.95,
    })
  }, [])

  // Water: Deep navy with mirror-like reflections
  const waterMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0a1a2e'),
      metalness: 0.7,
      roughness: 0.15,
      emissive: new THREE.Color('#051225'),
      emissiveIntensity: 0.08,
    })
  }, [])

  useEffect(() => {
    gltf.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh
        const name = mesh.name.toLowerCase()
        if (name.includes('landscape')) {
          mesh.material = terrainMaterial
        } else if (name.includes('water')) {
          mesh.material = waterMaterial
        } else {
          mesh.material = bridgeMaterial
        }
      }
    })
  }, [gltf, bridgeMaterial, terrainMaterial, waterMaterial])

  return <primitive object={gltf.scene} />
}
