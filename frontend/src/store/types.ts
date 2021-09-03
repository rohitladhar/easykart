export interface Cart{
    id:string,
    image:string,
    Name:string,
    Company:string
    Category:string,
    Price:number,
    qty:number,   
}


export interface StoreCart{
    cart:Cart[],
}

export interface StoreFilter{
    filterItem:string[]
}