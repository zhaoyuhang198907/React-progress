import * as types from '../actionTypes'
const getSportHistory=(lists)=>({
    type:types.GET_HISTORY_SPORT_LIST,
    lists
});
const addSportHistory=(list)=>({
    type:types.ADD_HISTORY_SPORT_LIST,
    list
});


export {getSportHistory,addSportHistory}