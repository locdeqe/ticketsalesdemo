import React from 'react'
import Ticket from '../Ticket'

class TicketsComponet extends React.Component {
    render() {
        let ticketsMarkUp = <div>Loading</div>;

        if (this.props.tickets) {
            const list = this.props.tickets.map(item => <li>{item.price}</li>);
            ticketsMarkUp = <ul>{list}</ul>
        }

        return (
            <div>
                <h1>TicketsComponet</h1>
                {ticketsMarkUp}
            </div>
        )
    }
}

export default TicketsComponet