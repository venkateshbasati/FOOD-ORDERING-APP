import { useRouteError } from "react-router-dom";
//react-router-dom catches  errors in routers and with help of
// useRouteError is hook which gives us exact root cause for error and
// it allows us to display error message to user 


const Error = () => {
    const err=useRouteError()
    //err is error object in which we'll have status.Text , status(like 404 etc) , errordata in 'data' key
    // console.log(err)
  return (
    <>
      <h2> {err.data} &#x1F62D; </h2>    

    </>
  );
};

export default Error;
