import React, { Component } from 'react';
import './App.css';
import Select from './components/select/Select';
import Input from './components/input/Input';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currencys: {
        RUB: null,
        USD: null,
        GBP: null,
        EUR: null
      },
      currency: { money: 0 },
      result: 0
    }
  }

  selectedCurrenty = (event) => {
    let currencyss = {};
    let typeMony = event.target.value;
    let monyValue = this.state.currencys[typeMony]
    currencyss[typeMony] = monyValue;
    this.setState({
      currency: currencyss
    });

    console.log("esi piti tpvi", this.state.currency);
  }

  componentDidMount() {
    let currencys = {};
    let template = {};
    for (let key in this.state.currencys) {
      fetch('http://cb.am/latest.json.php?currency=' + key)
        .then(result => result.json())
        .then(data => {
          console.log(data)
          currencys[key] = data[key];
          template.RUB = currencys.RUB;
          this.setState({
            currencys
          });

        });
    }
    this.setState({
      currency: template
    })
  }

  changeMoney = (event) => {
    const money = event.target.value;
    let result=0;
    console.log(money);
   for(let key in this.state.currency){
     result= this.state.currency[key];
   }
     result = (money / (+result))+'';
    console.log(this.state.currency.value);
    this.setState({

      result: result
    })
  }



  render() {

    return (
      <div className="App">
        <h1>React Calculatoer</h1>
        <Select choose={this.selectedCurrenty}
          sum={this.state.currency} />
        <Input change={this.changeMoney}
          result={this.state.result} />
      </div>
    );
  }
}

export default App;
// 