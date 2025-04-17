import React from 'react'

const Lights = () => {
    return (
        <>
            <directionalLight position={[10, 10, 50]} castShadow shadow-mapSize={[1024, 1024]} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10} intensity={1.5} />
            <ambientLight intensity={0.5} />
        </>
    )
}

export default Lights