export const ADD_TO_CART = 'ADD_TO_CART';
export const DELETE_TO_CART = 'DELETE_TO_CART';
export const UPDATE_TO_CART = 'UPDATE_TO_CART';


export type ActionTypes = 
|{ type: typeof ADD_TO_CART; payload: {id:string,image:string,
    Name:string,Company:string,Category:string,Price:number} }
|{ type: typeof DELETE_TO_CART; payload: string }
|{ type: typeof UPDATE_TO_CART; payload:{id:string,qty:number} }


export const addToCart=(
    id:string,image:string,Name:string,
    Company:string,Category:string,Price:number
    ):ActionTypes=>({
    type:'ADD_TO_CART',
    payload:{
        id,
        image,
        Name,
        Company,
        Category,
        Price,
    }
})

export const deleteToCart=(id:string):ActionTypes=>({
    type:DELETE_TO_CART,
    payload:id
})

export const updateToCart=(id:string,qty:number):ActionTypes=>({
    type:UPDATE_TO_CART,
    payload:{
        id,
        qty
    }
})