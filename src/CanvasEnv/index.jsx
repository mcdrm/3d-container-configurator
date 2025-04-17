import React from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import Ground from './Ground'
import Lights from './Lights'

const CavansEnv = () => {
    return (
        <>
            <OrbitControls
                minDistance={10}
                maxDistance={400}
                dampingFactor={0.5}
                rotateSpeed={0.5}
            />
            <Environment files={'/assets/background/hilly_terrain_01_8k.hdr'} background blur={1} />
            <Ground />
            <Lights />
        </>
    )
}

export default CavansEnv