import React from 'react';

const Noticia = (props) => {

    const { urlToImage, url, title, description, source } = props.noticia;

    let image;

    if(urlToImage !== ''){
        image = <img src={urlToImage} alt={title} className="card-img-top" />
    } else {
        image = <p className="text-center my-5">No image</p>
    }

    return ( 
        <div className="col-md-6 col-12 mb-4">
            <div className="card">
                <div className="card-image">
                    {image}
                </div>
            </div>
        </div>
     );
}
 
export default Noticia;