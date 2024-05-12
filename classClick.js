import React, { Component } from 'react'

class classClick extends Component {

handle(){
    console.log("This is a class event")
}

  render() {
    return (
      <div>
        <button onClick={this.handle}>class event</button>
      </div>
    )
  }
}

export default classClick
