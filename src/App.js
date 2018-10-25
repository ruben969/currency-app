import React, { Component } from 'react';
import './App.css';
import Select from './components/select/Select';
import Input from './components/input/Input';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currencys: [
        { RUB: null },
        { USD: null },
        { GBP: null },
        { EUR: null }
      ]

    }
  }

  selectedCurrenty(event){

    event.target.value

  }

  componentDidMount() {
    const currencys = [];
    this.state.currencys.forEach(element => {
      fetch('http://cb.am/latest.json.php?currency=' + Object.keys(element)[0])
        .then(result => result.json())
        .then(data => {
          currencys.push(data);
          this.setState({
            currencys
          });
        })
    })
  }

  render() {

    return (
      <div className="App">
        <h1>React Calculatoer</h1>
        <Select />
        <Input />
      </div>
    );
  }
}

export default App;
