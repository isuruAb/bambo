import React from 'react';
import './App.css'
class App extends React.Component{
    state={
        name:'bambu'
    }
    render(){
        return <h1>Hello World {this.state.name}</h1>;
    }
}
export default App;