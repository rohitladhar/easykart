import{
    ActionTypes,
    ADD_TO_CART,
    DELETE_TO_CART,
    UPDATE_TO_CART
} from './cartActions'

import { Cart,StoreCart } from "./types";

const addItem=(cart:Cart[],id:string,image:string,
    Name:string,Company:string,Category:string,Price:number):Cart[]=>[
    ...cart,
    {
        id,image,Name,Company,Category,Price,qty:1
    }
]

const existItem=(cart:Cart[],id:string,image:string,
    Name:string,Company:string,Category:string,Price:number,qty:number):Cart[]=>[
    ...cart,
    {
        id,image,Name,Company,Category,Price,qty
    }
]

const deleteItem=(cart:Cart[],id:string):Cart[]=>cart.filter((item)=>item.id!==id)

function cartReducer(
    state:StoreCart={
        cart: [],
    },
    action:ActionTypes
){
    switch(action.type){
        case ADD_TO_CART:
            const index = state.cart.findIndex((item)=>item.id===action.payload.id)
            if(index!==-1){
                const item = state.cart[index]
                item['Price'] = item.Price+action.payload.Price
                item['qty'] = item.qty + 1
                state.cart.splice(index,1)
                return{
                    ...state,
                    cart:existItem(state.cart,item.id,item.image,item.Name,item.Company,item.Category,item.Price,item.qty)
                }  
            }
            return{
                ...state,
                cart:addItem(state.cart,action.payload.id,
                    action.payload.image,action.payload.Name,
                    action.payload.Company,action.payload.Category,
                    action.payload.Price
                    )
            }
        case DELETE_TO_CART:
            return{
                ...state,
                cart:deleteItem(state.cart,action.payload)
        }

        case UPDATE_TO_CART:
            const updateQty = state.cart.findIndex((item)=>item.id===action.payload.id)
            const item = state.cart[updateQty]
            item['Price'] = (item.Price/item.qty)*action.payload.qty
            item['qty'] = action.payload.qty
            state.cart.splice(updateQty,1)
            return{
                ...state,
                cart:existItem(state.cart,item.id,item.image,item.Name,item.Company,item.Category,item.Price,item.qty)
            }   
        default:
            return state;
    }    
}

export default cartReducer