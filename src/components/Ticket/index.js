import React from 'react';
import airPortImg from '../../assets/airLanes.png';
import BuyButton from '../BuyButton';
import HopsCount from '../HopsCount';

class Ticket extends React.Component {
    render() {
        return(
            <div className = "ticket">
                <div className = "ticket__leftPart">
                    <img src = {airPortImg} alt = "air"/>
                    <BuyButton price = {this.props.ticket.price} currency = {this.props.currency}></BuyButton>
                </div>
                <div className = "ticket__rightPart">
                    <div className = "ticket__timeLine">
                        <div className = "ticket__time">{this.props.ticket.departure_time}</div>
                        <HopsCount count = {this.props.ticket.stops}></HopsCount>
                        <div className = "ticket__time">{this.props.ticket.arrival_time}</div>
                    </div>
                    <div className = "ticket__destinationLine">
                        <div className = "ticket__destinationLineLeft">
                            <div className = "ticket__place">
                                {`${this.props.ticket.origin}, ${this.props.ticket.origin_name}`}
                            </div>
                            <div className = "ticket__date">
                                {this.props.ticket.departure_date}
                            </div>
                        </div>
                        <div className = "ticket__destinationLineRight">
                            <div className = "ticket__place">
                                {`${this.props.ticket.destination}, ${this.props.ticket.destination_name}`}
                            </div>
                            <div className = "ticket__date">
                                {this.props.ticket.departure_date}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Ticket