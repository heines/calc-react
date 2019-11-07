import React from 'react';
import './Calc.scss';
import Display from './Display';

function CalcBtn(props) {
  return (
    <div className="p-calc__cell" onClick={props.onClick}>
      {props.value}
    </div>
  );
}

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: 0,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      dep: 1,
      sep: false
    };
  }

  handleClickNum(i) {
    let ans = this.state.ans;
    if(this.state.nget) {
      this.setState({
        ans: Number(i),
        nget: false,
      });
    } else {
      this.setState({
        ans: Number(String(ans) + String(i)),
      });
    }
  }

  handleClickOperator(operator) {
    let ans = this.state.ans;
    if(this.state.calc) {
      ans = this.calc();
    }
    this.setState({
      num: ans,
      ope: operator,
      nget: true,
      calc: true,
      dep: 0,
      sep: false,
    });
  }

  handleClickClear() {
    this.setState({
      ans: 0,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      dep: 0,
      sep: false,
    })
  }

  calc() {
    switch (this.state.ope) {
      case "plus":
        return this.state.num + this.state.ans;
      case "minus":
        return this.state.num - this.state.ans;
      case "times":
        return this.state.num * this.state.ans;
      case "dividedby":
        return this.state.num / this.state.ans;
      default:
        return this.state.num + this.state.ans;
    }
  }

  handleClickCalc() {
    let ans = this.calc();
    this.setState({
      ans: ans,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      dep: 1,
      sep: false,
    });
  }

  handleClickPercentage() {
    let ans = this.state.ans * 0.01;
    this.setState({
      ans: ans,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      sep: false,
    });
  }

  handleClickSign() {
    let ans = this.state.ans * (-1);
    this.setState({
      ans: ans
    });
  }

  handleClickDecPoint() {
    let ans = this.state.ans;
    this.setState({
      ans: String(ans) + '.',
      sep: true
    })
  }

  setNum(i) {
    return (
      <CalcBtn
        value={i}
        onClick={() => this.handleClickNum(i)}
      />
    );
  }

  setOperator(disp, operator) {
    return (
      <CalcBtn
        value={disp}
        onClick={() => this.handleClickOperator(operator)}
      />
    )
  }

  setCalc(equal) {
    return (
      <CalcBtn
        value={equal}
        onClick={() => this.handleClickCalc()}
      />
    )
  }

  setClear(ac) {
    return (
      <CalcBtn
        value={ac}
        onClick={() => this.handleClickClear()}
      />
    )
  }

  setSign(sign) {
    return (
      <CalcBtn
        value={sign}
        onClick={() => this.handleClickSign()}
      />
    )
  }

  setPercentage() {
    return (
      <CalcBtn
        value={"%"}
        onClick={() => this.handleClickPercentage()}
      />
    )
  }

  setDecPoint() {
    return (
      <CalcBtn
        value={"."}
        onClick={() => this.handleClickDecPoint()}
      />
    )
  }

  render() {
    let ans = this.state.ans;
    return (
      <div className="p-calc">
        <Display param={ans}/>
        <div className="p-calc__row">
          {this.setClear("AC")}
          {this.setSign("+/-")}
          {this.setPercentage()}
          {this.setOperator("÷", "dividedby")}
        </div>
        <div className="p-calc__row">
          {this.setNum(7)}
          {this.setNum(8)}
          {this.setNum(9)}
          {this.setOperator("×", "times")}
        </div>
        <div className="p-calc__row">
          {this.setNum(4)}
          {this.setNum(5)}
          {this.setNum(6)}
          {this.setOperator("−", "minus")}
        </div>
        <div className="p-calc__row">
          {this.setNum(1)}
          {this.setNum(2)}
          {this.setNum(3)}
          {this.setOperator("+", "plus")}
        </div>
        <div className="p-calc__row">
          {this.setNum(0)}
          {this.setNum("00")}
          {this.setDecPoint()}
          {this.setCalc("=")}
        </div>
      </div>
    );
  }
}

export default Calc;
