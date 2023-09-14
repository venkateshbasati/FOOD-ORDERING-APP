import { createContext } from "react";

const UserContext=createContext({
    user :{
    name: "Venkatesh",
    email : "dummy@gmail.com"


}
    
   
})

UserContext.displayName="UserContext"
//the above line is just for react dev-tools to display by name Usercontext,(INGENERAL it will display like Context-Provider in react dev tool Components ) 
//because if we have many Contexts , so to differentiate which context is being used at diff location we use .displayName



export default UserContext;

//state and props are tied to the Components but ,
// REACT Context is like a central library where we can store data. Actually,  We can pass data b/w componets through props but,
// when we want use that dta across all or more number of components , CONTEXT is usful therefore we can avoid props drilling
// with usage of Context we can use data where ever we want, we dont have to pass props in unnecessary components(props driling)

//createContext is function at the end of the day

// Context is like useState for whole aplication

//UserContext  is used in Footer here , just as an example (checking Footer component )

//Just remember : react router dom also use React-Context concept behind the scenes when using routers