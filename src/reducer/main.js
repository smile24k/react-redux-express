import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
function hello(state = {data: {}},action) {
	return state;
}
const reducers = combineReducers({
	hello,
	routing
})
export default reducers;