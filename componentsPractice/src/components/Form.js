import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             skill: ''
        }
    }
    
    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    commentsHandler = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    skillHandler = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(`${this.state.username} ${this.state.comments} ${this.state.skill}`)
        
    }

    render() {
        const {username, comments, skill} = this.state
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label>Username : </label>
                    <input type='text' value={username} onChange={this.usernameHandler}/>
                </div>

                <div>
                    <label>Comments : </label>
                    <textarea value={comments} onChange={this.commentsHandler}/>
                </div>

                <div>
                    <label>Skill : </label>
                    <select value={skill} onChange={this.skillHandler}>
                        <option>React</option>
                        <option>Javascript</option>
                        <option>HTML</option>
                    </select>
                </div>

                <button type="submit" >Submit</button>
                
            </form>
        )
    }
}

export default Form
