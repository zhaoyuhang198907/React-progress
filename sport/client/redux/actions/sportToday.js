import * as types from '../actionTypes'
const addSportToday=(content)=>({
    type:types.ADD_SPORT_TODAY,
    content
});
const getSportToday=(contents)=>({
    type:types.GET_TODAY_SPORT_LIST,
    contents
});
export {addSportToday,getSportToday}