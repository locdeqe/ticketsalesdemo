import React from 'react'
import CurrencyTabContainer from '../CurrencyTabContainer'
import HopsSelectorContainer from '../HopsSelectorContainer'
import './styles.css'

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