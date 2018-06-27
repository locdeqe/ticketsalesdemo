import React from 'react'
import Ticket from '../Ticket'

class TicketsComponet extends React.Component {
    render() {
        let ticketsMarkUp = <div>Loading</div>;

        if (this.props.tickets) {
            const list = this.props.tickets.map(item => {
                const key = `${item.carrier} ${item.departure_date} ${item.departure_time}`;
                return <Ticket key = {key} ticket = {item} currency = {this.props.currency}></Ticket>
            });
            ticketsMarkUp = <ul>{list}</ul>
        }

        return (
            <div>
                {ticketsMarkUp}
            </div>
        )
    }
}

export default TicketsComponet