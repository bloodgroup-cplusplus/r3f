import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import {Canvas} from "@react-three/fiber"
import "./styles.css"


function Box()
{
    return (
        <mesh>
        <boxGeometry/>
        <meshBasicMaterial color={0x00ff00} wireframe/>
        </mesh>
    )

}

function App()
{
    return (
        <Canvas camera={{position:[0,0,2]}}>
        <Box/>
        </Canvas>
    )
}


createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App/>       
    </StrictMode>
)