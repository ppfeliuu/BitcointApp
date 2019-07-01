import React from 'react';

const Precio = (props) => {

    console.log(props);

    const {price, percent_change_1h, percent_change_7d, percent_change_24h} = props.precio;

    return ( 
        <div className="card text-white bg-sucess mb-3">
            <div className="card-header">Bitcoin price</div>
            <div className="card-body">
                <h4 className="card-title">Current price: {price}</h4>
            </div>
        </div>
     );
}



 
export default Precio;