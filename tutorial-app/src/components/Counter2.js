import { Component } from "react";

class Counter2 extends Component{

  constructor(){
    super()
    this.state={
      count:0
    }
  }


  increment(prevState){
    this.setState((prevState) => ({
      count:prevState.count+1
    }))
  }

  decrement(prevState){
    this.setState((prevState)=>({
      count:prevState.count-1
    }))
  }

  reset(){
    this.setState({
      count:0
    })
  }



  render(){

    return(
      <div>
        <h1>Count {this.state.count}</h1>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
        <button onClick={() => this.reset()}>Reset</button>
      </div>
    )
  }
}
export default Counter2