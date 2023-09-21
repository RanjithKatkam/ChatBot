import { useNavigate } from "react-router-dom"
import "./index.css"

const MyChatBot = () => {

    const navigate = useNavigate()
    const onClickEnrollBtn = () => {
        navigate("/chatbot")
    }

    return (
        <div className="main-container">
            <div className="sub-container">
                <h1 className="heading">Enter into Student Info System</h1>
                <button onClick={onClickEnrollBtn} className="enrollBtn">Enroll Now!</button>
            </div>
        </div>
    )
}

export default MyChatBot