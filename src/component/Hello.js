import React,{Component} from "react";

class Hello extends Component{
    render(){
        return (
            <div><h1 className="xla">Welcome {this.props.name} a.k.a {this.props.nameP }</h1>
            {this.props.children}
            </div>
        )
    }
}

export default Hello;
