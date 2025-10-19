"use client";
import { Image, useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

interface SlidingImageProps {
  url: string;
  scale: [number, number];
  position?: [number, number, number];
}

export const SlidingImage = ({ url, scale, ...props }: SlidingImageProps) => {
  const visible = useRef(false)
  const [hovered, hover] = useState(false)
  const ref = useIntersect<THREE.Mesh>((isVisible: boolean) => (visible.current = isVisible))
  const { width, height } = useThree((state) => state.viewport)

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y = THREE.MathUtils.damp(ref.current.position.y, visible.current ? 0 : -height / 2 + 1, 4, delta)
      const mesh = ref.current as THREE.Mesh & { material: { zoom: number; grayscale: number } }
      // const targetScale = visible.current ? [width, height] : [scale[0], scale[1]];

      if (mesh.material) {
        // ref.current.scale.x = THREE.MathUtils.damp(ref.current.scale.x, targetScale[0], 4, delta)
        // ref.current.scale.y = THREE.MathUtils.damp(ref.current.scale.y, targetScale[1], 4, delta)
        mesh.material.zoom = THREE.MathUtils.damp(mesh.material.zoom, visible.current ? 1 : 1.5, 4, delta)
        mesh.material.grayscale = THREE.MathUtils.damp(mesh.material.grayscale, hovered ? 1 : 0, 4, delta)
      }
    }
  })

  return (
    <group {...props}>
      <Image ref={ref} onPointerOver={() => hover(true)} onPointerOut={() => hover(false)} scale={scale} url={url} />
    </group>
  )
}

