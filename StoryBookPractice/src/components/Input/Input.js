import React from 'react'
import './Input.css'

function Input(props) {
    const {variant, children, ...rest} = props
    return (
       <input type='text' className={`input ${variant}`} {...rest}></input>
    )
}

export default Input
