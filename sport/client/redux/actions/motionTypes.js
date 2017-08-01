import * as types from '../actionTypes'
const addMotionType=(motion)=>({
    type:types.ADD_MOTION_TYPE,
    motion
});
const delMotionType=id=>({
    type:types.DEL_MOTION_TYPE,
    id
});
export {addMotionType,delMotionType}