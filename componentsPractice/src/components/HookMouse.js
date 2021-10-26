import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const mousePosition = (e) => {
        console.log('mouse moved')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect invoked')
        window.addEventListener('mousemove', mousePosition)

        return () => {
            console.log('Clean up code rendered.')
            window.removeEventListener('mousemove',mousePosition)
        }
    }, [])



    return (
        <div>
            X - {x}
            Y - {y}
        </div>
    )
}

export default HookMouse
