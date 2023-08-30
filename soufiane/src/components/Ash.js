import { useGLTF} from '@react-three/drei'


export default function Ash({ url, ...props }) {
    const { scene } = useGLTF(url)
    // <primitive object={...} mounts an already existing object
    return <primitive object={scene} {...props} />
  }