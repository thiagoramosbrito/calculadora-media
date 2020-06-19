import React, { Component } from "react";
//import "./Input.scss";

export default class Input extends Component {
  render() {
    return (
      <input
        name={this.props.name}
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}
