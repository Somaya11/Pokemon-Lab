import './App.css';
import {Component } from 'react';
import Pokemon from './components/Pokemon';



export default class App extends Component {
state = {
  pickachuHP: 100,
  charizardHP: 150,
  status: 'Ready To Fight'
}

pickachuAttack =()=>{
  let attackOne = this.state.charizardHP -10
  this.setState({charizardHP: attackOne, status: 'Pickachu Attacked Charizard'}) 
}

charizardAttack= ()=> {
  let attackTwo = this.state.pickachuHP -10
  this.setState({pickachuHP:attackTwo, status: 'Charizard Attack Pikachu'}) 
}

render(){
  return(
    <div className = "App">
      <Pokemon 
        pickachuHP={this.state.pickachuHP}
        charizardHP={this.state.charizardHP}
        status={this.state.status}
        pickachuAttack={this.pickachuAttack}
        charizardAttack={this.charizardAttack}
        
        />
      
      </div>
  )
}
}

