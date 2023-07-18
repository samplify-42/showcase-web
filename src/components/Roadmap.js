import React, {useEffect} from 'react';
import * as THREE from 'three';

const Roadmap = () => {
  useEffect(() => {
    // Créer une scène
    const scene = new THREE.Scene();

    // Créer une caméra
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    // Créer un rendu
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Créer un cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Animer le cube
    const animate = () => {
      requestAnimationFrame(animate);

      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Nettoyer le rendu lorsque le composant est démonté
    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return null;
};

export default Roadmap;
