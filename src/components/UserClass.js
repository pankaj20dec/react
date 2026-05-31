import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
  }
  
  render() {
    const {count, count1} = this.state;
    return (
      <div>
        <h2>User Class Component</h2>
        {this.props.name}
        <p>Count: {count}</p>
        <p>Count1: {count1}</p>
        <button onClick={() => {this.setState({
                count: this.state.count + 1,
                count1: this.state.count1 + 1
        })}}>Increament</button>
      </div>
    );
  }
}

export default UserClass;
