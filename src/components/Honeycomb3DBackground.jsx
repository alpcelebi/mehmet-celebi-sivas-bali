import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

export const Honeycomb3DBackground = () => {
  const mountRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Honeycomb Grid Calculations
    const radius = 1.35;
    const hexWidth = radius * Math.sqrt(3);
    const hexHeight = radius * 1.5;

    const cols = 16;
    const rows = 12;
    const count = cols * rows;

    // Hexagon Geometry (Cylinder with 6 segments)
    const geometry = new THREE.CylinderGeometry(radius, radius, 0.4, 6, 1, false);
    // Rotate to face flat towards camera
    geometry.rotateX(Math.PI / 2);

    // Dynamic Material based on theme
    const isDark = theme === "dark";
    const material = new THREE.MeshPhysicalMaterial({
      color: isDark ? new THREE.Color("#d97706") : new THREE.Color("#f59e0b"),
      emissive: isDark ? new THREE.Color("#451a03") : new THREE.Color("#fef3c7"),
      emissiveIntensity: isDark ? 0.35 : 0.15,
      metalness: isDark ? 0.8 : 0.4,
      roughness: isDark ? 0.25 : 0.4,
      transparent: true,
      opacity: isDark ? 0.75 : 0.55,
      wireframe: false,
    });

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    instancedMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    // Precalculate base positions
    const dummy = new THREE.Object3D();
    const positions = [];
    const offsetX = (cols * hexWidth) / 2;
    const offsetY = (rows * hexHeight) / 2;

    let index = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = c * hexWidth + (r % 2 ? hexWidth / 2 : 0) - offsetX;
        const y = r * hexHeight - offsetY;
        const z = -2;

        positions.push({ x, y, z, originalZ: z });

        dummy.position.set(x, y, z);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(index, dummy.matrix);
        index++;
      }
    }
    instancedMesh.instanceMatrix.needsUpdate = true;
    scene.add(instancedMesh);

    // Floating Golden Pollen Particles (Sparkling Honey Dust)
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 35;
      particlePositions[i + 1] = (Math.random() - 0.5) * 30;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: isDark ? 0xfbbf24 : 0xd97706,
      size: 0.15,
      transparent: true,
      opacity: isDark ? 0.8 : 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Lights
    const ambientLight = new THREE.AmbientLight(
      isDark ? 0xffffff : 0xfffaed,
      isDark ? 0.9 : 1.2
    );
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(
      isDark ? 0xf59e0b : 0xd97706,
      isDark ? 2.5 : 2.0,
      40
    );
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    const goldLight = new THREE.DirectionalLight(0xfbbf24, isDark ? 1.4 : 1.0);
    goldLight.position.set(5, 10, 8);
    scene.add(goldLight);

    // Mouse Tracking & Parallax
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const handleMouseMove = (e) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Scroll Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Window Resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Parallax camera tilt
      camera.position.x = currentMouseX * 1.5;
      camera.position.y = -currentMouseY * 1.5;
      camera.lookAt(0, 0, 0);

      // Light follows mouse
      pointLight.position.x = currentMouseX * 10;
      pointLight.position.y = -currentMouseY * 8;

      // 3D Undulating Wave Effect on Honeycomb Cells
      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = positions[idx];

          // Wave equation across hexagonal grid
          const wave =
            Math.sin(elapsedTime * 1.4 + c * 0.35 + r * 0.45) * 0.45 +
            Math.cos(elapsedTime * 0.8 + c * 0.2) * 0.25;

          // Mouse proximity displacement
          const distToMouse = Math.hypot(
            p.x - currentMouseX * 8,
            p.y - -currentMouseY * 6
          );
          const mouseLift = Math.max(0, 1.2 - distToMouse * 0.15);

          dummy.position.set(p.x, p.y, p.z + wave + mouseLift);
          // Subtle rotation
          dummy.rotation.z = Math.sin(elapsedTime * 0.5 + idx * 0.02) * 0.05;

          dummy.updateMatrix();
          instancedMesh.setMatrixAt(idx, dummy.matrix);
          idx++;
        }
      }
      instancedMesh.instanceMatrix.needsUpdate = true;

      // Rotate particle dust
      particles.rotation.y = elapsedTime * 0.04;
      particles.rotation.x = Math.sin(elapsedTime * 0.02) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75 dark:opacity-90 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
};
