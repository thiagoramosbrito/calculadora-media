import React from "react";
import Input from "../components/Input";
import "./home.scss";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //array of input fields values
      arrayScores: [],
      //inputsNotas: 2,
      //result of sum of arrayScores
      result: "",
      //Number os input (3 default)
      input: ["+", "+", "+"],
      //Is removeInputBtn disabled (default : true)
      removeInputBtn: true,
      //Is addInputBtn disabled (default : false)
      addInputBtn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
    this.makeMedia = this.makeMedia.bind(this);
  }

  componentDidMount() {}

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
    if (this.state.input.length === 8) {
      this.setState({
        input: this.state.input.concat("+"),
        addInputBtn: true,
      });
      return;
    } else {
      this.setState((prevState) => ({
        addInputBtn: false,
        removeInputBtn: false,
        //inputsNotas: prevState.inputsNotas++,
        input: this.state.input.concat("+"),
      }));
    }
  }

  removeInput(e) {
    e.preventDefault();

    if (this.state.input.length > 3 && this.state.input.length < 8) {
      let stateInput = this.state.input;
      this.state.input.pop();
      this.setState((prevState) => ({
        addInputBtn: false,
        removeInputBtn: false,
        //inputsNotas: prevState.inputsNotas--,
        input: stateInput,
      }));
    }
    if (this.state.input.length === 8) {
      let stateInput = this.state.input;
      this.state.input.pop();
      this.setState((prevState) => ({
        addInputBtn: false,
        removeInputBtn: false,
        //inputsNotas: prevState.inputsNotas--,
        input: stateInput,
      }));
    }
    if (this.state.input.length > 8) {
      let stateInput = this.state.input;
      this.state.input.pop();
      this.setState((prevState) => ({
        addInputBtn: false,
        removeInputBtn: false,
        //inputsNotas: prevState.inputsNotas--,
        input: stateInput,
      }));
    }
    if (this.state.input.length <= 3) {
      this.setState({
        addInputBtn: false,
        removeInputBtn: true,
      });
    }
  }

  render() {
    let inputs = this.state.input;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="inputsContainer">
          <button
            disabled={this.state.removeInputBtn}
            className="removeInput"
            onClick={this.removeInput}
          >
            <span>-</span>
          </button>
          <ul className="listInputs">
            {inputs.map((item, index) => (
              <li key={index} className="inputs">
                <Input
                  name={"nota" + (index + 1)}
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder={"nota" + (index + 1)}
                ></Input>
              </li>
            ))}
          </ul>
          <button
            disabled={this.state.addInputBtn}
            className="addInput"
            onClick={this.addInput}
          >
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
