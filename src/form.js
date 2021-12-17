import React, {useState} from "react";
import './Form.css'

const Form = (props) => {
    
    const [city, setCity] = useState('')
    
    const sendData = () => {
                 
        props.getDataFromServer(city)
    }
    
    return (
            <div className="container">
                <input
                    type="text" 
                    placeholder="Enter City Name"
                    onChange = {(event) => {setCity(event.target.value)}}
                />
                <button className="button" onClick={sendData} type="submit">Search</button>
                </div>
    )
}

export default Form