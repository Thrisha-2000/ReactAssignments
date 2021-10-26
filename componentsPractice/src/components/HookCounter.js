import React, {useState, useEffect} from 'react'

function HookCounter() {
    const [count, setState] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Updated document-title')
        document.title = `Clicked ${count} times`
    },[count])

    return (
        <div>
            <input type='text' value={name} onChange={e => setName(e.target.value)} />
            <h1>Count - {count} </h1>
            <button onClick={() => setState(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setState(prevCount => prevCount - 1)}>Decrement</button>
            
        </div>
    )
}

export default HookCounter
