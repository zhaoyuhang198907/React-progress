import * as types from '../actionTypes'
const sportTime=(time)=>({
    type:types.SET_SPORT_TIMER,
    time
});
const clearTime=()=>({
    type:types.CLEAR_SPORT_TIME
});
export {sportTime,clearTime}