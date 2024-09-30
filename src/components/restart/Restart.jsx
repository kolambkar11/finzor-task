import "./Restart.css"
import { GrRotateLeft } from "react-icons/gr";
export default function Restart({restartSlider}){
return(
    <>
    <div className="fixed px-2 py-1 rounded-3xl right-5 bottom-2 restart-div restart-container " onClick={restartSlider}>
        <div className="refresh-icon">
            <GrRotateLeft/>
        </div>
        <span className="restart-text">Restart <span className="keyboard-alphabet">R</span></span>
    </div>
    </>
)
}