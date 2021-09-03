import{
    ActionType,
    FILTER_ADD_ITEM,
    FILTER_DELETE_ITEM
} from './filterActions';

import {StoreFilter} from './types';



function filterReducer(
    state:StoreFilter={
        filterItem:[]
    },
    action:ActionType
){
    switch(action.type){
        case FILTER_ADD_ITEM:
            return{
                ...state,
                filterItem:[...state.filterItem,action.payload]
            }
        case FILTER_DELETE_ITEM:
           console.log(state)
            return{
                ...state,
                filterItem: [
                    ...state.filterItem.slice(0, action.payload),
                    ...state.filterItem.slice(action.payload + 1)
                ],
            }
        default:
        return state
    }
}

export default filterReducer;