import { useState, useEffect } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("set interval of function comp");
    }, 1000);
    //to unmount
    return () => {
      clearInterval(timer);
      console.log("set interval of function comp has stopped");
    };
  }, []);

  return (
    <div className="user-card">
      <h2>{props.name}</h2>
      <h3>{count}</h3>
      <h4>meghanashreerk@gmail.com</h4>
    </div>
  );
};

export default User;
