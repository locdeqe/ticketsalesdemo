import React from 'react'
import {connect} from 'react-redux'
import changeCurrency from '../../store/actions/changeCurency'
import CurrencyTab from '../../components/CurrencyTab'

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        switchCurrency: (cur) => {
            dispatch(changeCurrency(cur))
        }
    }
}

const CurrencyTabContainer = connect(mapStateToProps, mapDispatchToProps)(CurrencyTab)

export default CurrencyTabContainer
