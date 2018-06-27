import React from 'react'
import logoImg from './logo.png'

class Logo extends React.PureComponent {
    render() {
        return (
            <div className = "logo">
                <img src={logoImg} alt = "logo"/>
            </div>
        )
    }
}

export default Logo