import React from "react";
import Input from "../components/Input";
import "./home.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayScores: [],
      inputsNotas: 4,
      result: "",
      input: ["+", "+"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInput = this.addInput.bind(this);
    this.makeMedia = this.makeMedia.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value,
    });
  }

  handleSubmit(event) {
    alert("Um nome foi enviado: " + this.state.value);
    event.preventDefault();
  }

  makeMedia(event) {
    event.preventDefault();
    console.log(">>>>>>> makeMedia");
    let notas = Object.entries(this.state).filter((key) => {
      return key[0].includes("nota");
    });

    console.log(">>>>>>> makeMedia notas", notas);

    if (notas.length > 1) {
      console.log(">>>>>>>>>>>> notas", notas);
      notas.reduce((sum, key) => {
        return this.setState({
          result: (parseFloat(sum[1]) + parseFloat(key[1])) / notas.length,
        });
      });
    }
  }

  addInput(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      inputsNotas: prevState.inputsNotas++,
      input: this.state.input.concat("+"),
    }));
  }

  render() {
    let inputs = this.state.input;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <button onClick={this.addInput}>Acrescente nota</button>
        <ul className="listInputs">
          {inputs.map((item, index) => (
            <li key={index} className="inputs">
              Nota {index + 1}
              <Input
                name={"nota" + index + 1}
                value={this.state.value}
                onChange={this.handleChange}
              ></Input>
            </li>
          ))}
        </ul>
        <label>
          Média
          <input
            type="text"
            value={this.state.result}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Enviar" onClick={this.makeMedia} />
      </form>
    );
  }
}
