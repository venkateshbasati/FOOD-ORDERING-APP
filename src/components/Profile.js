import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("VB");
    }, 1000);

    console.log("useEffect");

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
      // this return statememt is like ComponentWillUnmount in class based
      // it is called when we are unmounting it
      // if you dont write this return function , whatever the we have written in useEffect..,
      // it is still be called even after we unmount this compinent I mean...
      //when we are shifting b/w About page , contact page, suppose setinterval is set  in useEffect,
      // it willbe still runnig even if we go to another page , becuse the page is not loading ..,
      //because it is to Single page application SPA , where  we're just chnaging the components so...writing return is imp
    };
  }, []);

  return (
    <div>
      <h2>My Profile</h2>
      <h4> func props: {props.name}</h4>
      <button
        onClick={() => {
          return setCount(count++);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
