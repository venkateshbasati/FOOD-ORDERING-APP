import { useContext } from "react";
import UserContext from "../utils/UserContext";


const Footer = () => {
  const {user}=useContext(UserContext)
  // console.log(user)
    return <div>
      <p className="bg-slate-600 text-white  rounded-md font-semibold m-2 p-1 border border-grey shadow-lg text-base ">This site is owned by : {user.name}</p>
      </div>;
  };

  export default Footer;