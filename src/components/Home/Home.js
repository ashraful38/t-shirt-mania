import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshirts = useLoaderData();

    const [cart , setCart] =useState([]);

    const handleAddtoCart = tshirt =>{
        //console.log(tshirt);
        //akber click korar por disable kore dibo
        const exists = cart.find(ts => ts.id === tshirt.id);
        if(exists){
            alert('tshirt already added');
        }
        else{
            const newCart=[...cart , tshirt];
            setCart(newCart);
            //alert('successfully added');

        }

        // const newCart=[...cart , tshirt];
        // setCart(newCart);

    }

    const handleRemoveItem = (tshirt) =>{
        const remaining = cart.filter(ts => ts.id !==tshirt.id);
        setCart(remaining);
    }

    return (
        <div className='home-container'>
            <div className="t-shirt-container">
            {
                tshirts.map(tshirt=><Tshirt
                key={tshirt.id}
                tshirt={tshirt}
                handleAddtoCart={handleAddtoCart}
                ></Tshirt>)
            }
            </div>
            <div className="cart-container">
                <Cart 
                  cart={cart}
                  handleRemoveItem={handleRemoveItem}
                ></Cart>
            </div>
            
           
        </div>
    );
};

export default Home;