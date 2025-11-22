"use client";
import { Cloud } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from 'three';

export const CloudWithPath = ({
  startPosition = [0, 0, 0],
  peakPosition = [100, 30, 0],
  speed = 0.01,
  xSpeed = 1,  // Multiplier for x-axis movement (higher = faster horizontal movement)
  logScale = 10,
  cloudProps = {}
}) => {
  const ref = useRef<Group | null>(null)
  const timeRef = useRef(0)

  useFrame((state, delta) => {
    if (!ref.current) return

    timeRef.current += delta * speed

    const distance = timeRef.current

    const x = startPosition[0] + distance * xSpeed * -1  // xSpeed controls horizontal movement rate
    const y = peakPosition[1] - logScale * Math.log(distance + 1) + startPosition[1]
    const z = startPosition[2]

    ref.current.position.set(x, y, z)
  })

  return (
    <group ref={ref}>
      <Cloud {...cloudProps} />
    </group>
  )
}
