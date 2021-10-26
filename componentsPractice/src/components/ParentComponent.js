import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: 'Ramulu'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    
    render() {
        return (
            <div>
                <ChildComponent method = {this.greetParent}/>
            </div>
        )
    }
}

export default ParentComponent
