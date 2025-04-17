import { Grid } from '@react-three/drei'
import React from 'react'

const Ground = () => {
    const gridConfig = {
      cellSize: 2.5,
      cellThickness: 0.7,
      cellColor: '#BBBBBB',
      sectionSize: 5,
      sectionThickness: 1,
      sectionColor: '#FFFFFF',
      fadeDistance: 100,
      fadeStrngth: 30,
      followCamera: true,
      infinitedGrid: false
    }

    return (
        <Grid position={[0, 0, 0]} args={[300, 300]} {...gridConfig} />
    )
}

export default Ground