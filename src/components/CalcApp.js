import React from 'react';

import CalcButton from './CalcButton';
// 計算機 App
class CalcApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // TODO
      prevNum: 0,
      currentNum: 0,
      numToCalculate: [],
      prevOperation: []
    };
  }

  resetState() {
    // TODO
    let prev = 0;
    let current = 0;
    let NTC = [];
    this.setState({
      prevNum: prev,
      currentNum: current,
      numToCalculate: NTC,
      prevOperation: []
    })
  }

  setPrevOperation(a) {
    if(typeof this.state.prevOperation !== 'undefined' && this.state.prevOperation.length > 0
        && this.state.numToCalculate !== 'undefined' && this.state.numToCalculate.length > 0){
      let operation = parseInt(this.state.prevOperation[0]);
      if(operation === 1){
        this.plus();
      }
      else if(operation === 2){
        this.sub();
      }
      else if(operation === 3){
        this.multiply();
      }
      else if(operation === 4){
        this.divide();
      }
      this.setState({
        prevOperation: [a]
      })
    }
    else {
      let prev = this.state.currentNum;
      this.setState({
        numToCalculate: [],
        prevNum: prev,
        prevOperation: [a]
      })
    }
    
  }

  showNotImplemented() {
    console.warn('This function is not implemented yet.');
  }

  addNumToCalculate(i) {
    this.state.numToCalculate.push(i);
    this.updateCurrentNum();
  }
  updateCurrentNum() {
    let current = 0;
    let length = this.state.numToCalculate.length;
    for (let i = 0; i < length; i++) {
        current += parseInt(this.state.numToCalculate[i]) * Math.pow(10,length - 1 -i);
    }
    if(typeof this.state.prevOperation !== 'undefined' && this.state.prevOperation.length > 0 &&
       parseInt(this.state.prevOperation[0]) === 0)
       {
         this.resetState();
         this.setState({
           currentNum:current
         })
       }
    this.setState({
      currentNum: current
    })
  }
  plus() {
    let prev = this.state.prevNum;
    let current = this.state.currentNum;
    let NTC = [];
    prev += current;
    this.setState({
      prevNum: prev,
      currentNum: prev,
      numToCalculate: NTC
    })

  }
  sub() {
    let prev = this.state.prevNum;
    let current = this.state.currentNum;
    let NTC = [];
    prev -= current;
    this.setState({
      prevNum: prev,
      currentNum: prev,
      numToCalculate: NTC
    })

  }
  multiply() {
    let prev = this.state.prevNum;
    let current = this.state.currentNum;
    let NTC = [];
    prev *= current;
    this.setState({
      prevNum: prev,
      currentNum: prev,
      numToCalculate: NTC
    })

  }
  divide() {
    let prev = this.state.prevNum;
    let current = this.state.currentNum;
    let NTC = [];
    prev = Math.floor(prev/current);
    this.setState({
      prevNum: prev,
      currentNum: prev,
      numToCalculate: NTC
    })

  }


  render() {
    return (
      <div className="calc-app">
        <div className="calc-container">
          <div className="calc-output">
            <div className="calc-display">{this.state.currentNum}</div>
          </div>
          <div className="calc-row">
            <CalcButton onClick={this.resetState.bind(this)}>AC</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>+/-</CalcButton>
            <CalcButton onClick={this.showNotImplemented.bind(this)}>%</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.setPrevOperation(4)}>÷</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(7)}>7</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(8)}>8</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(9)}>9</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.setPrevOperation(3)}>x</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(4)}>4</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(5)}>5</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(6)}>6</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.setPrevOperation(2)}>-</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(1)}>1</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(2)}>2</CalcButton>
            <CalcButton className="calc-number" onClick={()=>this.addNumToCalculate(3)}>3</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.setPrevOperation(1)}>+</CalcButton>
          </div>
          <div className="calc-row">
            <CalcButton className="calc-number bigger-btn" onClick={()=>this.addNumToCalculate(0)}>0</CalcButton>
            <CalcButton className="calc-number">.</CalcButton>
            <CalcButton className="calc-operator" onClick={()=>this.setPrevOperation(0)}>=</CalcButton>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcApp;
