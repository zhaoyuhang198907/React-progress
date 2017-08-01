import * as types from '../actionTypes'
let initState={
    info:{
        isStart: false,
        isSelected: false,
        motion: '',
        isClick: false,
        isWarning:false
    }
};
const todayInfo=(state=initState,action)=>{
    switch (action.type){
        case types.SAVE_TODAY_INFO:
            return Object.assign({},state,{info:action.info})
    }
    return state;
};
export default todayInfo