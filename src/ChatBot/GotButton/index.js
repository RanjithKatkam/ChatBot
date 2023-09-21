import { useState } from "react"
import "./index.css"

const  GotButton = (props) => {
    const [btnClicked, setGotItBtn] = useState(false)

    const onClickGotItBtn = () => {
        setGotItBtn(true)
        props.actions.handleGotButton()
    }
    

    return (
        <div className="got-it-btn-container">
            {
                btnClicked === false ? (
                    <button onClick={() => onClickGotItBtn()} className="got-it-btn">Got It</button>
                ) : (
                    null
                )
            }
            
        </div>
    )
}

export default GotButton