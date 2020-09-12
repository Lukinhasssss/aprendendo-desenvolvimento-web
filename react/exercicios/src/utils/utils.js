import React from 'react'

export function childrenWithProps(props) {
    return React.Children.map(props.children, child => {
        return React.cloneElement(child, {
            ...props,
            ...child.props
        })
        // {/* React.cloneElement(props.children, { ...props, ...props.children.props })} {/* Significa: Clone este elemento e passe para ele essas propriedades | OBS: Só funciona para um elemento */}
    })
}