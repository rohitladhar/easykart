import a from '../images/clothes/pants-1.jpg';
import b from '../images/clothes/pants-2.jpg';
import c from '../images/clothes/pants-3.jpg';
import d from '../images/clothes/pants-4.jpg';
import e from '../images/clothes/shirts-1.jpg';
import f from '../images/clothes/shirts-2.jpg';
import g from '../images/clothes/shirts-3.jpg';
import h from '../images/clothes/shirts-4.jpg';
import j from '../images/clothes/skirts-1.jpg'
import k from '../images/clothes/skirts-2.jpg'
import l from '../images/clothes/skirts-3.jpg'
import m from '../images/clothes/skirts-4.jpg'
import n from '../images/clothes/t-shirt-1.jpg';
import o from '../images/clothes/t-shirt-2.jpg';
import p from '../images/clothes/t-shirt-3.jpg';
import q from '../images/clothes/t-shirt-4.jpg';

export interface IClothes{
    id:string,
    Name:string,
    Category:string,
    Price:number,
    Company:string,
    Size:string,
    Material:string,
    Color:string,
    image:string
}

export interface IClothesCategory{
    category:string,
    offer:string,
    image:string
}

export const CLothes:Array<IClothesCategory>=[
    {
        image:a,
        category:"Pants",
        offer:"40% seasonal"
    },
    {
        image:f,
        category:"Shirts",
        offer:"40% cashback"
    },
    {
        image:m,
        category:"Skirts",
        offer:"additional chargers"
    },
    {
        image:q,
        category:"T-Shirt",
        offer:"cheap on weekends",
    },
]


export const Clothes:Array<IClothes>=[
    {     
        id:"435634sf23sdssdffds24234",
        Name:"Formal Pants for Unique Males",
        Category:"Pants",
        Price:800,
        Company:"Nike",
        Size:"XL",
        Material:"Cotton",
        Color:"Red",
        image:a
    },
    {
        id:"435634sf224323ffds24234",
        Name:"Formal Office for Unique Males",
        Category:"Pants",
        Price:1000,
        Company:"Adidas",
        Size:"XXL",
        Material:"Denim",
        Color:"Blue",
        image:b
    },
    {
        id:"435423ssdf980ssdffds24234",
        Name:"Formal Pants for Office",
        Category:"Pants",
        Price:950,
        Company:"Reebok",
        Size:"L",
        Material:"Woolen",
        Color:"Yellow",
        image:c
    },
    {
        id:"435423dnt5z0fpvbsfsfdf4234",
        Name:"Designer Pants for Office",
        Category:"Pants",
        Price:1500,
        Company:"Nike",
        Size:"XXXL",
        Material:"Cotton",
        Color:"Orange",
        image:d
    },
    
    {
        id:"435423dnt5sdjbvsdwrdf4234",
        Name:"Designer Shirts",
        Category:"Shirts",
        Price:450,
        Company:"Nike",
        Size:"S",
        Material:"Cotton",
        Color:"White",
        image:e
    },
    {
        id:"435423dnt512zkhnvfcx4234",
        Name:"Office Wear Shirts",
        Category:"Shirts",
        Price:650,
        Company:"Adidas",
        Size:"XXL",
        Material:"Cotton",
        Color:"Red",
        image:f
    },
    {
        id:"435423dnt5sdjaprynf44d4",
        Name:"Designer Shirts with No refund",
        Category:"Shirts",
        Price:950,
        Company:"Nike",
        Size:"XXL",
        Material:"Denim",
        Color:"White",
        image:g
    },
    {
        id:"435422947czxvmxzvxwrdf4234",
        Name:"Designer Shirts for professionals",
        Category:"Shirts",
        Price:2450,
        Company:"Denim",
        Size:"S",
        Material:"Silk",
        Color:"White",
        image:h
    },
    
    {
        id:"435423dnt5sd23423dsaoip4234",
        Name:"Office Wear Skirts",
        Category:"Skirts",
        Price:850,
        Company:"Denim",
        Size:"XXXL",
        Material:"Silk",
        Color:"Blue",
        image:j
    },
    {
        id:"435423d2mljhxcvdf23dsaoip4234",
        Name:"Professionals Women Skirts",
        Category:"Skirts",
        Price:1850,
        Company:"Nike",
        Size:"XXXL",
        Material:"Silk",
        Color:"Blue",
        image:k
    },
    {
        id:"435423dnskdfjbsdfs08z4234",
        Name:"Unique Style Women Skirts",
        Category:"Skirts",
        Price:350,
        Company:"Reebok",
        Size:"S",
        Material:"cotton",
        Color:"White",
        image:l
    },
    {
        id:"435423dns1pz04mhdfdss08z4234",
        Name:"Professional Style Women Skirts",
        Category:"Skirts",
        Price:1750,
        Company:"Nike",
        Size:"XXXL",
        Material:"Silk",
        Color:"Orange",
        image:m
    },
    {
        id:"435423dns1pz045ncxvrt34",
        Name:"T-shirt Exclusive Design",
        Category:"T-shirt",
        Price:250,
        Company:"Reebok",
        Size:"XL",
        Material:"Cotton",
        Color:"White",
        image:n
    },
    {
        id:"435423dnsz345xcvxvrt34",
        Name:"T-shirt Party Wear Specially for men",
        Category:"T-shirt",
        Price:350,
        Company:"Reebok",
        Size:"L",
        Material:"Woolen",
        Color:"Orange",
        image:o
    },
    {
        id:"435423dns1dsfb345zxvrt34",
        Name:"Road Side Romeo",
        Category:"T-shirt",
        Price:750,
        Company:"Denim",
        Size:"XL",
        Material:"Silk",
        Color:"Red",
        image:p
    },
    {
        id:"435423dns1pz04dsfvsdmn4rt34",
        Name:"Impressive Design",
        Category:"T-shirt",
        Price:950,
        Company:"Adidas",
        Size:"XL",
        Material:"Woolen",
        Color:"Blue",
        image:q
    },

]