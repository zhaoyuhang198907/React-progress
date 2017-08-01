import * as types from '../actionTypes'
const filterList = (state = {motionContext:'All'}, action) => {
    switch (action.type) {
        case types.FILTER_MOTION_LIST:
            return Object.assign({},state,{motionContext:action.motionContext})
    }
    return state
};
const filterHistoryList = (state = {motionContext:'All'}, action) => {
    switch (action.type) {
        case types.FILTER_MOTION_LIST:
            return Object.assign({},state,{motionContext:action.motionContext})
    }
    return state;
};
export {filterList,filterHistoryList}