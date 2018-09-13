import React, { Component } from 'react';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "Counter",
            counter: 10,
            counters: [24, 35]
        }
    }
    plus(){
        const counter = this.state.counter + 1;
        const counters = [...this.state.counters];
        counters.push(counter);

        this.setState({
            counter,
            counters,
        })
    }
    minus(){
        this.setState({ counter: this.state.counter - 1})
    }
    render() {
    return (
      <div className="App">
         Counter: {this.state.counter}
         <hr/>

          <button onClick={() => this.plus()}>Plus</button>
          <button onClick={() => this.minus()}>Minus</button>

          <hr/>

          <ul>
              {this.state.counters.map(el =>
                  <li key={Math.random()}>{el}</li>)
              }
          </ul>
      </div>
    );
  }
}

export default App;
