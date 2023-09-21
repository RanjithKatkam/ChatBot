import { useState } from "react"
import "./index.css"

const SlotSelection = (props) => {
    const [isDateSelected, setDateSelection] = useState(true)
    const [isTimeSelected, setTimings] = useState(false)
    const [date, setDate] = useState(null)

    const selectedDate = (eachDate) => {
        const Date = eachDate.getDate()
        const month = eachDate.toLocaleString("default", {month: "short"}).toUpperCase()
        setDate(`${Date} ${month}`)
        setDateSelection(false)
        setTimings(true)
    }

    const generateDates = () => {
        const today = new Date()
        const datesList = []
        datesList.push(today)
        for (let i = 1; i < 3; i++ ){
            const nextDay = new Date(today)
            nextDay.setDate(today.getDate() + i)
            datesList.push(nextDay)
        }
        return (
            <div className="dates">
                {
                    datesList.map(eachDate => (
                        <button key={eachDate.getDate()} onClick={() => selectedDate(eachDate)} className="date-day-month-container">
                            <h1><span className="date">{eachDate.getDate()}</span><span className="month">{eachDate.toLocaleString("default", {month: "short"}).toUpperCase()}</span></h1>
                            <p className="day">{eachDate.toLocaleDateString("default", {weekday: "short"}).toUpperCase()}</p>
                       </button>
                    ))
                }
             </div>
        )
        
    }

    const selectedTimings = (timing) => {
        setTimings(false)
        props.actions.selectedSlot(`${date}, ${timing}`)
    }

    const generateTimings = () => {
       return( 
            <div className="time-container">
                <div>
                    <h1 className="timing">MORNING</h1>
                    <div className="time-btn-container">
                        <button className="btn" onClick={() => selectedTimings("9 AM")}>09:00 AM</button>
                        <button className="btn" onClick={() => selectedTimings("10 AM")}>10:00 AM</button>
                        <button className="btn" onClick={() => selectedTimings("11 AM")}>11:00 AM</button>
                        <button className="btn" onClick={() => selectedTimings("12 AM")}>12:00 AM</button>
                    </div>
                </div>
                <div>
                    <h1 className="timing">AFTERNOON</h1>
                    <div className="time-btn-container">
                        <button className="btn" onClick={() => selectedTimings("2 PM")}>02:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("3 PM")}>03:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("4 PM")}>04:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("5 PM")}>05:00 PM</button>
                    </div>
                </div>
                <div>
                    <h1 className="timing">EVENING</h1>
                    <div className="time-btn-container">
                        <button className="btn" onClick={() => selectedTimings("6 PM")}>06:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("7 PM")}>07:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("8 PM")}>08:00 PM</button>
                        <button className="btn" onClick={() => selectedTimings("9 PM")}>09:00 PM</button>
                    </div>
                </div>
            </div>
       )
    }


    return (
        <div className="slot-container">
            { isDateSelected ? generateDates() : null }
            { isTimeSelected ? generateTimings() : null}
        </div>
    )
}

export default SlotSelection