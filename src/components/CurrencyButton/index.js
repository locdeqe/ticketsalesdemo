import React from 'react'

class CurrencyButton extends React.PureComponent {
    render() {
        let classes = 'currencyButton'
        if (this.props.order === "first") {
            classes += " currencyButton-first"
        } else if (this.props.order === "last") {
            classes += " currencyButton-last"
        }

        if (this.props.current === this.props.currency) {
            classes += " currencyButton-active"
        }

        return (
            <button className={classes} onClick = {this.props.onClick}>
                <div>{this.props.currency}</div>
            </button>
        )
    }
}

export default CurrencyButton