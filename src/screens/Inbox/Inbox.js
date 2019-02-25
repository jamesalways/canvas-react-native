import React, { Component } from 'react'
import PropTypes from '#propTypes'
import { connect } from 'react-redux'
import { AuthActions, GlobalActions } from '#actions'
import { ScreenView, SText, Button } from '@/components'

@connect(
	null,
	{
		signout: AuthActions.signout,
		showModalInfo: GlobalActions.showModalInfo,
	}
)
export class InboxScreen extends Component {
	static propTypes = {
		signout: PropTypes.func.isRequired,
		navigation: PropTypes.navigation.isRequired,
		showModalInfo: PropTypes.func.isRequired,
	}

	render() {
		const { signout, showModalInfo, navigation } = this.props
		const { navigate } = navigation
		return (
			<ScreenView cls="col-center">
				<SText size={24}>Inbox</SText>

				<Button text="Go to another screen" onPress={() => navigate('OtherScreen')} />
				<Button text="signout" onPress={signout} />

				<Button
					text="test modal"
					textAlign="center"
					toUpper
					onPress={() =>
						showModalInfo({
							title: 'título',
							text: 'texto',
							dismissBtnText: 'vale!',
							onDismiss: () => console.tron.log('wowow'),
						})
					}
				/>
			</ScreenView>
		)
	}
}

InboxScreen.navigationOptions = ({ navigation }) => ({
	title: 'InboxScreen',
})