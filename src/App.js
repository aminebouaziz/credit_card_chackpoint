import React, { Component } from 'react';
import './App.css';
import Card from './Card'
import Form from './Form'
class App extends Component {
  constructor() {
    super()
    this.state = {
      name: "Your name here !",
      code: "",
      cName: "Company name",
      num: ""
    }
  }
  //-------------------------------
  onNameChange = (name) => {
    this.setState({
      name
    })
  }
  onCodeChange = (code) => {
    if (!isNaN(Number(code))){
      this.setState({
        code
      })
  }
}
//----------------------------------------
  onCnameChange = (cName) => {
    this.setState({
      cName
    })
  }

//-------------------------------------




//--------------------------
  onNumChange = (num) => {
    console.log(Number(num))
    if (!isNaN(Number(num))){
    this.setState({
      num
    })
  }
  }

  
  render() {
    return (
      <div >
        <Card name={this.state.name} code={this.state.code} cName={this.state.cName} num={this.state.num} />
        <Form num={this.state.num}  code={this.state.code} onNameChange={this.onNameChange} onCodeChange={this.onCodeChange} onCnameChange={this.onCnameChange} onNumChange={this.onNumChange} />
      </div>
    );
  }
}

export default App;
