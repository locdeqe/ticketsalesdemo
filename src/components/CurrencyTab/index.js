import React from 'react'
import CurrencyButton from '../CurrencyButton'

class CurrencyTab extends React.PureComponent {
    render() {
        return(
            <div className="currencyTabWrapper"> 
                <h2 className="subHeader subHeader--curency">Валюта</h2>
                <div className="switcher">
                    <CurrencyButton currency = "rub" current = {this.props.current} order = "first"  onClick = {()=>this.props.switchCurrency("rub")}>
                    </CurrencyButton>
                    <CurrencyButton currency = "usd" current = {this.props.current} onClick = {()=>this.props.switchCurrency("usd")}>
                    </CurrencyButton>
                    <CurrencyButton currency = "eu" current = {this.props.current} order = "last"  onClick = {()=>this.props.switchCurrency("eu")}>
                    </CurrencyButton>
                </div>
            </div>
        )
    }
}

export default CurrencyTab
