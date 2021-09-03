import React,{useState} from 'react'
import bOne from '../images/banner-1.jpg'
import bTwo from '../images/banner-2.jpg'
import bThree from '../images/banner-3.jpg'
import bFour from '../images/banner-4.jpg'
import bFive from '../images/banner-5.jpg'
import bSix from '../images/banner-6.jpg'
import {FiArrowRight,FiArrowLeft} from 'react-icons/fi'

interface Islider{
    [index:number]:string;
}
let sliderData : Islider = [bOne,bTwo,bThree,bFour,bFive,bSix]


const Slider:React.FC=()=>{
     
    const [count,setCount] = useState<number>(0)
    const handleIncrement = () =>{
        if(count===5){
            setCount(0)
        }else{
        setCount((count)=>count+1)
        }
    
    }
    const handleDecrement = () =>{
    if(count===0){
        setCount(5)
        }else{
            setCount((count)=>count-1)
        }    
    }  
    return(
        <div className="slider--container"> 
            <div className="slider--container--left">
                <button onClick={handleDecrement}>
                    <FiArrowLeft size={50}/>
                </button>
            </div>
            <img src={sliderData[count]} alt="Not Found" 
            style={{width:'100vw',height:"75vh"}} />
            <div className="slider--container--right">
                <button onClick={handleIncrement}>
                    <FiArrowRight size={50}/>
                </button>
            </div>   
        </div>
    )
}

export default Slider

 //const [data,setData] = useState(0)
    //useEffect(()=>{
     //   if(data===6){
      //      setData(0)
      //  }
     //   setTimeout(()=>{setData((count)=>count+1)},5000)
  // },[data])
   // console.log(data)