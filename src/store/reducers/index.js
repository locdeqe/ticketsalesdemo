import { combineReducers } from 'redux'
import currency from './currency'
import filters from './filters'
import tickets from './tickets'

export default combineReducers({
    currency,
    filters,
    tickets
})