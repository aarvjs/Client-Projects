'use client';

import { useState, useCallback } from 'react';
import Preloader from './Preloader';

export default function PreloaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  const handleComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Preloader onComplete={handleComplete} />
      <div
        className={`website-content ${loading ? 'loading' : ''}`}
        style={{ transition: 'opacity 0.6s ease-in-out' }}
      >
        {children}
      </div>
    </>
  );
}
