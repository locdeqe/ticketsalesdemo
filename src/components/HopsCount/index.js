import React from 'react';

class HopsCount extends React.PureComponent {
    render() {
        let text = "пересадки";
        if (this.props.count === 0) {
            text = "пересадок";
        } else if (this.props.count === 1){
            text = "пересадка";
        }
        
        return(
            <div className = "hopsCount">
                {this.props.count} {text}
            </div>
        )
    }
}

export default HopsCount;