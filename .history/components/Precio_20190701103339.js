import React from 'react';

const Precio = (props) => {

    console.log(props);

    const {price, percent_change_1h, percent_change_7d, percent_change_24h} = props.precio;

    return ( 
        <div className="card text-white bg-success mb-3">
            <div className="card-header">Bitcoin price</div>
            <div className="card-body">
                <h4 className="card-title">Current price: $ {price}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text"><span className="font-weight-bold">Last hour: {percent_change_1h} %</span></p>
                    <p className="card-text"><span className="font-weight-bold">Last 24 hours: {percent_change_24h} %</span></p>
                    <p className="card-text"><span className="font-weight-bold">Last 7 days: {percent_change_7d} %</span></p>
                </div>
            </div>
        </div>
     );
}



 
export default Precio;