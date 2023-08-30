// Lighting.js

import React from 'react';
import {OrbitControls} from '@react-three/drei'


export const Light = [
  <ambientLight intensity={0.5} />,
  <hemisphereLight color="white" groundColor="blue" intensity={0.75} />,
  <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />,
  <OrbitControls />,
  <hemisphereLight color="white" groundColor="blue" intensity={2} />,
  <spotLight position={[50, 50, 10]} angle={0.15} penumbra={1} />
];
export const MODELS = {
  Beech: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-beech/model.gltf',
  Lime: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-lime/model.gltf',
  Spruce: 'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/tree-spruce/model.gltf',
  asg:"/scene.gltf"
}