import React from 'react'
// import Filho from './Filho'
import { childrenWithProps } from '../utils/utils'

// function childrenWithProps(props) {
//     return React.Children.map(props.children, child => {
//         return React.cloneElement(child, {
//             ...props,
//             ...child.props
//         })
//         {/* React.cloneElement(props.children, { ...props, ...props.children.props })} {/* Significa: Clone este elemento e passe para ele essas propriedades | OBS: Só funciona para um elemento */}
//     })
// }

export default props =>
    <div>
        <h1>{props.nome} {props.sobrenome}</h1>
        <h2>Filhos</h2>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>


// export default props =>
    // <div>
        // <h1>{props.nome} {props.sobrenome}</h1>
        // <h2>Filhos</h2>
        // <ul>
            // {
                // React.Children.map(props.children, child => {
                    // return React.cloneElement(child, {
                        // ...props,
                        // ...child.props
                    // })
                    // {/* React.cloneElement(props.children, { ...props, ...props.children.props })} {/* Significa: Clone este elemento e passe para ele essas propriedades | OBS: Só funciona para um elemento */}
                // })
            // }
        // </ul>
    // </div>




// export default props =>
    // <div>
        // <h1>{props.nome} {props.sobrenome}</h1>
        // <h2>Filhos</h2>
        // <ul>
            // <Filho nome="Pedro" sobrenome={props.sobrenome} />
            // <Filho {...props} />
            // <Filho {...props} nome="Carla" />
        // </ul>
    // </div>

// {/* {props.children} {/* Caso eu esteja em um contexto de classe eu utilizo {this.props.children} */}