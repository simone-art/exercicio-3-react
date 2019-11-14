import React from 'react';
import Contador from './componentes/Contador';
import './App.css';

// // import './App.css';



// class Contador extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contador: 0,
//       visibilidade: true,
//       finalizador:false
//     };
//   }
//       adicionarUm = () => {
//         this.setState((prevState) => {
//           return {
//             contador: prevState.contador + 1
//           }
//         })
//       }

//   subtrairUm = () => {
//     this.setState((prevState) => {
//       return {
//         contador: prevState.contador - 1
//       }
//     })
//   }

//   resetarTudo = () => {
//     this.setState(() => {
//       return {
//         contador: 0,
//         finalizador: false 
//       }
//     })
//   }

//   finalizadorTudo = () => {
//     this.setState(() => {
//       return {
//         finalizador: true
//       }
//     })
//   }

//   alterarVisibilidade = () => {
//     this.setState((prevState) =>{
//       if (prevState.visibilidade === true) {
//         return { visibilidade: !prevState.visibilidade }
//       } else {
//         return { visibilidade: true }
//       }
//     }
//   )
//   }


//   render() {
//     return (
//       <div>
//         <p>{this.state.contador}</p>
//         <button className ="alterarVisibilidade" onClick ={this.alterarVisibilidade}>
//         {this.state.visibilidade === true  ? "Fechar Contador" : "Abrir Contador"}</button>
//         {this.state.visibilidade === true ? (
//         <div>
//         <button className="btnMaisUm" disabled={this.state.finalizador} onClick={this.adicionarUm}>+1</button>
//         <button className="btnMenosUm" disabled={this.state.finalizador}onClick={this.subtrairUm}>-1</button>
//         <button className="btnResetar"onClick={this.resetarTudo}>resetar</button>
//       </div>
//       ) : ''}
//       {this.state.contador !== 0 && (
//         <div>
//         <button className="btnfinalizadorTudo"onClick={this.finalizadorTudo}>Finalizar Contador</button>
//         </div>
//       )}
//       </div>
//     );
//   }
//   }
  
   

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;


