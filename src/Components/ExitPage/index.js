import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearArray } from "../../Store/StudentInfoSlice"
import "./index.css"

function ExitPage() {
    const details = useSelector(state => state.details)
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onClickExit = () => {
        dispatch(clearArray())
        navigate("/")
    }

    return (
        <div className="exit-page-container">
            <div className="exit-page-box">
                <h1 className="exit-page-heading">Your name <span className="color">{details[0]}</span> aged <span className="color">{details[1]}</span> has been added to student system. You may now exit.</h1>
                <button onClick={onClickExit} className="exit-page-button">Exit</button>
            </div>
        </div>
    )
}

export default ExitPage