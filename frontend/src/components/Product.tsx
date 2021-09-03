import React from 'react';
import {Category} from '../data/Category';
import {Mobile} from '../data/Mobile';
import {useParams} from 'react-router-dom'
import{Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {addToCart} from '../store/cartActions';
//import { Clothes } from '../data/Clothes';
interface IParams{
    id:string,
    productCategory:string
}

const Product:React.FC=()=>{
    const FilterArray = Mobile
    const params = useParams<IParams>()
    const dispatch = useDispatch()
    const {productCategory,id} = params
    const valueFlat = Category.map((item)=>{
        return (
            Object.keys(item)
        )
    })
    const value = valueFlat.flat()
    const findValue = value.indexOf(productCategory)
    const SearchedArray = Category[findValue]
    const SearchArray = Object.values(SearchedArray)
    const arrayCompare = Object.keys(SearchArray[0])
    const arrayCompareKeys = arrayCompare.splice(3,arrayCompare.length)
    const filterObj = FilterArray.filter(obj=>obj.id===id)
    
    return (
        <div className="product--container">
            {filterObj.map((item:{id:string;image:string,Name:string;Company:string;Category:string,Price:number})=>(
                <div className="product--container--inner" key={item.id}>
                    <div className="product--container--inner--photo">
                        <img src={item.image} 
                        style={{height:'500px',width:'600px'}} alt="Not Found"/>
                    </div>
                    <div className="product--container--inner--info">
                        <ul>
                            <li className="product--container--inner--info--name">
                                {item.Name}</li>
                            <li className="product--container--inner--info--price">
                                Price: ₹ {item.Price}</li>      
                            <li className="product--container--inner--info--company">
                                Brand: {item.Company}</li>
                                {arrayCompareKeys.map((keys)=>
                                filterObj.map((item:any)=><li>{keys}{' : '}{item[`${keys}`]}</li>))}
                        </ul>
                    </div>
                    <div className="product--container--inner--cart">
                        <h3>To buy, select Size</h3>
                        <button className="product--container--inner--cart--addtocart"
                            onClick={
                                ()=>dispatch(addToCart(item.id,item.image,item.Name,item.Company,item.Category,item.Price))
                            }
                        >
                            Add To Cart</button>
                        <button className="product--container--inner--cart--buynow">
                            <Link to="/cart" className="product--container--inner--cart--buynow--link">
                                Buy Now
                            </Link>
                        </button>
                    </div>
                   
                </div>
            ))}
        </div>

    )
}

export default Product;