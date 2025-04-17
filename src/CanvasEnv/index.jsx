import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Ground from './Ground'
import Lights from './Lights'

const CavansEnv = () => {
    return (
        <>
            <OrbitControls
                // minDistance={10}
                // maxDistance={400}
                dampingFactor={0.5}
                rotateSpeed={0.5}
            />
            <Environment preset='city' background backgroundIntensity={1.5} blur={1} />
            <Ground />
            <Lights />
            <axesHelper position={[0, 0, 0]} args={[50, 50, 50]} />
        </>
    )
}

export default CavansEnv