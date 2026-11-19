import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Rotating geometric hologram object with glowing vertex points and inner core
const HologramObject: React.FC<{ mousePos: { x: number; y: number } }> = ({ mousePos }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.LineSegments>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2 + mousePos.y * 0.02;
      meshRef.current.rotation.y += delta * 0.3 + mousePos.x * 0.02;
    }
    if (coreRef.current) {
      coreRef.current.rotation.x -= delta * 0.4;
      coreRef.current.rotation.y -= delta * 0.5;
    }
    if (wireRef.current) {
      wireRef.current.rotation.x += delta * 0.15;
      wireRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Outer Floating Wireframe Icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#38BDF8"
          wireframe
          transparent
          opacity={0.35}
          emissive="#38BDF8"
          emissiveIntensity={0.4}
        />
      </mesh>

      {/* Outer Wireframe Rings */}
      <lineSegments ref={wireRef}>
        <edgesGeometry args={[new THREE.OctahedronGeometry(2.7, 0)]} />
        <lineBasicMaterial color="#6366F1" transparent opacity={0.4} />
      </lineSegments>

      {/* Inner Glowing Crystal Core */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[1.1, 0]} />
        <meshStandardMaterial
          color="#A78BFA"
          roughness={0.2}
          metalness={0.8}
          emissive="#6366F1"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>
    </group>
  );
};

// Orbiting Particle Cloud
const FloatingParticles: React.FC<{ count?: number }> = ({ count = 120 }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const cyan = new THREE.Color('#38BDF8');
    const indigo = new THREE.Color('#6366F1');
    const violet = new THREE.Color('#A78BFA');

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? cyan : i % 3 === 1 ? indigo : violet;
      col[i * 3] = mixedColor.r;
      col[i * 3 + 1] = mixedColor.g;
      col[i * 3 + 2] = mixedColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.05;
      pointsRef.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Graceful CSS Fallback when WebGL or Canvas is unsupported or reduced motion is preferred
const CSSHologramFallback: React.FC = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <div className="absolute w-72 h-72 rounded-full border border-primary/20 animate-spin-slow" />
      <div className="absolute w-96 h-96 rounded-full border border-secondary/20 border-dashed animate-reverse-spin" />
      <div className="absolute w-56 h-56 rounded-full border-2 border-accent/30 animate-pulse-slow" />
      <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/15 to-accent/10 backdrop-blur-xl border border-primary/40 rotate-45 animate-float flex items-center justify-center shadow-glow-primary">
        <div className="w-20 h-20 rounded-xl border border-accent/50 -rotate-45 flex items-center justify-center font-mono text-xs text-primary">
          &lt;dev/&gt;
        </div>
      </div>
    </div>
  );
};

// Error Boundary for Three.js WebGL context
class ThreeErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.warn('ThreeJS WebGL context caught error, falling back to CSS visuals:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const HeroScene: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check screen size
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener('resize', checkScreen);

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    // Track mouse on desktop
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      window.removeEventListener('resize', checkScreen);
      mediaQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (prefersReducedMotion) {
    return <CSSHologramFallback />;
  }

  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[520px] relative">
      <ThreeErrorBoundary fallback={<CSSHologramFallback />}>
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 45 }}
          dpr={[1, isMobile ? 1.5 : 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#38BDF8" />
          <pointLight position={[-10, -10, -10]} intensity={1.2} color="#6366F1" />
          <pointLight position={[0, 5, -5]} intensity={0.9} color="#A78BFA" />

          <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
            <HologramObject mousePos={mousePos} />
            <FloatingParticles count={isMobile ? 60 : 130} />
          </Float>
        </Canvas>
      </ThreeErrorBoundary>
    </div>
  );
};
