import React from 'react'

// function Greet(){
//     return <h1>Hi, Thrisha !!</h1>
// }

const Greet = props => {
    const {name, age} = props
    return (
        <div>
            <h1>Hello {name}, Your age is {age}</h1>
            <h4>{props.children}</h4>
        </div>
    )
}

export default Greet