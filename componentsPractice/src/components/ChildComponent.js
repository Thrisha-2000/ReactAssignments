import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.method('Thrisha')}>Click me</button>
        </div>
    )
}

export default ChildComponent
