import React from 'react';

const Evento = (props) => {

    const { name, url, description} = props.info; 

    let descripcion = description.text;
    let titulo = name.text;

    if (titulo.length > 150) {
        titulo = titulo.substr(0, 150);
    }

    if (descripcion) {
        descripcion = descripcion.substr(0,250) + '...';
    }

    return ( 
        <a href={url} target="_blank" className="list-group-item active text-light mb-1">
            <h3 className="mb-3">{name.text}</h3>
            <p className="mb-1">{descripcion}</p>
        </a>
     );
}
 
export default Evento;