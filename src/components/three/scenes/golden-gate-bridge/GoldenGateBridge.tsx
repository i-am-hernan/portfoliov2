"use client";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useEffect, useMemo } from 'react'
import * as THREE from 'three'

export const GoldenGateBridge = () => {
  const gltf = useLoader(GLTFLoader, 'models/golden-gate-bridge/scene.gltf')

  // Bridge: Vibrant International Orange for daytime
  const bridgeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#C84032'), // Bright International Orange
      metalness: 0.4,
      roughness: 0.5,
    })
  }, [])

  // Terrain: Natural earth tones for daytime
  const terrainMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#5D4E37'), // Brown earth/hills
      metalness: 0.1,
      roughness: 0.85,
    })
  }, [])

  // Water: Bright bay water for daytime
  const waterMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2E6B8A'), // Bright blue bay water
      metalness: 0.2,
      roughness: 0.4,
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
