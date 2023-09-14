import React from "react";

// this is class based component in react
// this is not javscript class type
//render method in class based is a mandatory method to use
//render method  returns JSX like functional compnen returns JSX in func based

// read HW :  why do use super(props) in class based component in react

// everytime class based component is loaded/refreshed (react render life cycle) following are called in order
//constructor, then render method, then componentDidMount()

class Profile extends React.Component{

    constructor(props){
        super(props)

        this.state={
            userInfo:{
                name:"",
                id:""
            }
        }

        console.log("child-constr" +this.props.name)
    }

    async componentDidMount(){
        
        const data=await fetch("  https://api.github.com/users/venkateshbasati")
        const json=await data.json()

        this.setState({
            userInfo :json
        })
        console.log("child-componentDidMount" +this.props.name)
    }
    componentDidUpdate(){
        console.log("component Did Update")
        //this is called when a state changes , we can see render is called/being done and
        // after this render this component did update is called.

        // while componentDidMount is called after intial render
    }

    componentWillUnmount(){
        console.log("component Will Unmount")
        // this is called when we are unmounting  contents from the DOM like 
        // when we are going to another page ..
        //check once one in console
    }


    
    render(){
        console.log("child-render" +this.props.name)
        const {count}=this.state //object destructing
        return (
            <>
            <h2>My Profile Details</h2>
            <h3>Name: {this.state.userInfo.login}</h3> 
            {
                //even if we dont use constructor, we still be able to write this.props.name,  it works but for usestate kinda
                //in class based we have to use constructor and super
            } 

            <h3>Github Id:{this.state.userInfo.id}</h3>


            {/* <button onClick={()=>{
                // in class based WE DO NOT MUTATE STATE DIRECTLY. (in func based we do like setCount(1))
                //NEVER DO  this.state=something, so use this.setState
                this.setState({
                    count:1
                })
            }}> Set count</button> */}
            </>
        )
    }
}

/**
 * This is how sequence follows 
 * usually after first child-render, child-componentDidMount is called but here in this case 
 * we have to async wait fetch, so  Parent-componentDidMount is called first otherwise  child-componentDidMount 
 * before Prent-componentDidMount
 * 
 * at last after  child render,  component Did Update is called.
 * 
 * 
 * 
 *  Parent-constr
  Parent-render
 child-constr  
 child-render
  Parent-componentDidMount
 child-componentDidMount
 child-render(due to set state)
 component Did Update
 * 
 * 
 * Note :  For multiple child components:
 * Parent Constructor
 * the parent component's constructor is called first, 
 * followed by its render method. 
 * Then, each child component's constructor and render method are called in the order they appear
Parent Render
Child 1 Constructor
Child 1 Render
Child 2 Constructor
Child 2 Render
Child 1 componentDidMount
Child 2 componentDidMount
Parent componentDidMount
 * 
 * 
 */

export default Profile;