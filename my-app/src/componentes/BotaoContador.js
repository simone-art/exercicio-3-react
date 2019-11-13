import React from 'react'
// import './App.css'

// import './App.css';

const BotaoContador = props => {
  return (
  <div>
    <button className="btnMaisUm" disabled={props.disabled} onClick={this.adicionarUm}>+1</button>
    <button className="btnMenosUm" disabled={props.disabled}onClick={this.subtrairUm}>-1</button>
    <button className="btnResetar"onClick={props.disabled}>resetar</button>
  </div>

  )
}

export default BotaoContador;


  
   

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;


