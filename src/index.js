import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import initStore from './store/initStore'
import ticketAction from './store/actions/fetchTickets'

const store = initStore();


fetch('/api/tickets.json').then((response)=>{
    response.json().then(data => {
        store.dispatch(ticketAction(data));
    });
});

render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
);
