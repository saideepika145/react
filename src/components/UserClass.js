import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name +"Child Constructor");
    this.state = {
      count: 0,
      count2: 2,
      userInfo:{},
      timer:""
    };
  }
  async componentDidMount() {
    // console.log(this.props.name +"Child componentDidMount");
    const data=await fetch("https://api.github.com/users/akshay");
    const json=await data.json();
    this.setState({
        userInfo:json
    })
    // this.state.timer=setInterval(()=>{
    //     console.log("React counter");
    // },1000);
  }
  componentDidUpdate(){
    console.log(this.props.name +"componentDidUpdate");
  }
  componentWillUnmount(){
    // clearInterval(this.state.timer)
    console.log(this.props.name +"componentWillUnmount");
  }
  render() {
    // console.log(this.props.name +"Child Render");
    let { name, location } = this.state.userInfo;
    let { count, count2 } = this.state;
    return (
      <div className="user-class">
        <h2>Count:{count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase count
        </button>
        <h2>Count2:{count2}</h2>
        <h2>Name :{name}</h2>
        <h3>Location :{location}</h3>
      </div>
    );
  }
}
export default UserClass;
