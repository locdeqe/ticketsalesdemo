import React from 'react'

class BuyButton extends React.PureComponent {
    render() {
        let sign = "₽";

        if (this.props.currency === "usd") {
            sign = "$";
        } else if (this.props.currency === "eu") {
            sign = "€";
        }

        return (
            <button className = "buyButton">
                Купить за {this.props.price} {sign}
            </button>
        )
    }
}

export default BuyButton