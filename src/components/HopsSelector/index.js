import React from 'react'
import HopsInput from '../HopsInput'

class HopsSelector extends React.Component {
    render() {
        let checkboxes = [];
        const allFilters = this.props.filters || [];

        let isAll = (!this.props.filters.length) ? true : false;
        checkboxes.push(
            <HopsInput key={99} count={"Все"} active = {isAll} changeFilter = {this.props.changeFilter}></HopsInput>
        );
        
        for (let i = 0; i <= this.props.maxHops; i++) {
            let isActive = (this.props.filters.indexOf(i) !== -1) ? true : false;
            checkboxes.push(
                <HopsInput key={i} count={i} active = {isActive} changeFilter = {this.props.changeFilter}></HopsInput>
            );
        };

        return(
            <div className="HopsSelectorWrapper"> 
                <h2 className="subHeader subHeader--hops">HopsSelector</h2>
                <div className="checkboxesContainer">
                    {checkboxes}
                </div>
            </div>
        )
    }
}

export default HopsSelector