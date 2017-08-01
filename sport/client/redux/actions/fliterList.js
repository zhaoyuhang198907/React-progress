import * as types from '../actionTypes'
const filterList=motionContext=>{
    return {
        type:types.FILTER_MOTION_LIST,
        motionContext
    }
};
const filterHistoryList=motionContext=>{
    return {
        type:types.FILTER_MOTION_LIST,
        motionContext
    }
};
export {filterList,filterHistoryList}