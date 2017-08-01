import * as types from '../actionTypes'
const setSportTime=(state={time:0},action)=>{
    switch (action.type){
        case types.SET_SPORT_TIMER:
            return Object.assign({},state,{time:state.time+1});
        case types.CLEAR_SPORT_TIME:
            return Object.assign({},state,{time:0});
    }
    return state;
};
export default setSportTime;