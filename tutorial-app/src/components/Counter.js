import { Component } from "react";

class Counter extends Component{
    
    state={
        count :0 
    }
    increment =()=>{
        this.setState(prevState=>{
            return{
                count : prevState.count+1
            }
        })
    }

    render(){
    
        const {count} = this.state
        

        return(
            <div>
                <h1>{count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter;