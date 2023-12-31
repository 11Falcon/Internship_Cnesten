// import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box(props){
    const mesh = useRef()
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)

    useFrame(()=>{
        mesh.current.rotation.x += 0.01
        mesh.current.rotation.y += 0.01
    })
    return (
        <>
    <mesh
      {...props}
      ref={mesh}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => (event.stopPropagation(), hover(false))}
      onPointerOut={(event) => hover(true)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? 'orange' : 'hotpink'} />
                {/* <boxGeometry args={[2,2,2]}/>
                <meshBasicMaterial color={'orange'}/> */}
            </mesh>
        </>
    )
}

// import { createRoot } from 'react-dom/client'
// import React, { useRef, useState } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'

// export default function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// createRoot(document.getElementById('root')).render(
//   <Canvas>
//     <ambientLight />
//     <pointLight position={[10, 10, 10]} />
//     <Box position={[-1.2, 0, 0]} />
//     <Box position={[1.2, 0, 0]} />
//   </Canvas>,
// )