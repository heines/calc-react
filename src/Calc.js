import React from 'react';
import './Calc.scss';
import Display from './Display';
import CalcBtn from './CalcBtn';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ans: 0,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      sep: false
    };
  }

  handleClickNum(i) {
    let ans = this.state.ans;
    let num = this.state.num;
    if(this.state.nget) {
      this.setState({
        ans: Number(i),
        nget: false,
      });
    } else {
      let ansStr = String(ans) + String(i);
      if(ansStr.length < 15) {
        this.setState({
          ans: Number(ansStr),
        });
      }
    }
  }

  handleClickClear() {
    this.setState({
      ans: 0,
      num: 0,
      ope: "plus",
      nget: true,
      calc: false,
      sep: false,
    })
  }

  handleClickOperator(operator) {
    let ans = this.state.ans;
    if(this.state.calc) {
      ans = this.calc();
    }
    this.setState({
      ans: ans,
      num: ans,
      ope: operator,
      nget: true,
      calc: true,
      sep: false,
    });
  }

  calc() {
    let num = Number(this.state.num);
    let ans = Number(this.state.ans);
    switch (this.state.ope) {
      case "plus":
        return this.toExp(num + ans);
      case "minus":
        return this.toExp(num - ans);
      case "times":
        return this.toExp(num * ans);
      case "dividedby":
        return this.toExp(num / ans);
      default:
        return this.toExp(num + ans);
    }
  }

  toExp(num) {
    if(String(num).length > 15) {
      return Number(num).toExponential(8);
    } else {
      return num;
    }
  }

  handleClickCalc() {
    let ans = this.calc();
    this.handleClickClear();
    this.setState({
      ans: ans,
    });
  }

  handleClickPercentage() {
    let ans = this.toExp(this.state.ans * 0.01);
    this.handleClickClear();
    this.setState({
      ans: ans,
    });
  }

  handleClickSign() {
    let ans = this.toExp(this.state.ans * (-1));
    this.setState({
      ans: ans
    });
  }

  handleClickDecPoint() {
    let ans = this.state.ans;
    if(!this.state.sep) {
      this.setState({
        ans: String(ans) + '.',
        sep: true
      })
    }
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
        <Display />
        <Display param={ans} />
        <div className="p-calc__row">
          {this.setClear("AC")}
          {this.setSign("+/-")}
          {this.setPercentage()}
          {this.setOperator("÷", "dividedby")}
        </div>
        <div className="p-calc__row">
          {this.setNum("7")}
          {this.setNum("8")}
          {this.setNum("9")}
          {this.setOperator("×", "times")}
        </div>
        <div className="p-calc__row">
          {this.setNum("4")}
          {this.setNum("5")}
          {this.setNum("6")}
          {this.setOperator("−", "minus")}
        </div>
        <div className="p-calc__row">
          {this.setNum("1")}
          {this.setNum("2")}
          {this.setNum("3")}
          {this.setOperator("+", "plus")}
        </div>
        <div className="p-calc__row">
          {this.setNum("0")}
          {this.setNum("00")}
          {this.setDecPoint()}
          {this.setCalc("=")}
        </div>
      </div>
    );
  }
}

export default Calc;
