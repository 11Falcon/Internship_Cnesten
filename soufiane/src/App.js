import './App.css';
import React from 'react';
import 'tippy.js/dist/tippy.css'
import Header from './components/Header'
import {Canvas} from '@react-three/fiber'
import Box from './components/Box';
import { useGLTF,ContactShadows } from '@react-three/drei'
import { useControls } from 'leva'
import Model from './components/Ash';
import { Light, MODELS } from './Lighting';



function App() {

  

  const { model } = useControls({ model: { value: 'Beech', options: Object.keys(MODELS) } })

  return(
    <div className='App'>
    <Header/>
         <>
            <Canvas>
            {Light.map((element, index) => (<React.Fragment key={index}>{element}</React.Fragment>))}
            <group position={[0, -10, 0]}>
            <Model position={[0, 0.25, 0]} url={MODELS[model]} />
            <ContactShadows scale={20} blur={10} far={20} />
            </group>
            <Box position={[-1.2, 0, 0]} />,
            <Box position={[1.2, 0, 0]} />,
            </Canvas>
        </>
    </div>
  )
}
export default App
// Silently pre-load all models
Object.values(MODELS).forEach(useGLTF.preload)
