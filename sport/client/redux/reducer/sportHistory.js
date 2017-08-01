import * as types from '../actionTypes'
const sportHistory=(state={lists:[]},action)=>{
    switch (action.type){
        case types.GET_HISTORY_SPORT_LIST:
            return Object.assign({},state,{lists:[...state.lists,...action.lists]});
        case types.ADD_HISTORY_SPORT_LIST:
            return Object.assign({},state,{lists:[...state.lists,action.list]});
    }
    return state;
};
export default sportHistory