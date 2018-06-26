import {createStore} from 'redux'
import reducer from './reducers'

export default function initSrore(){
    const store = createStore(reducer)
    return store
}