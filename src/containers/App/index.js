import React from 'react'
import { connect } from 'react-redux'
import Logo from '../../components/Logo'
import LeftMenu from '../../components/LeftMenu'
import TicketsContainer from '../TicketsContainer'


class App extends React.PureComponent {
	render () {
		return (
			<div className = "mainWorkArea">
				<div className = "logoSection">
					<Logo/>
				</div>
				<div className = "contenArea">
					<LeftMenu/>
					<div className = "ticetsWrapper">
						<TicketsContainer/>
					</div>
				</div>
			</div>
		)
	}
}

export default connect()(App)
