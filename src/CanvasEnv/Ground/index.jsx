import { Grid } from '@react-three/drei'
import React from 'react'

const Ground = () => {
    const gridConfig = {
      cellSize: 5,
      cellThickness: 0.7,
      cellColor: '#BBBBBB',
      sectionSize: 10,
      sectionThickness: 1,
      sectionColor: '#FFFFFF',
      fadeDistance: 300,
      fadeStrngth: 70,
      followCamera: true,
      infinitedGrid: false
    }

    return (
        <Grid position={[0, 0, 0]} args={[1000, 1000]} {...gridConfig} />
    )
}

export default Ground