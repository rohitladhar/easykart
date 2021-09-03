import a from '../images/grocery/musturd-1.jpg';
import b from '../images/grocery/musturd-2.jpg';
import c from '../images/grocery/musturd-3.jpg';
import d from '../images/grocery/musturd-4.jpg';
import e from '../images/grocery/tea-1.jpg';
import f from '../images/grocery/tea-2.jpg';
import g from '../images/grocery/tea-3.jpg';
import h from '../images/grocery/tea-4.jpg';
import j from '../images/grocery/sugar-1.jpg'
import k from '../images/grocery/sugar-2.jpg'
import l from '../images/grocery/sugar-3.jpg'
import m from '../images/grocery/sugar-4.jpg'
import n from '../images/grocery/refined-1.jpg';
import o from '../images/grocery/refined-2.jpg';
import p from '../images/grocery/refined-3.jpg';
import q from '../images/grocery/refined-4.jpg';

export interface IGrocery{
    id:string,
    Name:string,
    Category:string,
    Price:number,
    Company:string,
    image:string
}

export interface IGroceryCategory{
    category:string,
    offer:string,
    image:string
}

export const Groceries:Array<IGroceryCategory>=[
    {
        image:a,
        category:"Musturd Oil",
        offer:"40% seasonal"
    },
    {
        image:f,
        category:"Tea",
        offer:"40% cashback"
    },
    {
        image:m,
        category:"Sugar",
        offer:"additional chargers"
    },
    {
        image:q,
        category:"Refined Oil",
        offer:"cheap on weekends",
    },
]


export const Grocery:Array<IGrocery>=[
    {
        id:"sdkfjgjkw2384632dskjfgbd",
        Name:"Musturd Oil Tata Company",
        Category:"Musturd Oil",
        Price:220,
        Company:"Tata",
        image:a
    },
    {
        id:"sdkfjgjkw2383457sdfsdfbd",
        Name:"Musturd Oil Chor Company",
        Category:"Musturd Oil",
        Price:250,
        Company:"Relience",
        image:b
    },
    {
        id:"sdkfjgjkw2348dfngsdfds1bd",
        Name:"Musturd Oil MDH Company",
        Category:"Musturd Oil",
        Price:180,
        Company:"MDH",
        image:c
    },
    {
        id:"sdkfjgjkw293jknsdddbd",
        Name:"Musturd Oil Birla Company",
        Category:"Musturd Oil",
        Price:200,
        Company:"Birla",
        image:d
    },
    
    {
        id:"sdkfjgjkw0aspwnmghc7xsgbd",
        Name:"Assam Tea with Goodness",
        Category:"Tea",
        Price:500,
        Company:"Tata",
        image:e
    },
    {
        id:"sdkfjgjkw233456hkfhsafsdaf12d",
        Name:"Patna Tea with Goodness",
        Category:"Tea",
        Price:600,
        Company:"Birla",
        image:f
    },
    {
        id:"sdkfjgjkw238409578ksdngsdssdd",
        Name:"Chor Tea with Goodness",
        Category:"Tea",
        Price:550,
        Company:"Relience",
        image:g
    },
    {
        id:"sdkfjgjkw238576kfbkja345sdfd",
        Name:"MDH Tea with Goodness",
        Category:"Tea",
        Price:400,
        Company:"MDH",
        image:h
    },
    
    {
        id:"sdkfjgjkw605978skldf3495dsfbd",
        Name:"Refined Sugar Premium Quality",
        Category:"Sugar",
        Price:65,
        Company:"Tata",
        image:j
    },
    {
        id:"sdkfjgjkw238093485jsbdkgsdd",
        Name:"Low Quailty Sugar",
        Category:"Sugar",
        Price:35,
        Company:"Relience",
        image:k
    },
    {
        id:"kw2339486klasfnlas0fgbd",
        Name:"MDH Sugar",
        Category:"Sugar",
        Price:45,
        Company:"MDH",
        image:l
    },
    {
        id:"sdkfjgjkw3958nsdkfn43o5gbd",
        Name:"Birla Quality",
        Category:"Sugar",
        Price:40,
        Company:"Birla",
        image:m
    },
    {
        id:"sdkfjslc12sc34534553342d",
        Name:"Refined Oil Premium Quality",
        Category:"Refined Oil",
        Price:240,
        Company:"Birla",
        image:n
    },
    {
        id:"sdkfjgjkw23sdgfn589kdfdfdfs",
        Name:"Refined Oil from Tata Premium Quality",
        Category:"Refined Oil",
        Price:205,
        Company:"Tata",
        image:o
    },
    {
        id:"sdkfjgjkw2sdglkjn3457sdnfbd",
        Name:"Refined Oil MDH",
        Category:"Refined Oil",
        Price:180,
        Company:"MDH",
        image:p
    },
    {
        id:"sdkfjgjkw3456fndkndasd",
        Name:"Cheap Oil",
        Category:"Refined Oil",
        Price:250,
        Company:"Relience",
        image:q
    },

]