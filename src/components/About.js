import React from "react";
import User from "./uSER.JS";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    // console.log("Parent componentDidMount");
  }
  render() {
    // console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        <User name={"Deepika Areti (function)"}/>
        <UserClass
          name="First"
          location="Andhra pradesh class"
        />
        {/* <UserClass
          name= "Second"
          location="Andhrapradesh class"
        /> */}
      </div>
    );
  }
}
export default About;
