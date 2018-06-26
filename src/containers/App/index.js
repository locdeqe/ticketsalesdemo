import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../components/Logo'
import LeftMenu from '../LeftMenu'
import TicketsContainer from '../TicketsContainer'
import './styles.css'

class App extends React.PureComponent {
	render () {
		return (
			<div className = "mainWorkArea">
				<div className = "logoSection">
					<h1>{this.props.currency}</h1>
					<Logo/>
				</div>
				<div className = "contenArea">
					<div className = "leftMenu">
						<LeftMenu/>
					</div>
					<div className = "ticetsWrapper">
						<TicketsContainer/>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		currency: state.currency.currency
	}
}

export default connect(mapStateToProps)(App)
