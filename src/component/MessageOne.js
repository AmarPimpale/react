import React from "react";

class MessageOne extends React.Component{
    constructor(){
        super()
            this.state = {
                message : "Welcome Chinmay"
            }
    }
    change(){
        this.setState ({
            message:"Welcome Amar"})
    }
    render(){
        return(
            <div>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.change()}>Action</button>
            </div>
        )
    }
}

export default MessageOne