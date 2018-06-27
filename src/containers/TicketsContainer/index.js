import {connect} from 'react-redux'
import TicketsComponent from '../../components/TickectsComponent'

const handleTickets = (tickets, filters, currency) => {
    if (!tickets.length) return;

    const ticketsNotInRightCurrency = filterTickets(tickets, filters);
    const ticketsInRightCurrency = formatTickets(ticketsNotInRightCurrency, currency);

    return ticketsInRightCurrency;
}

const filterTickets = (tickets, filters) => {
    if (!filters.length) return tickets;

    const filtred = tickets.filter((item)=>{
        return (filters.indexOf(item.stops) > -1);
    });

    return filtred;
}

const formatTickets = (tickets, currency) => {

    const rubUsd = 62; //захордкол курс, можно получить по api от какого-нибудь сервиса
    const rubEu = 74;

    const curr = (currency === "usd") ? rubUsd : rubEu;

    const ticketsWithCurenccy = tickets.map((ticket) => {
        let price = ticket.price;

        if (currency !== "rub") {
            price = Math.round(ticket.price / curr);
        }
        
        const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
        const months = ['', 'янв', 'фев', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сен', 'окт', 'ноя', 'дек'];
        const departureDate = new Date(ticket.departure_date);
        const arrivalDate = new Date(ticket.arrival_date);
        const monthDepartureDate = ticket.departure_date.split('.')[0] 
                                        + " " + months[+ticket.departure_date.split('.')[1]]
                                        + " " +  ticket.departure_date.split('.')[2];

        const monthArrivalDate = ticket.arrival_date.split('.')[0] 
                                    + " " + months[+ticket.arrival_date.split('.')[1]]
                                    + " " +  ticket.arrival_date.split('.')[2];  

        const dayDep = days[departureDate.getDate()];
        const dayArr = days[arrivalDate.getDate()];
        const formatedDepartureDate = `${monthDepartureDate}, ${dayDep}`;
        const formatedArrivalDate = `${monthArrivalDate}, ${dayArr}`;
        return  {...ticket, price: price, departure_date: formatedDepartureDate, arrival_date: formatedArrivalDate}
    });
    
    return ticketsWithCurenccy;
}


const mapStateToPros = (state) => {
    const allTickets = state.tickets.tickets.tickets || [];
    const filters = state.filters.filters || [];
    const currency = state.currency.currency || "rub";
    return {
        tickets: handleTickets(allTickets, filters, currency),
        currency: currency
    }
}


const TicketsContainer = connect(mapStateToPros)(TicketsComponent)

export default TicketsContainer