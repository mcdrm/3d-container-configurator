import React from 'react'

const Lights = () => {
    return (
        <>
            <directionalLight position={[10, 10, 50]} intensity={1.5} />
            <ambientLight intensity={0.5} />
        </>
    )
}

export default Lights