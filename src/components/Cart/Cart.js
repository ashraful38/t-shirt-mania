import React from 'react';
import './Cart.css'

const Cart = ({cart ,  handleRemoveItem}) => {

    let message;
    if(cart.length===0){
        message = <p>Please buy a at least one item !!!!</p>
    }
    else{
        message=<p>Thank for buy</p>
    }
    
    return (
        <div>
            <h2 className={cart.length === 2 ? `orange` : `purple`}>Order Summary</h2>
            <h4 className={`bold ${cart.length === 2 ? 'blue' : 'yellow'}`}>Order quantity:{cart.length}</h4>
            {
                cart.map(tshirt => <p
                key={tshirt.id}>
                    
                    {tshirt.name}
                    <button onClick={()=> handleRemoveItem(tshirt)}>Remove</button>
        

                </p> )
            }

            {
               message
            }
            

            {/* ternary  operator */}
            {
                cart.length === 3 ? <p>Tin jon ke gitf diba?</p> : <p> 3 ta kinba na</p> 
            }

            {/* and operator */}
            <p>And opratior showing condition</p>
            {
                cart.length===2  && <h3>Double items</h3>
            }

            {/* or operator */}
            <p>Or opertor showing condition</p>
            {
                cart.length===4 || <h2>4 ta item hoy nai</h2>
            }

        </div>
       
    );
};

export default Cart;