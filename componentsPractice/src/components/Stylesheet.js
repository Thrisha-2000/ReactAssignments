import React from 'react'
import './myStyles.css'
function Stylesheet(props) {
    const className = props.primary ? ('primary'):('')
    return (
        <div>
            <h2 className={`${className} font`}>Stylesheet</h2>
        </div>
    )
}

export default Stylesheet
