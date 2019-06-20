import React from 'react';
import { evaluate } from 'mathjs';
import './App.css';

class App extends React.Component {
  state = {
    active: [],
    stored: [],
    answer: 0,
  }

  calcClear() {
    this.setState({
      active: [],
      stored: [],
      answer: 0
    })
  }

  activePush(num) {
    this.setState({ active: [...this.state.active, num] });
  }

  sumPush(op) {
    let temp = this.state.active.join('');
    this.setState({ active: [] });
    this.setState({ stored: [...this.state.stored, temp, op] });
  }

  calc(temp) {
    let ans = [...this.state.stored, temp.join('')];
    let arr = ans.join('');
    this.setState({ answer: evaluate(arr) })
  }

  render() {
    const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
      <div className="container">
        <div className="display">
          <h1>{this.state.active}</h1>
          <h1>{this.state.stored}</h1>
          <h1>{this.state.answer}</h1>
        </div>

        {/* Numbers being mapped from KEYS w/ functionallity*/}
        <div className="gridCont">
          {keys.map(i => {
            return (
              <div className={"x" + i}>
                <button onClick={() => this.activePush(i)}>{i}</button>
              </div>
            )
          })}
          <div className="dot">
            <button onClick={() => this.activePush(".")}>.</button>
          </div>

          {/* Operators */}
          <div className="ac">
            <button onClick={() => this.calcClear()}>A/C</button>
          </div>
          <div className="neg">
            <button>+/-</button>
          </div>
          <div className="perc">
            <button>%</button>
          </div>
          <div className="divide">
            <button onClick={() => this.sumPush("/")}>÷</button>
          </div>
          <div className="multi">
            <button onClick={() => this.sumPush("*")}>×</button>
          </div>
          <div className="minus">
            <button onClick={() => this.sumPush("-")}>-</button>
          </div>
          <div className="add">
            <button onClick={() => this.sumPush("+")}>+</button>
          </div>
          <div className="equals">
            <button onClick={() => this.calc(this.state.active)}>=</button>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
