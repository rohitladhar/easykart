import React from 'react';
import { useSelector } from 'react-redux';
import {StoreCart} from '../store/types'
const CheckComponent:React.FC=()=>{
    const cart = useSelector((state: StoreCart)=>state.cart)
    return (
        <div>
            {cart.map((item)=>(
                <div>
                    <ul>
                        <li>{item.Name}</li>
                        <li>{item.qty}</li>

                        <li>{item.Category}</li>
                        <li>{item.Price}</li>
                    </ul>
                </div>
            ))}
        </div>
    )
        
}

export default CheckComponent;