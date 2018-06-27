import React from 'react'
import CurrencyTabContainer from '../../containers/CurrencyTabContainer'
import HopsSelectorContainer from '../../containers/HopsSelectorContainer'

class LeftMenu extends React.Component {
    render() {
        return(
            <div className="leftMenu">
                <CurrencyTabContainer></CurrencyTabContainer>
                <HopsSelectorContainer></HopsSelectorContainer>
            </div>
        )
    }
}

export default LeftMenu