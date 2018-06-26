import {connect} from 'react-redux'
import changeFilter from '../../store/actions/changeFilter'
import HopsSelector from '../../components/HopsSelector' 

const mapStateToPros = (state) => {
    let tickets = state.tickets.tickets.tickets;
    let filters = state.filters.filters || [];
    
    if (!tickets || !tickets.length) return {};

    let maxHops = tickets[0].stops;

    tickets.forEach(element => {
        if (element.stops > maxHops) maxHops = element.stops;
    });
    
    return {
        maxHops: maxHops,
        filters: filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFilter: (filt, isOnly = false) => {
            dispatch(changeFilter(filt, isOnly));
        }
    }
}

const HopsSelectorContainer = connect(mapStateToPros, mapDispatchToProps)(HopsSelector)

export default HopsSelectorContainer