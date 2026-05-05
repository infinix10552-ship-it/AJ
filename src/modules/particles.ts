import * as THREE from 'three';

export function initParticles() {
  const canvas = document.getElementById('heroCanvas') as HTMLCanvasElement;
  if (!canvas) return;

  const isMobile = window.innerWidth < 768;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: false });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

  // Particle system: optimized count for mobile
  const count = isMobile ? 800 : 2500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const originalPositions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 14;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 8;
    originalPositions[i3] = positions[i3];
    originalPositions[i3 + 1] = positions[i3 + 1];
    originalPositions[i3 + 2] = positions[i3 + 2];

    // Mix between cyan and white
    const t = Math.random();
    colors[i3] = t * 0 + (1 - t) * 1;
    colors[i3 + 1] = t * 0.898 + (1 - t) * 1;
    colors[i3 + 2] = t * 1 + (1 - t) * 1;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.02,
    vertexColors: true,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // Mouse interaction
  const mouse = { x: 0, y: 0 };
  document.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  });

  // Throttle when off-screen
  let isVisible = true;
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0.1 });
  observer.observe(canvas);

  // Resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animate
  let frameCount = 0;
  function animate() {
    requestAnimationFrame(animate);
    frameCount++;

    // Throttle to ~30fps when off-screen
    if (!isVisible && frameCount % 4 !== 0) return;

    const posArr = geometry.attributes.position.array as Float32Array;
    const time = performance.now() * 0.0003;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Gentle drift
      posArr[i3] = originalPositions[i3] + Math.sin(time + i * 0.1) * 0.03;
      posArr[i3 + 1] = originalPositions[i3 + 1] + Math.cos(time + i * 0.15) * 0.03;

      // Mouse repulsion
      const dx = posArr[i3] - mouse.x * 5;
      const dy = posArr[i3 + 1] - mouse.y * 4;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 1.5) {
        const force = (1.5 - dist) * 0.15;
        posArr[i3] += (dx / dist) * force;
        posArr[i3 + 1] += (dy / dist) * force;
      }
    }

    geometry.attributes.position.needsUpdate = true;
    points.rotation.y = time * 0.05;

    renderer.render(scene, camera);
  }

  // Fade in
  material.opacity = 0;
  setTimeout(() => {
    const fadeIn = () => {
      if (material.opacity < 0.5) {
        material.opacity += 0.005;
        requestAnimationFrame(fadeIn);
      }
    };
    fadeIn();
  }, 1300);

  animate();
}
