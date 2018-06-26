import React from 'react'

class CurrencyButton extends React.PureComponent {
    render() {
        let classes = 'currencyButton'
        if (this.props.order === "first") {
            classes += " currencyButton-first"
        } else if (this.props.order === "last") {
            classes += " currencyButton-last"
        }

        return (
            <div className={classes} onClick = {this.props.onClick}>
                <div>{this.props.currency}</div>
            </div>
        )
    }
}

export default CurrencyButton