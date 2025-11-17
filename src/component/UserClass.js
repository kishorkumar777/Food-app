import React from "react";

class UserClass extends React.Component {
    constructor(props){
        super(props)

        this.state={
         userInfo:{
           name : "dummy",
           location: "dummy",
           email: "dumy@email.com"
         }
        }

        // console.log( this.props.name + "child constructor is called");
        
      }
     async componentDidMount() {
        // console.log( this.props.name +"child component did mount is called")
        const data = await fetch("https://api.github.com/users/kishorkumar77");
        const json = await data.json();
        this.setState({
           userInfo: json,
        })
        console.log(json)
      }
  render() {
    // console.log(this.props.name +"child render is called")
    const {login, location, email} = this.state.userInfo;
    return (
      <div className="user-box">
        <h2>Name: {login}</h2>
        <h2>Location: {location}</h2>
        <h2>Email: {email}</h2>
      </div>
    );
  }
}

export default UserClass;
