import { Html, useProgress} from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 14,
          color: '#f1f1f1',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {progress.toFixed(2)}</p>

    </Html>
  )
}

export default Loader