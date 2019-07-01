import React from 'react';
import Noticia from '../components/Noticia';


const Noticias = (props) => {


    return ( 
        <div className="row">
                {props.noticias.map((noticia) =>{
                    <Noticia />
                })}
        </div>
     );
}
 
export default Noticias;