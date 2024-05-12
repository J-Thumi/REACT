import React, { Component } from 'react'

class count extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increment(){
        
        this.setState({ count:this.state.count+1 }, ()=>{
            console.log("call back value", this.state.count)
        }) 
         console.log(this.state.count)
    }
  render() {
    return (
      <div>
        count-{this.state.count}

        <div><button onClick={()=> this.increment()}>increase</button></div>
      </div>
    )
  }
}


export default count