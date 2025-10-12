"use client";
import * as THREE from "three";
import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useIntersect, Image, ScrollControls, Scroll } from "@react-three/drei";
import { About, Contact, Hero, Projects } from '@/components/portfolio-sections';

interface ItemProps {
  url: string;
  scale: [number, number];
  position?: [number, number, number];
}

const Item = ({ url, scale, ...props }: ItemProps) => {
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

const Portfolio = () => {

  const { width: w, height: h } = useThree((state) => state.viewport)
  return (
    < Canvas orthographic camera={{ zoom: 80 }
    } gl={{ alpha: false, antialias: false, stencil: false, depth: false }} dpr={[1, 1.5]} >
      <color attach="background" args={['#0e0e12']} />
      <ScrollControls pages={5}>
        <Scroll>
          {/* Shift the initial images to the right and slightly lower to clear hero */}
          <Item url="/1.jpg" scale={[w / 3.2, w / 3.2]} position={[w / 4, -h * 0.15, 0]} />
          <Item url="/2.jpg" scale={[2, w / 3]} position={[w / 10, -h, 0]} />
          <Item url="/3.jpg" scale={[w / 3, w / 5]} position={[-w / 5, -h * 1, 0]} />
          <Item url="/4.jpg" scale={[w / 5, w / 5]} position={[w / 3.5, -h * 1.2, 0]} />
          <Item url="/5.jpg" scale={[w / 5, w / 5]} position={[w / 10, -h * 1.75, 0]} />
          <Item url="/6.jpg" scale={[w / 3, w / 3]} position={[-w / 4, -h * 2, 0]} />
          <Item url="/7.jpg" scale={[w / 3, w / 5]} position={[-w / 4, -h * 2.6, 0]} />
          <Item url="/8.jpg" scale={[w / 2, w / 2]} position={[w / 4, -h * 3.1, 0]} />
          <Item url="/12.jpg" scale={[w / 2.5, w / 2]} position={[-w / 6, -h * 4.1, 0]} />
        </Scroll>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </ScrollControls>
    </Canvas >
  )
}

export default Portfolio;
