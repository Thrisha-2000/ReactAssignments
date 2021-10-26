import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: true
        }
    }
    
    render() {
        // if (this.state.isLoggedIn){
        //     return <div>Hi Thrisha</div>
        // }
        // else{
        //     return <div>Hi Guest</div>
        // }

        // let message
        // if (this.state.isLoggedIn){
        //     message = <div>Hi Thrisha</div>
        // }
        // else{
        //     message = <div>Hi Guest</div>
        // }
        // return (<div>{message}</div>)

        return this.state.isLoggedIn?(
            <div>Hi Thrisha</div>
        ):(
            <div>Hi Guest</div>
        )

        //return this.state.isLoggedIn && <div>Hi Thrisha</div>
        
    }
}

export default UserGreeting
