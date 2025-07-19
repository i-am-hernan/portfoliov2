import Image from "next/image";
import Scene from "@/components/three/Scene";

export default function HomePage() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h1>
      <Scene />
      {/* Add About, Projects, Contact sections here */}
    </main>
  );
}
