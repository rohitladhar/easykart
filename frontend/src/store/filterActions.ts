export const FILTER_ADD_ITEM = 'FILTER_ADD_ITEM';
export const FILTER_DELETE_ITEM = 'FILTER_DELETE_ITEM';

export type ActionType = 
|   {type:typeof FILTER_ADD_ITEM;payload:string}
|   {type:typeof FILTER_DELETE_ITEM;payload:number}

export const filterAddItem = (item:string):ActionType=>{
    return({
        type:'FILTER_ADD_ITEM',
        payload:item
    })
}

export const filterDeleteItem = (item:number):ActionType=>{
    return({
        type:'FILTER_DELETE_ITEM',
        payload:item
    })
}