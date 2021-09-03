import one from '../images/mobiles/samsumg-1.jpg';
import two from '../images/mobiles/samsumg-2.jpg';
import three from '../images/mobiles/samsumg-3.jpg';
import four from '../images/mobiles/samsumg-4.jpg';
import five from '../images/mobiles/samsumg-5.jpg';
export interface ISamsumg{
    image:string,
    title:string,
    price:number

}
export const Samsumg:Array<ISamsumg> = [
    {
        image:one,
        title:"Superior Quality Mobile",
        price:15000
    },
    {
        image:two,
        title:"Big Entertainer",
        price:25000
    },
    {
        image:three,
        title:"Screen Resolution",
        price:11000
    },
    {
        image:four,
        title:"Big mah Battery",
        price:30000
    },
    {
        image:five,
        title:"Quality Cameras",
        price:13500
    }
]

