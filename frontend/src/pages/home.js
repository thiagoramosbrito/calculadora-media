import React from "react";
import Input from "../components/Input";
import "./home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayScores: [],
      inputsNotas: 2,
      result: "",
      input: ["+", "+"],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
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

    if (notas.length > 1) {
      let soma = 0;
      notas.forEach((item, index) => {
        soma = soma + parseInt(item[1]);
      });

      return this.setState({
        result: soma / notas.length,
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

  removeInput(e) {
    e.preventDefault();
    let stateInput = this.state.input;
    this.state.input.pop();
    this.setState((prevState) => ({
      inputsNotas: prevState.inputsNotas--,
      input: stateInput,
    }));
    console.log(">>>>>>>>>>>> this.state.input", this.state.input);
  }

  render() {
    let inputs = this.state.input;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="inputsContainer">
          <button className="removeInput" onClick={this.removeInput}>
            <span>-</span>
          </button>
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
          <button className="addInput" onClick={this.addInput}>
            <span>+</span>
          </button>
        </div>
        <input
          className="domedia"
          type="submit"
          value="Calcular Média"
          onClick={this.makeMedia}
        />
        <label className="media">
          <input
            type="text"
            value={this.state.result}
            onChange={this.handleChange}
          />
        </label>
      </form>
    );
  }
}
