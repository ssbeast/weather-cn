import React from "react";
import './App.css'

const ApiData = (props) => {

    return (
        
        <div className="container mt-5">
           <div className="col-sm-12">
             <div className="card bg-dark">
                 <div className="card-body ">
                    <table className="table text-white">
                        <thead>
                            <tr>
                                <th>City Name</th>
                                <th>Current Temperature</th>
                                <th>Current Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                             <tr>
                                 <td>{props.info.name}</td>
                                 <td>{props.info.temp} &deg;c</td>
                                 <td>{props.info.weather}</td>
                             </tr>
                        </tbody>
                    </table>
                 </div>
             </div>
           </div>

        </div>
    )
}

export default ApiData