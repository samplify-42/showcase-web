import React, {useRef, useState} from 'react';
import * as THREE from 'three';
import {Canvas, useFrame} from '@react-three/fiber';
import {Text} from '@react-three/drei';

function CustomLine({args}) {
  const {position1, position2, position3, position4} = args;
  const lineRef = useRef<THREE.LineSegments>(null!);

  // Créer une géométrie pour la ligne
  const points = [position1, position2, position3, position4];

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  const lineMaterial = new THREE.LineBasicMaterial({
    color: '#fff',
    linewidth: 5,
  }); // Increased line thickness
  const line = new THREE.LineSegments(lineGeometry, lineMaterial); // Use LineSegments instead of Line

  return <primitive object={line} />;
}

function Light() {
  const spotLight = useRef<THREE.SpotLight>(null!);

  useFrame((state, delta) => {
    // Rotate the spot light
    if (spotLight.current) {
      spotLight.current.position.x =
        Math.sin(state.clock.getElapsedTime()) * 1000;
      spotLight.current.position.y = 1000;
      spotLight.current.position.z =
        Math.cos(state.clock.getElapsedTime()) * 1000;
    }
  });

  return <primitive object={spotLight} />;
}

function Roadmap(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    // Rotation de la boîte
    if (ref.current && !hovered) {
      ref.current.rotation.x += 0.01;
    }
  });

  // Store the positions of the two central boxes
  const position1 = new THREE.Vector3(-1, 0, 0);
  const position2 = new THREE.Vector3(2, 0, 0);
  const position3 = new THREE.Vector3(5, 0, 0);
  const position4 = new THREE.Vector3(-5, 0, 0);

  return (
    <group>
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.5 : 1}
        onClick={event => click(!clicked)}
        onPointerOver={event => setHovered(true)}
        onPointerOut={event => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? '#36566C' : 'orange'} />
      </mesh>
      {/* Render the Line component */}
      <CustomLine args={{position1, position2, position3, position4}} />
      {/* Render the Light component */}
      <Light />
      {/* Display text on the faces of the boxes */}
      <Text
        position={[-0.5, 0.5, 0.5]}
        rotation={[1, Math.PI / 4, 0]}
        color="black"
        fontSize={0.15}
        font="https://fonts.googleapis.com/css2?family=Roboto"
      >
        Front
      </Text>
      <Text
        position={[0.5, 0.5, -0.5]}
        rotation={[0, -Math.PI / 4, 0]}
        color="black"
        fontSize={0.15}
        font="https://fonts.googleapis.com/css2?family=Roboto"
      >
        Back
      </Text>
      {/* Repeat for other faces */}
    </group>
  );
}

export default Roadmap;
