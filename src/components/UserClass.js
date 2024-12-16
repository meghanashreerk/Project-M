import React from "react";
// or import { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends React.Component {
  //  or write it as -- class UserClass extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        login: "Meg",
        avatar_url: "", //some url can be added here, simply kept it null
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/meghanashreerk");
    const json = await data.json();
    console.log("data", json);
    this.setState({
      userInfo: json,
    });
    this.timer = setInterval(() => {
      console.log("setting interval to test");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("componentdidupdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer); //stop set interval
    console.log("componentwillunmount");
  }

  render() {
    const { login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>{login}</h2>
        <img src={avatar_url}></img>
        {/* using context api in class comp */}
        <h3>
          User:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </h3>
      </div>
    );
  }
}
export default UserClass;
