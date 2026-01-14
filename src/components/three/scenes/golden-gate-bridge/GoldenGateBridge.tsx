"use client";
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { useEffect } from 'react'

export const GoldenGateBridge = () => {
  const gltf = useLoader(GLTFLoader, 'models/golden-gate-bridge/scene.gltf')

  useEffect(() => {
    // Debug: Log all meshes and their materials
    const materialCounts: Record<string, number> = {}

    gltf.scene.traverse((child) => {
      if ((child as any).isMesh) {
        const mesh = child as any
        const materialName = mesh.material?.name || 'unnamed'
        materialCounts[materialName] = (materialCounts[materialName] || 0) + 1
      }
    })

    console.log('=== GOLDEN GATE BRIDGE MATERIALS ===')
    console.log('Material usage counts:')
    Object.entries(materialCounts)
      .sort((a, b) => b[1] - a[1])
      .forEach(([name, count]) => {
        console.log(`  ${name}: ${count} meshes`)
      })
    console.log('====================================')
  }, [gltf])

  return <primitive object={gltf.scene} />
}
