import React from 'react'
import ReactDOM from 'react-dom'

// import Multiplos from './componentes/Multiplos'
import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

// ReactDOM.render(<BomDia nome="Guilherme" idade={10} />, document.getElementById('root'))
ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Lucas" />
            <Filho nome="Carla" />
            <Filho nome="Bruna" />
        </Pai>
    </div>
    , document.getElementById('root'))

// COMENTÁRIOS NO REACT PODEM SER FEITOS COM {/* */} OU COM //