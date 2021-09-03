import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../store/cartStore';
import {Link} from 'react-router-dom';
import emptyCart from '../images/empty-cart.svg';
import { deleteToCart,updateToCart } from '../store/cartActions';
import { cartQuantity } from '../data/cartQuantity';
const Cart:React.FC=()=>{
    const cart = useSelector((state: RootState)=>{
        return state.cartR.cart
    })
   
    const cartItems = cart.reduce((sum, item) => sum + item.qty, 0)
    const cartPrice = cart.reduce((sum, item) => sum + item.Price, 0);
    const dispatch = useDispatch()

    const handleChange =(id:string,event:React.ChangeEvent<HTMLSelectElement>)=>{
        dispatch(updateToCart(id,parseInt(event.target.value)))
    }
    return(
        <div>
            {cartItems===0?
            <div className="cart--container--empty">
                <div className="cart--container--empty--image">
                    <img src={emptyCart} alt="Not Found" 
                    style={{width:'200px',height:'200px',background:'white'}}/>
                </div>
                <div className="cart--container--empty--two">
                    <div className="cart--container--empty--two--heading">
                        <h2>Your Easy-Kart Basket is Empty</h2>
                    </div>
                    <div >
                        <button className="cart--container--empty--two--btn">
                            <Link to="/" className="cart--container--empty--two--btn--link">
                                Shop Now</Link>
                        </button>
                    </div>
                </div>
            </div>
            :
            
            <div className="cart--container">
                <div className="cart--container--left">
                    <div className="cart--container--left--header">
                        <div className="cart--container--left--header--title">
                            Shopping Cart
                        </div>
                        <div className="cart--container--left--header--price">
                            Price
                        </div>
                    </div>
                    <hr/>
                {cart.map((item:{id:string;image:string,Name:string;Company:string;Category:string,Price:number,qty:number})=>(
                    <div className="cart--container--left--main" key={item.id}>
                        <div className="cart--container--left--main--image">
                            <img src={item.image} alt="Not Found"
                                style={{width:'200px',height:'180px'}}
                            />
                        </div>
                        <div className="cart--container--left--main--detail">
                            <ul className="cart--container--left--main--detail--ul">
                                <li className="cart--container--left--main--detail--ul--name">
                                    {item.Name}
                                </li>
                                <li className="cart--container--left--main--detail--ul--brand">
                                    {item.Company}
                                </li>
                                <li className="cart--container--left--main--detail--ul--category">
                                    {item.Category}
                                </li>
                            </ul>
                            
                            <div className="cart--container--left--main--detail--bottom">
                                <div className="cart--container--left--main--detail--bottom--select">
                                <select name="quantity" defaultValue={item.qty}
                                    onChange={(e)=>handleChange(item.id,e)}
                                    style={{width:'50px',height:'30px',borderRadius:'5px'}}
                                >
                                    {cartQuantity.map((e, key) => {
                                        return <option key={key} value={e.value}>{e.value}</option>;
                                    })}
                                </select>             
                                </div>
                                <div className="cart--container--left--main--detail--bottom--delete">
                                    <button className="cart--container--left--main--detail--bottom--delete--btn"
                                        onClick={
                                            ()=>dispatch(deleteToCart(item.id))
                                        }
                                    >
                                        Delete
                                    </button>
                                </div>
                                
                            </div>
                            <hr/>
                        </div>
                        
                        <div className="cart--container--left--main--price">
                            ₹ {item.Price}
                        </div>
                        
                    </div>
                    ))}
                    
                    <div className="cart--container--left--footer">
                        SubTotal({cartItems} Items): ₹ {cartPrice}
                    </div>
                </div>
                
                <div className="cart--container--right">
                    <div className="cart--container--right--delivery">
                        Your Order is eligible for FREE Delivery.
                        <br/>
                        Select this option at checkout
                    </div>
                    <div className="cart--container--right--subtotal">
                        SubTotal({cartItems} Items): ₹ {cartPrice}
                    </div>
                    <div className="cart--container--right--btn">
                        <button className="cart--container--right--btn--button">
                            <Link to="/check" className="cart--container--right--btn--button--link">
                                Proceed To Buy
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        }
        </div>
    )
}

export default Cart