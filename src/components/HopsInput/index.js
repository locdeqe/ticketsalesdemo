import React from 'react'

class HopsInput extends React.PureComponent {
    render() {
        return (
            <div>
                <input type="checkbox" checked = {this.props.active} onClick = {()=>this.props.changeFilter(this.props.count)}/>
                <span>{this.props.count}</span>
                <div onClick = {()=>this.props.changeFilter(this.props.count, true)}>Только</div>
            </div>
        )
    }
}

export default HopsInput