import React from 'react';
import {Mobiles} from '../data/Mobile';
import{CLothes} from '../data/Clothes'
import {Link} from 'react-router-dom';
import { Groceries } from '../data/Grocery';
const FourItems:React.FC=()=>{
    return(
        <div className="fouritems--container">
            <div className="fouritems--container--item">
                <h2>Mobile</h2>
                <div className="fouritems--container--item--items">
                    {Mobiles.map((item)=>(
                        <div className="fouritems--container--item--items--inner" key={item.title}>
                            <Link to={`/products/mobile`}>
                                <img src ={item.image} alt="Not Found" 
                                style={{width:'70px', height:'90px' ,cursor:'pointer'}}/>
                            </Link>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.company}</li>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.title}</li>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.offer}</li>
                        </div>     
                    ))}       
                </div> 
            </div>
            <div className="fouritems--container--item">
                <h2>Clothes</h2>
                <div className="fouritems--container--item--items">
                {CLothes.map((item)=>(
                        <div className="fouritems--container--item--items--inner" key={item.category}>
                            <Link to={`/products/clothes`}>
                                <img src ={item.image} alt="Not Found" 
                                style={{width:'80px', height:'100px' ,cursor:'pointer'}}/>
                            </Link>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.category}</li>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.offer}</li>
                        </div>     
                    ))}   
                </div>
                
            </div>
            <div className="fouritems--container--item">
                <h2>Grocery</h2>
                <div className="fouritems--container--item--items">
                    {Groceries.map((item)=>(
                        <div className="fouritems--container--item--items--inner" key={item.category}>
                            <Link to={`/products/grocery`}>
                                <img src ={item.image} alt="Not Found" 
                                style={{width:'80px', height:'100px' ,cursor:'pointer'}}/>
                            </Link>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.category}</li>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.offer}</li>
                        </div>     
                    ))}   
                </div>
                
            </div>
            <div className="fouritems--container--item">
                <h2>Samsumg</h2>
                <div className="fouritems--container--item--items">
                {Mobiles.map((item)=>(
                        <div className="fouritems--container--item--items--inner">
                            <img src ={item.image} alt="Not Found" 
                            style={{width:'70px', height:'90px' ,cursor:'pointer'}}/>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.company}</li>
                            <li className="fouritems--container--item--items--inner--li">
                                {item.title}</li>

                            <li className="fouritems--container--item--items--inner--li">
                                {item.offer}</li>
                        </div>     
                    ))}   
                </div>
                
            </div>
        </div>
    )
}

export default FourItems;