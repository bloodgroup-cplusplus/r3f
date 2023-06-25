import Box from "./Box"
import { Canvas } from "@react-three/fiber"
export default function App()
 {
    return (

        <Canvas camera ={{position:[0,0,2]}}>
            <Box position={[-0.75,0,0]} name="A" />
            <Box position={[0.75,0,0]} name="B"/>
            <Box position={[1,0,0]} name="C"/>
            <Box postiion={[3,0,0]} name="D"/>
        </Canvas>
    )
 } 