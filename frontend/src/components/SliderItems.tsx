import React from 'react';
import {FiArrowRight,FiArrowLeft} from 'react-icons/fi'
import {Samsumg} from '../data/Samsumg';
const SliderItems:React.FC=()=>{
    return(
        <div className="slideritems--container">
            <div className="slideritems--container--one">
                <div className="slideritems--container--one--header">
                    <h2><span>Today's deals</span></h2>
                </div>
                    
            </div>
            <div className="slideritems--container--two">
                <div className="slideritems--container--two--left">
                    <button>
                        <FiArrowLeft size={50}/>
                    </button>
                </div>
                <div className="slideritems--container--two--middle">
                {Samsumg.map((item)=>(
                    <div className="slideritems--container--two--middle--inner" key={item.title}>
                        <img src ={item.image} alt="Not Found" 
                        style={{width:'200px', height:'200px' ,cursor:'pointer'}}/>
                        <li className="slideritems--container--two--middle--inner--li">
                            {item.title}</li>
                        <li className="slideritems--container--two--middle--inner--li">
                            {item.price}</li>
                    </div>     
                ))}  
                </div>
            
                <div className="slideritems--container--two--right">
                    <button>
                        <FiArrowRight size={50}/>
                    </button>
                </div>  
            </div>
        </div>
    )
}

export default SliderItems;