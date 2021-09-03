import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import { Category } from '../data/Category';
import ThreeProducts from './ThreeProducts';
import {RootState} from '../store/cartStore';
import { useDispatch,useSelector } from 'react-redux';
import { filterAddItem,filterDeleteItem } from '../store/filterActions';

export interface RouteParams{
    id:string,
}

export interface IProps{
    productCategory:string
}

const Products: React.FC<IProps> = () => {
    const params = useParams<RouteParams>()
    const dispatch = useDispatch()
    const {filterItem} = useSelector((state:RootState)=>state.filterR)
    const [checkedValue] = useState<boolean>(true)
    const {id} = params;
    const valueFlat = Category.map((item)=>{
        return (
            Object.keys(item)
        )
    })
    const productCategory = id
    const value = valueFlat.flat()
    const findValue = value.indexOf(id)
    const SearchedArray = Category[findValue]
    const SearchArray = Object.values(SearchedArray)
    const FilteredKeys = Object.keys(SearchArray[0])
    const newSearchValues = SearchArray[0]
    
    const handleClick =(items:string,element:string,checkedValue:boolean)=>(e:React.MouseEvent)=>{
        const inputValue = element +","+ items+","+checkedValue
        if(filterItem.includes(inputValue)){
            const index = filterItem.indexOf(inputValue)
            dispatch(filterDeleteItem(index))
            
        }else{          
            dispatch(filterAddItem(inputValue))   
        } 
    }

    const handleChange =(items:string,element:string,checkedValue:boolean)=>(e:React.ChangeEvent)=>{
        const inputValue = element +","+ items+","+checkedValue
        console.log(filterItem)
        if(filterItem.includes(inputValue)){
            const index = filterItem.indexOf(inputValue)
            dispatch(filterDeleteItem(index))
            
        }else{          
            dispatch(filterAddItem(inputValue))   
        }     
    }


    const SearchComponent=(element:string)=>{  
        const asArray = Object.entries(newSearchValues);
        const filtered = asArray.filter(([key]) => key === element);
        const justStrings = Object.fromEntries(filtered);
        const newBrandArray = Object.values(justStrings)
        const newBrandArrayNew:any=newBrandArray[0]
        const compareType = newBrandArrayNew[0]
        const compareArray = newBrandArrayNew[1]
      
        if(compareType[0]==="typeOne"){
            
            return(
                <div className="products--container--left--input">           
                {compareArray.map((items:any) => (
                    <div className="products--container--left--input--inner" key={items}>
                        <input type="checkbox" 
                            onChange={handleChange(items,element,checkedValue)} 
                            /> {items}
                    </div>))}
                </div>
            )
        }else if(compareType[0]==="typeTwo"){
            return(
                <div className="products--container--left--input">           
                {compareArray.map((items:any) => (
                    <div className="products--container--left--input--button" key={items}>        
                        <button onClick={handleClick(items,element,checkedValue)}>{items}</button>
                    </div>))}
                </div>
            )
        }else{
            return(
                <div className="products--container--left--input">           
                {compareArray.map((items:any) => (
                    <div className="products--container--left--input--inner" key={items}>
                        <input type="checkbox" 
                            onChange={handleChange(items,element,checkedValue)} 
                        /> {items}
                    </div>))}
                </div>
            )
        }  
    }
    
    return (
        <div className="products--container">
            <div className="products--container--left">
                {FilteredKeys.map((element)=>{
                    return(
                    <div className="products--container--left--brandcontainer" key={element}>
                        <h3>{element}</h3>
                        {SearchComponent(element)}
                    </div>
                    )
                })}
                            
            </div>
            <div className="products--container--right">
                <div className="products--container--right--item">
                    <ThreeProducts productCategory={productCategory}/> 
                </div>
            </div>
        </div>
    )
}

export default Products;