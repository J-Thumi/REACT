import React  , {Component} from 'react'

class welcome extends Component{
    render (){
        const {namee,hero} = this.props
        return <h1>Class component hello {namee} you are {hero}</h1>
    }
}

export default welcome