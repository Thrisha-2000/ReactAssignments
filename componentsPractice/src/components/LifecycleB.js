import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Thrisha'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifecycleB render')
        return (
            <div>
                LifecycleB
                
            </div>
        )
    }
}

export default LifecycleB
