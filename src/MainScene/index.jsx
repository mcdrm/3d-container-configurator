import React from 'react'

const MainScene = () => {
    return (
        <group>
            <mesh>
                <boxGeometry args={[1, 1, 1]} />
                <meshNormalMaterial />
            </mesh>
        </group>
    )
}

export default MainScene