import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt ,  handleAddtoCart}) => {
    const {picture ,name , price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="img" />
            <h3>Name:{name}</h3>
            <p>Price: ${price}</p>
            <button onClick={()=> handleAddtoCart(tshirt)}>Buy This</button>

        </div>
    );
};

export default Tshirt;