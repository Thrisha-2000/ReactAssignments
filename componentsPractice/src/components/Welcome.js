import React,{ Component } from 'react'

class Welcome extends Component{
    render(){
        const {name, age} = this.props
        return (
            <div>
            <h1>Hello {name}, Your age is {age}</h1>
            <h4>{this.props.children}</h4>
        </div>
        )
    }
}

export default Welcome