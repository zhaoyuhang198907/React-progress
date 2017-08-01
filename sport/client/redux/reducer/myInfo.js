import * as types from '../actionTypes'
const myInfo=(state={},action)=>{
    switch (action.type){
        case types.SET_MY_INFO:
            return Object.assign({},state,action.myInfo);
    }
    return state
};
export default myInfo;