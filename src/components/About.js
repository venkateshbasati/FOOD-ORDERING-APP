import { Outlet } from "react-router-dom";
import Profile from "./ProfileClass";
import ProfileFuncBased from "./Profile";
import { Component } from "react";
import UserContext from "../utils/UserContext";




// writing  import React from  "react"; also correct but jst that we have to use extends React.Component
// we can also use outlet thing instead of profile class based compon

// everytime class based component is loaded/refreshed (react render life cycle) following are called in order
//constructor, then render method, then componentDidMount()

// see this imp  https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

/**
 *
 * FUNCTIONAL BASED COMP 1st one
 */
// const About=()=>{
//     return (
//         <div>
//         <h1>About us</h1>
//         {/* <ProfileFuncBased name = {"funcbased comp"}/> */}
//         <Profile name ={"class Based Comp"} />

//         </div>

//     );

// }

class About extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
            count2:1
        }
        console.log(" Parent-constr")
    }

    componentDidMount(){
        //right place to call API CALL
        console.log(" Parent-componentDidMount")
    }
  render() {
    console.log(" Parent-render")
    return (
      <div>
        <h1>About us</h1>
        {
          // using UserContext as component in class based comp by writing UserContext.Consumer
          //Because here we dont ave something like useContext like in func based so we write like below
          // Now this takes  up the JSX which is function that takes up the value whatever context holds 
        }
        <UserContext.Consumer>
          {({user})=>
           
            (<span className="font-semibold text-gray-800 shadow-md bg-orange-200 ">This is about : {user.name}</span>)
          
            } 

          {
            //value is object ={
            //   email:"VB@gmail",
            //   name : "Venkatesh Basati"

            // }
          }
        </UserContext.Consumer>
        {/* <ProfileFuncBased name = {"funcbased comp"}/> */}
        <Profile name={"First Child"} />
        <Profile name={"Second Child"} />
      </div>
    );
  }
}

export default About;
