"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const Hero3DScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const currentMount = mountRef.current;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Geometry
    const shapes = [];
    const geometry1 = new THREE.IcosahedronGeometry(1, 0);
    const material1 = new THREE.MeshStandardMaterial({ color: 0x9D4EDD, emissive: 0x9D4EDD, emissiveIntensity: 0.5, roughness: 0.5 });
    const shape1 = new THREE.Mesh(geometry1, material1);
    shape1.position.set(-2, 1, 0);
    scene.add(shape1);
    shapes.push(shape1);

    const geometry2 = new THREE.TorusKnotGeometry(0.7, 0.2, 100, 16);
    const material2 = new THREE.MeshStandardMaterial({ color: 0x4ADEDE, emissive: 0x4ADEDE, emissiveIntensity: 0.4, roughness: 0.5 });
    const shape2 = new THREE.Mesh(geometry2, material2);
    shape2.position.set(2, -1, 0);
    scene.add(shape2);
    shapes.push(shape2);
    
    const geometry3 = new THREE.BoxGeometry(1, 1, 1);
    const material3 = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xaaaaaa, emissiveIntensity: 0.2, roughness: 0.8 });
    const shape3 = new THREE.Mesh(geometry3, material3);
    shape3.position.set(0, -0.5, -2);
    scene.add(shape3);
    shapes.push(shape3);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0x4ADEDE, 20);
    pointLight2.position.set(-5, -5, 2);
    scene.add(pointLight2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.001 * (index + 1);
        shape.rotation.y += 0.002 * (index + 1);
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <motion.div 
      ref={mountRef} 
      className="absolute inset-0 z-0 opacity-40 dark:opacity-50"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: [0, 0.4], scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
    />
  );
};

export default Hero3DScene;
