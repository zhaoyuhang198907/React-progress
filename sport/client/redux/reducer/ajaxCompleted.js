import * as types from '../actionTypes'
const ajaxCompleted = (state = {isAjax:false}, action) => {
    switch (action.type) {
        case types.SET_AJAX_COMPLETED:
            return Object.assign({},state,{isAjax:true})
    }
    return state
};
export default ajaxCompleted