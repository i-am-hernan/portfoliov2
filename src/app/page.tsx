import { Portfolio } from '@/components/three/'
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <div className='h-screen w-screen'>	<main className='h-full w-full'>
        <Portfolio />
      </main></div>
    </Suspense>
  );
}
