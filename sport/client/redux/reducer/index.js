import myInfo from './myInfo'
import setSportTime from './setSportTime'
import motionTypes from './motionTypes'
import sportToday from './addSportToday'
import {combineReducers} from 'redux'
import sportHistory from './sportHistory'
import {filterHistoryList,filterList} from './filterList'
import todayInfo from './todayInfo'
import ajaxCompleted from './ajaxCompleted'
export default combineReducers({myInfo,setSportTime,motionTypes,sportToday,sportHistory,filterList,todayInfo,filterHistoryList,ajaxCompleted});