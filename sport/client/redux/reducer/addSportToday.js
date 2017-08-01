import * as types from '../actionTypes'
const sportToday=(state={contents:[]},action)=>{
    switch (action.type){
        case types.ADD_SPORT_TODAY:
            return Object.assign({},state,{contents:[...state.contents,action.content]});
        case types.GET_TODAY_SPORT_LIST:
            return Object.assign({},state,{contents:action.contents||[]})
    }
    return state
};
export default sportToday