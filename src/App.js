import React from 'react';
import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    count1 = () =>{
        this.setState({
            count: this.state.count+= 1
        })
    }

    count4 = () =>{
        this.setState({
            count: this.state.count+= 4
        })
    }

    count8 = () =>{
        this.setState({
            count: this.state.count+=8
        })
    }

    render(){
        return(
            <div className = "container">
                <div className = "output">
                    <h2>Your count: {this.state.count}</h2>
                </div>
                <div className = "allButtons">
                <button type="button" className ="button" onClick={this.count1}>Add 1</button>
                <button type="button" className ="button" onClick={this.count4}>Add 4</button>
                <button type="button" className ="button" onClick={this.count8}>Add 8</button>
                </div>
            </div>
        )
    }
}

export default App;
