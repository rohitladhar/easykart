import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector} from 'react-redux';
//import {StoreCart} from '../store/types'
import { RootState } from '../store/cartStore';
import {FaAngleRight,FaSistrix,FaOpencart,FaShoppingCart} from 'react-icons/fa'
const NavBar: React.FC=()=>{
    
    const cart = useSelector((state: RootState)=>{
          return state.cartR.cart
    })
    const cartItems = cart.reduce((sum, item) => sum + item.qty, 0)
    return(
       <div className="navbar--container">
        <div className="navbar--container--left">
            <div className="navbar--container--left--logo" >
                <FaOpencart size={40} style={{background:"#2ed573"}}/>
            </div>
            <div className="navbar--container--left--brandName" >
                <Link to="/" className="navbar--container--left--brandName--link">EASY-KART</Link>
            </div>
        </div>
        <div className="navbar--container--middle">
            <div className="navbar--container--middle--one">
                Computer Items
                <FaAngleRight style={{background:"#d1ccc0"}}/>
            </div>
            <div className="navbar--container--middle--two"></div>
            <div className="navbar--container--middle--three">
                <FaSistrix size={25} style={{background:"#ffa502"}}/>
            </div>
        </div>
        <div className="navbar--container--right">
       
            <div className="navbar--container--right--one">
                Hi,SignIn
            </div>
            <div className="navbar--container--right--two">
                Returns & Orders
            </div>
            <div className="navbar--container--right--three">
                <div className="navbar--container--right--three--left">
                    {cartItems}
                </div>
                <div className="navbar--container--right--three--right">
                    <Link to="/cart" className="navbar--container--right--three--right--link">
                        <FaShoppingCart size={35} color="#ffa502" style={{background:"#2ed573"}}/>
                    </Link>
                </div>
            </div>
        </div>
       </div>
    )
}

export default NavBar
