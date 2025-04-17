import { Canvas } from '@react-three/fiber';

import './App.css';
import CavansEnv from './CanvasEnv';
import MainScene from './MainScene';

function App() {
    return (
        <div className="App">
            <Canvas
                camera={{
                    position: [0, 0, 10],
                    fov: 45,
                    near: 1,
                    far: 100000
                }}
                style={{
                    height: '100vh'
                }}
            >
                <CavansEnv />
                <MainScene />
            </Canvas>
        </div>
    );
}

export default App;
