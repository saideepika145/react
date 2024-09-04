import { useEffect, useState } from "react";

const User = ({ name }) => {
 
  const [count] = useState(0);
  const [count1] = useState(1);
  useEffect(() => {
    const timer = setInterval(() => {
      //     console.log("React counter");
      // },1000);
      console.log("React Counter");
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="user-class">
      <h2>count: {count}</h2>
      <h2>count1 :{count1}</h2>
      <h2>Name: {name}</h2>
      <h3>Location : Andhra Pradesh</h3>
    </div>
  );
};
export default User;
