import React from 'react';
import Noticia from './Noticia';


const Noticias = (props) => {


    return ( 
        <div className="row">
                {props.noticias.map(noticia =>{
                    <Noticia 
                        noticia={noticia}
                    />
                })}
        </div>
     );
}
 
export default Noticias;