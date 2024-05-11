import React  , {Component} from 'react'

class welcome extends Component{
    render (){
        return <h1>Class component hello {this.props.namee} you are {this.props.hero}</h1>
    }
}

export default welcome