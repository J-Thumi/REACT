import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:'welcome'
        }
    }

    changemsg(){
        this.setState({message:'Thank you for subscribing'})
    }
    render(){
        return (
            <div>
<h1>{this.state.message}</h1>
<button onClick={()=> this.changemsg()}>suscribe</button>
{/* events use camel case */}
            </div>
        
    )
    }
}

export default Message 