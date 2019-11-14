import React from 'react';
import BotaoAlternar from './BotaoAlternar';
import BotaoContador from './BotaoContador';
import BotaoFinalizar from './BotaoFinalizar';


export default class Contador extends React.Component {
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

  alternarVisibilidade = () => {
    this.setState((prevState) =>{
        return {visibilidade: !prevState.visibilidade 
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

  


  render() {
    return (
      <div>
        <p>{this.state.contador}</p>
        <BotaoAlternar 
        onClickMetodo= {this.alternarVisibilidade}
        visibilidade={this.state.visibilidade}
        />
        {this.state.visibilidade && (
        <BotaoContador 
        disabled = {this.state.finalizador}
        cliqueAddUm={this.adicionarUm}
        cliqueAddMenosUm={this.subtrairUm}
        cliqueResetar={this.resetarTudo}
        />
        )}
      
          {this.state.contador !== 0 && (
             <BotaoFinalizar
            cliqueCongelar={this.finalizadorTudo}
            />
          )}
      
      </div>
    );
  }
}
