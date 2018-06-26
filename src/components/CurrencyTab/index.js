import React from 'react'
import CurrencyButton from '../CurrencyButton'

class CurrencyTab extends React.PureComponent {
    render() {
        return(
            <div className="currencyTabWrapper"> 
                <h2 className="subHeader subHeader--curency">Валюта</h2>
                <div className="switcher">
                    <CurrencyButton currency = "rub" order = "first"  onClick = {()=>this.props.switchCurrency("rub")}>
                    </CurrencyButton>
                    <CurrencyButton currency = "usd" onClick = {()=>this.props.switchCurrency("usd")}>
                    </CurrencyButton>
                    <CurrencyButton currency = "eu" order = "last"  onClick = {()=>this.props.switchCurrency("eu")}>
                    </CurrencyButton>
                </div>
            </div>
        )
    }
}

export default CurrencyTab
