import React from 'react'

const Hello = () => {
    // return (
    //     <div id='hello'>
    //         <h1>Hello Thrisha !!</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello'},
        React.createElement('h1',null,'Hello Thrisha')
    )
}

export default Hello