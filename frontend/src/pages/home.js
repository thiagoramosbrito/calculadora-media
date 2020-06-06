import React from "react";
import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({ value: event.target.value });
  // }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
    if (this.state.nota2) {
      this.setState({ result: (this.state.nota1 + this.state.nota2) / 2 });
    }
    console.log(">>>>>>> evt.target.name", evt.target.name);
    console.log(">>>>>>> this.state", this.state);
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Nota 1
          <input
            type="number"
            name="nota1"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Nota 2
          <input
            type="number"
            name="nota2"
            value={this.state.valueTwo}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Nota 3
          <input
            type="number"
            name="nota3"
            value={this.state.valueThree}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Média
          <input
            type="text"
            value={this.state.result}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    );
  }
}
