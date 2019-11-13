import React from 'react'
// import './App.css'
import BotaoAlternar from './BotaoAlternar'
import BotaoContador from './BotaoContador'
import BotaoFinalizar from './BotaoFinalizar'

// import './App.css';



class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      visibilidade: true,
      finalizador:false
    };
  }
      adicionarUm = () => {
        this.setState((prevState) => {
          return {
            contador: prevState.contador + 1
          }
        })
      }

  subtrairUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador - 1
      }
    })
  }

  resetarTudo = () => {
    this.setState(() => {
      return {
        contador: 0,
        finalizador: false 
      }
    })
  }

  finalizadorTudo = () => {
    this.setState(() => {
      return {
        finalizador: true
      }
    })
  }

  alterarVisibilidade = () => {
    this.setState((prevState) =>{
      if (prevState.visibilidade === true) {
        return { visibilidade: !prevState.visibilidade }
      } else {
        return { visibilidade: true }
      }
    }
  )
  }


  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <BotaoAlternar 
        onClickMetodo= {this.alterarVisibilidade}
        visibilidade={this.state.visibilidade}
        />
        <BotaoContador 
        disabled = {this.state.finalizador}
        cliqueAddUm={this.state.adicionarUm}
        cliqueAddMenosUm={this.state.subtrairUm}
        cliqueResetar={this.state.resetarTudo}
        />
      ) : ''}
      {this.state.contador !== 0 && (
        <div>
        <button className="btnfinalizadorTudo"onClick={this.finalizadorTudo}>Finalizar Contador</button>
        </div>
      )}
      </div>
    );

  
   

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}

export default App;


