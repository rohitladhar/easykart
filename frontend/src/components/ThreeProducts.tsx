import React,{useState} from 'react';
import { Mobile } from '../data/Mobile';
import {Link} from 'react-router-dom';
import {IProps} from './Products'
import { useSelector } from 'react-redux';
import {RootState} from '../store/cartStore';
const ThreeProducts:React.FC<IProps>=({productCategory})=>{
    
    const [counter,setCounter] = useState<number>(0)
    const [FilterArray,setFilterArray] = useState(Mobile)
    const {filterItem} = useSelector((state:RootState)=>state.filterR)
    if(filterItem.length!==0 && filterItem.length!==counter){
        
        const stringBreak = filterItem[counter].split(',')
        const FilterKey = stringBreak[0]
        const FilterValue = stringBreak[1]
        setCounter(counter=>counter+1)
        setFilterArray(FilterArray=>FilterArray.filter((item:any)=>item[`${FilterKey}`]===FilterValue))
    }


    return(
        <div className="threeproducts--container">
            {FilterArray.map((item)=>(
                <div className="threeproducts--container--item" key={item.id}>
                    <div className="threeproducts--container--item--image">
                        <Link to={`/product/${productCategory}/${item.id}`}
                                style={{backgroundColor:'white',color:'black'}}>
                        <img src={item.image} 
                        style={{width:'250px',height:'300px'}} alt="Not Found"/>
                        </Link>
                    </div>
                    <div className="threeproducts--container--item--ul">
                        <ul>
                            <li className="threeproducts--container--item--ul--name">
                                <Link to={`/product/${productCategory}/${item.id}`}
                                style={{backgroundColor:'white',color:'black'}}>
                                    {item.Name}
                                </Link>
                            </li>
                            <li className="threeproducts--container--item--ul--category">
                                {item.Company}
                            </li>
                            
                            <li className="threeproducts--container--item--ul--price" >
                               ₹ {item.Price} 
                            </li>
                            <li>
                                Free Delivery by EasyKart 
                            </li>                           
                        </ul>
                    </div>    
                </div>
            ))}
            
        </div>
    )
}

export default ThreeProducts;