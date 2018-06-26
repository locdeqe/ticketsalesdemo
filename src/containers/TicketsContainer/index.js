import {connect} from 'react-redux'
import TicketsComponent from '../../components/TickectsComponent'


const mapStateToPros = (state) => {
    return {
        tickets: state.tickets.tickets.tickets
    }
}


const TicketsContainer = connect(mapStateToPros)(TicketsComponent)

export default TicketsContainer