import React, { Component } from 'react'

class Bind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:'Hello'
      }
    }
    
    changemsg(){
        this.setState({message:'goodbye'})
    }
    render(){
        return (
            <div>
<h1>{this.state.message}</h1>
<button onClick={()=> this.changemsg()}>suscribe</button>
            </div>
        
    )
    }
}

export default Bind
