import React from 'react'

class HopsInput extends React.PureComponent {
    render() {
        const onlyButtonElem = (this.props.count !== "Все") ? 
            <div className = "onlyOneButton" onClick = {()=>this.props.changeFilter(this.props.count, true)}>Только</div> : <div></div>;
        return (
            <div className = "hopsInputs">
                <div>
                    <input className = "hopsInput" type="checkbox" id={`checkbox-${this.props.count}`} checked = {this.props.active} onChange = {()=>this.props.changeFilter(this.props.count)}/>
                    <label htmlFor = {`checkbox-${this.props.count}`}></label>
                    <span>{this.props.count}</span>
                </div>
                {onlyButtonElem}
            </div>
        )
    }
}

export default HopsInput