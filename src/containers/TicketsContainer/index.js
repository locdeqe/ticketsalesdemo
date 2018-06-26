import {connect} from 'react-redux'
import TicketsComponent from '../../components/TickectsComponent'

const filterTickets = (tickets, filters) => {
    if (!filters.length) return tickets;

    const filtred = tickets.filter((item)=>{
        return (filters.indexOf(item.stops) > -1);
    });

    return filtred;
}


const mapStateToPros = (state) => {
    const allTickets = state.tickets.tickets.tickets || [];
    const filters = state.filters.filters || [];
    return {
        tickets: filterTickets(allTickets, filters)
    }
}


const TicketsContainer = connect(mapStateToPros)(TicketsComponent)

export default TicketsContainer