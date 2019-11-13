
import React from 'react'
// import './App.css'

// import './App.css';

const BotaoFinalizar = props => {
    return (
  <div>
  <button onClick={props.finalizadorTudo}>Finalizar Contador</button>
  </div>
  )

}




  

     
   

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;


