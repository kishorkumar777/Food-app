import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor() {
    super();
    console.log("parent custructor is called");
  }

  componentDidMount() {
    console.log("parent component did mount called");
  }

  render() {
    console.log("parent render is called")
    return (
      <div>
        <h1>About us</h1>
        <UserClass />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <UserClass name={"kish (class)"} />
//     </div>
//   );
// };

export default About;
