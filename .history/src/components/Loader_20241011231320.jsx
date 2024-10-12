import { Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-load"></span>

    </Html>
  )
}

export default Loader