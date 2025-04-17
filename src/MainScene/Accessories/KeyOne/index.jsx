import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'

import { extrudeSettings } from '../../../Utils/functions';

const KeyOne = () => {
    //--- round part model
    const roundShapeSize = 2;
    const roundShapeHeight = roundShapeSize / 6;
    const roundShapeRadius = roundShapeSize / 2;
    const roundShapeCenterRadius = roundShapeSize / 9 * 2;
    const roundShaoeCurveOffset = roundShapeRadius / 15;
    
    const roundShape = new THREE.Shape();
    // roundShape.moveTo(0, 0);
    roundShape.moveTo(roundShapeRadius, 0);
    roundShape.lineTo(roundShapeRadius, roundShapeHeight - roundShaoeCurveOffset);
    roundShape.quadraticCurveTo(roundShapeRadius, roundShapeHeight, roundShapeRadius - roundShaoeCurveOffset, roundShapeHeight);
    roundShape.lineTo(roundShapeCenterRadius, roundShapeHeight);
    roundShape.quadraticCurveTo(roundShapeCenterRadius - roundShaoeCurveOffset, roundShapeHeight, roundShapeCenterRadius - roundShaoeCurveOffset * 1.5, roundShapeHeight + roundShaoeCurveOffset);
    roundShape.lineTo(0, roundShapeHeight + roundShaoeCurveOffset);
    // roundShape.closePath();

    const roundPartPoints = roundShape.getPoints();

    //--- key part_1
    const keyShapePart1_radius = roundShapeCenterRadius * 0.7;
    const keyShapePart1_thickness = roundShapeSize / 3;
    const keyShapePart1_width = keyShapePart1_thickness - keyShapePart1_radius + 0.05;

    const keyShapePart_1 = new THREE.Shape();
    keyShapePart_1.moveTo(0, keyShapePart1_radius);
    keyShapePart_1.quadraticCurveTo(keyShapePart1_radius, keyShapePart1_radius / 1.25, keyShapePart1_radius, 0);
    keyShapePart_1.quadraticCurveTo(keyShapePart1_radius, -keyShapePart1_radius / 1.25, 0, -keyShapePart1_radius);
    keyShapePart_1.lineTo(-keyShapePart1_width, -keyShapePart1_radius / 2);
    keyShapePart_1.lineTo(-keyShapePart1_width, keyShapePart1_radius / 2);
    keyShapePart_1.closePath()
    
    //--- key part_2
    const keyShapePart2_radius = keyShapePart1_radius;
    const keyShapePart2_smallHeight = keyShapePart2_radius * 1.1;
    const keyShapePart2_width = roundShapeSize * 1.1;
    const keyShapePart2_thickness = keyShapePart1_thickness * 0.4;

    const keyShapePart_2 = new THREE.Shape();
    keyShapePart_2.moveTo(0, keyShapePart2_radius);
    keyShapePart_2.quadraticCurveTo(keyShapePart2_radius, keyShapePart2_radius / 1.25, keyShapePart2_radius, 0);
    keyShapePart_2.quadraticCurveTo(keyShapePart2_radius, -keyShapePart2_radius / 1.25, 0, -keyShapePart2_radius);
    keyShapePart_2.lineTo(-keyShapePart2_width, -keyShapePart2_smallHeight / 2);
    keyShapePart_2.lineTo(-keyShapePart2_width, keyShapePart2_smallHeight / 2);
    keyShapePart_2.closePath();

    //--- key part_3
    const keyShapePart3_width = keyShapePart2_thickness;
    const keyShapePart3_tailWidth = keyShapePart3_width / 30;
    const keyShapePart3_curveRadiusInner = keyShapePart3_width / 2;
    const keyShapePart3_thickness = keyShapePart2_smallHeight;
    const keyShapePart3_length = keyShapePart1_thickness + keyShapePart2_thickness;
    
    const keyShapePart_3 = new THREE.Shape();
    keyShapePart_3.moveTo(0, -keyShapePart3_width / 2);
    keyShapePart_3.lineTo(0, keyShapePart3_width / 2);
    keyShapePart_3.quadraticCurveTo(-keyShapePart3_curveRadiusInner, keyShapePart3_width / 2, -keyShapePart3_curveRadiusInner, keyShapePart3_width / 2 + keyShapePart3_curveRadiusInner);
    keyShapePart_3.lineTo(-keyShapePart3_curveRadiusInner, keyShapePart3_length);
    keyShapePart_3.quadraticCurveTo(-keyShapePart3_curveRadiusInner - keyShapePart3_tailWidth / 2, keyShapePart3_length + keyShapePart3_tailWidth / 2, -keyShapePart3_curveRadiusInner - keyShapePart3_tailWidth, keyShapePart3_length);
    keyShapePart_3.lineTo(-keyShapePart3_curveRadiusInner - keyShapePart3_width * 0.5, keyShapePart3_width / 2 + keyShapePart3_curveRadiusInner);
    keyShapePart_3.quadraticCurveTo(-keyShapePart3_width * 1.2, -keyShapePart3_width / 2, 0, -keyShapePart3_width / 2);
    keyShapePart_3.closePath();
    
    const keyOneSourceGLB = useGLTF('/assets/key_one_source.glb');
    
    return (
        <group>
            <primitive object={keyOneSourceGLB.scene} position={[-17, 0, 1]} scale={30} />
            <group  position={[9.75, 28, -0.6]} rotation={[Math.PI / 2, 0, 0]} scale={1.22}>
                <mesh name='round-part-model' position={[0, 0, 0]}>
                    <latheGeometry args={[roundPartPoints, 64]} />
                    <MaterialKey />
                </mesh>
                <mesh name='key-part-1-model' position={[0, roundShapeHeight + roundShaoeCurveOffset + 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <extrudeGeometry args={[keyShapePart_1, extrudeSettings(keyShapePart1_thickness, 0.01, 0.01, 0, 12)]} />
                    <MaterialKey />
                </mesh>
                <mesh name='key-part-2-model' position={[0, roundShapeHeight + roundShaoeCurveOffset + keyShapePart1_thickness + 0.03, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                    <extrudeGeometry args={[keyShapePart_2, extrudeSettings(keyShapePart2_thickness, 0.01, 0.01, 0, 12)]} />
                    <MaterialKey />
                </mesh>
                <mesh name='key-part-3-model' position={[-keyShapePart2_width, roundShapeHeight + roundShaoeCurveOffset + keyShapePart1_thickness + keyShapePart3_width / 2 + 0.03, keyShapePart3_thickness / 2]} rotation={[Math.PI, 0, 0]}>
                    <extrudeGeometry args={[keyShapePart_3, extrudeSettings(keyShapePart3_thickness, 0.01, 0.01, 0, 12)]} />
                    <MaterialKey />
                </mesh>
            </group>
        </group>
    )
}

export default KeyOne

const MaterialKey = () => {
    const mainColor = '#FFFFFF'
    const emissiveColor = '#666666'

    return (
        <meshPhysicalMaterial color={mainColor} emissive={emissiveColor} metalness={0.8} roughness={0.1}  side={THREE.FrontSide} />
    )
}