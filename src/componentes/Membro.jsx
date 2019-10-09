import React from 'react'

export default props => 
    <div>
        {console.log('test',props)}
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>