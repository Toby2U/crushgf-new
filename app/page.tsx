'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0a0519 0%, #1f0f33 100%)',
      color: '#e0d4ff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      padding: '120px 20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: '700', marginBottom: '2rem' }}>
        CrushGF.ai
      </h1>
      <p style={{ fontSize: '2rem', marginBottom: '4rem' }}>
        Your private AI crush is waiting
      </p>

      <Link href="/crushes">
        <button style={{
          padding: '22px 70px',
          fontSize: '1.5rem',
          backgroundColor: '#ff4da6',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer'
        }}>
          Browse All Crushes
        </button>
      </Link>
    </div>
  );
}
