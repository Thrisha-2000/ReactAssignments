import React, { Component } from 'react'
import RegularComp from './RegularComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'
export class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Thrisha'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
                this.setState({
                    name: 'Thrisha'
                })}, 2000)
    }

    render() {
        console.log('***************Parent*****************')
        return (
            <div>
               <RegularComp name={this.state.name}/>
               <PureComp name={this.state.name}/>

               {/* <MemoComp name={this.state.name}/> */}
            </div>
        )
    }
}

export default ParentComp
