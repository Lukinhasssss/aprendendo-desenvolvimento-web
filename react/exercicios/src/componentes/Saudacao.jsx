import React, { Component } from 'react'

export default class Saudacao extends Component {

    state = { // Obs: state é os 'dados da aplicação' | OBS IMPOTANTE --> O componente só é atualizado quando o state muda
        tipo: this.props.tipo, // Para o valor inicial ser o valor setado no input
        nome: this.props.nome
    }

    constructor(props) {
        super(props) // Antigamente era necessário usar o super mas não é mais necessário

        this.setTipo = this.setTipo.bind(this) // Desta forma o evento onChange irá funcionar sem passar uma arrow function
        this.setNome = this.setNome.bind(this)

        // this.state = {
        //     tipo: this.props.tipo,
        //     nome: this.props.nome
        // }
    }

    setTipo(event) {
        this.setState({ tipo: event.target.value }) // Para alterar o state eu passo um objeto com um ou mais atributos que eu quero alterar no objeto
    }

    setNome(event) {
        this.setState({ nome: event.target.value })
    }

    render() { // Função responsável por renderizar o componente
        const { tipo, nome } = this.state
        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}

// <input type="text" placeholder="Tipo..." value={tipo} onChange={event => this.setTipo(event)}/>
// <input type="text" placeholder="Nome..." value={nome} onChange={event => this.setNome(event)}/>