import a from '../images/mobiles/realme-1.jpeg';
import b from '../images/mobiles/realme-2.png';
import c from '../images/mobiles/realme-3.jpg';
import d from '../images/mobiles/realme-4.jpg';
import e from '../images/mobiles/samsumg-1.jpg';
import f from '../images/mobiles/samsumg-2.jpg';
import g from '../images/mobiles/samsumg-3.jpg';
import h from '../images/mobiles/samsumg-4.jpg';
import i from '../images/mobiles/samsumg-5.jpg';
import j from '../images/mobiles/oppo-1.jpg'
import k from '../images/mobiles/oppo-2.jpg'
import l from '../images/mobiles/oppo-3.jpg'
import m from '../images/mobiles/oppo-4.jpg'
import n from '../images/mobiles/redmi-1.jpeg';
import o from '../images/mobiles/redmi-2.jpg';
import p from '../images/mobiles/redmi-3.jpg';
import q from '../images/mobiles/redmi-4.jpg';
export interface IMobile{
    id:string;
    Name:string,
    Price:number,
    Company:string,
    RAM:string,
    ROM:string,
    OS:string,
    image:string,
    Category:string
}

export interface IMobileCategory{
    title:string,
    offer:string,
    company:string,
    image:string
}

export const Mobiles:Array<IMobileCategory>=[
    {
        company:"Realme",
        image:a,
        title:"mobile",
        offer:"40% seasonal"

    },
    {
        company:"Samsumg",
        image:f,
        title:"mobile",
        offer:"40% cashback"
    },
    {
        company:"Oppo",
        image:m,
        title:"mobile",
        offer:"additional chargers"
    },
    {
        company:"Redmi",
        image:q,
        title:"mobile",
        offer:"cheap on weekends",
    },
]


export const Mobile:Array<IMobile>=[
    {
        id:'dsfvw42365sdhvsdf23',
        Name:"Realme c15",
        Price:10000,
        Company:"Realme",
        RAM:"4GB",
        ROM:"64GB",
        OS:"Android",
        image:a,
        Category:"Mobile"
    },
    {
        id:'dsf2cvxvxcssdhvsdf23',
        Name:"Realme Narzo",
        Price:13500,
        Company:"Realme",
        RAM:"4GB",
        ROM:"128GB",
        OS:"Android",
        image:b,
        Category:"Mobile"
    },
    {
        id:'dsfvw42dfsf2342f23',
        Name:"Realme Narzo20",
        Price:15000,
        Company:"Realme",
        RAM:"6GB",
        ROM:"128GB",
        OS:"Android",
        image:c,
        Category:"Mobile"
    },
    {
        id:'dsfvw423da21vxvxdf23',
        Name:"Realme three",
        Price:9000,
        Company:"Realme",
        RAM:"3GB",
        ROM:"32GB",
        OS:"Android",
        image:d,
        Category:"Mobile"
    },
    
    {
        id:'dsfvw42365smcuic2df23',
        Name:"Samsung One",
        Price:20000,
        Company:"Samsumg",
        RAM:"6GB",
        ROM:"128GB",
        OS:"Android",
        image:e,
        Category:"Mobile"
    },
    {
        id:'dsfvwdadas23423f23',
        Name:"Samsung Two",
        Price:25000,
        Company:"Samsumg",
        RAM:"8GB",
        ROM:"256GB",
        OS:"Android",
        image:f,
        Category:"Mobile"
    },
    {
        id:'dsfvw42asdasdaasasdf23',
        Name:"Samsung Three",
        Price:30000,
        Company:"Samsumg",
        RAM:"4GB",
        ROM:"64GB",
        OS:"Windows",
        image:g,
        Category:"Mobile"
    },
    {
        id:'dsfvwdfasfsaasasafhvsdf23',
        Name:"Samsung Fold",
        Price:40000,
        Company:"Samsumg",
        RAM:"8GB",
        ROM:"512GB",
        OS:"Android",
        image:h,
        Category:"Mobile"
    },
    {
        id:'dsfvw4sdfdsefqwfvsdf23',
        Name:"Samsumg S10",
        Price:14500,
        Company:"Samsumg",
        RAM:"6GB",
        ROM:"256GB",
        OS:"Android",
        image:i,
        Category:"Mobile"
    },
    {
        id:'dsadasdsa23432sdfsf23',
        Name:"Oppo c15",
        Price:18500,
        Company:"Oppo",
        RAM:"6GB",
        ROM:"64GB",
        OS:"Android",
        image:j,
        Category:"Mobile"
    },
    {
        id:'dsfvw42365sdsdfsdwrwef23',
        Name:"Oppo c19",
        Price:27500,
        Company:"Oppo",
        RAM:"6GB",
        ROM:"128GB",
        OS:"Windows",
        image:k,
        Category:"Mobile"
    },
    {
        id:'dsfv24r32sdvsdf23',
        Name:"Oppo reno4",
        Price:40000,
        Company:"Oppo",
        RAM:"8GB",
        ROM:"256GB",
        OS:"Android",
        image:l,
        Category:"Mobile"
    },
    {
        id:'dsfvw4324234dssdf23',
        Name:"Oppo one",
        Price:17500,
        Company:"Oppo",
        RAM:"4GB",
        ROM:"128GB",
        OS:"Android",
        image:m,
        Category:"Mobile"
    },
    {
        id:'dsfvw423248fshvsdf23',
        Name:"Redmi 8",
        Price:16500,
        Company:"Redmi",
        RAM:"4GB",
        ROM:"64GB",
        OS:"Windows",
        image:n,
        Category:"Mobile"
    },
    {
        id:'dsfvw4236fsdfds324ds',
        Name:"Redmi 7",
        Price:7500,
        Company:"Redmi",
        RAM:"3GB",
        ROM:"32GB",
        OS:"Windows",
        image:o,
        Category:"Mobile"
    },
    {
        id:'dsfvw42365sdhfsdfsd23',
        Name:"Redmi 9",
        Price:11500,
        Company:"Redmi",
        RAM:"4GB",
        ROM:"64GB",
        OS:"Android",
        image:p,
        Category:"Mobile"
    },
    {
        id:'dsfvsdfsdsdhvsdf23',
        Name:"Redmi 10",
        Price:12500,
        Company:"Redmi",
        RAM:"6GB",
        ROM:"128GB",
        OS:"Android",
        image:q,
        Category:"Mobile"
    },
]