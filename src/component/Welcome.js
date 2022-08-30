
// function Welcome(){
//     return (
//         <h1>Hello</h1>
//     )
// }

import React from "react";

const Welcome =()=> {
    // return (
        // <div>
        //     <h1>Welcome</h1>
        //     <h2>Hello</h2>            // with the react JSX
        // </div>
        //how
        
    // )
    // return React.createElement('h1',null,"hello")  normal react dom element
    // return React.createElement('div',null,"<h1>hello<h1/>")  /get last element as content not in tag of div or not a react dom node
    // return React.createElement('div',null,'h1','hello')  // get last two as content
    return React.createElement('div',{className:'classOne'},React.createElement('h1',{className:'classTwo'},"hello"))
    
    

}

export default Welcome;


// with JXS class mentioned with className 

// with out JSX react.create element returns HTML element 