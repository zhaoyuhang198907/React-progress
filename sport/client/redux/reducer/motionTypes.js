import * as types from '../actionTypes'
const motionTypes=(state={types:['Running','Jumping','Swimming','Climbing']},action)=>{
    switch (action.type){
        case types.ADD_MOTION_TYPE:
            return Object.assign({},state,{types:state.types.push(action.motion)})
    }
    return state;
};
export default motionTypes;