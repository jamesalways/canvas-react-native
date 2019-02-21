import React, { PureComponent } from 'react'
import { bool, string, number, func, element, oneOfType, arrayOf } from 'prop-types'
import { StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { Box, SText } from 'app/components'
import { Metrics } from 'app/theme'
import { t } from 'app/lang'

export class FormGroup extends PureComponent {
	static propTypes = {
		CustomFormGroup: element,
		label: string.isRequired,
		error: string,
		minHeight: number,
		labelMaxWidth: number,
		onPress: func,
		children: oneOfType([element, arrayOf(element)]),
	}
	static defaultProps = {
		minHeight: 70,
		labelMaxWidth: 50,
	}

	render() {
		const {
			CustomFormGroup,
			label,
			error,
			minHeight,
			labelMaxWidth,
			onPress,
			children,
		} = this.props
		if (CustomFormGroup) {
			return <CustomFormGroup {...this.props} />
		}
		return (
			<TouchableWithoutFeedback onPress={onPress}>
				<Box
					cls="row-stretch-center white px-s b-b"
					style={{ minHeight: Metrics.scale.vertical(minHeight) }}
				>
					<SText
						cls="mr-s size14 bold label"
						style={{ maxWidth: Metrics.scale.percentage.horizontal(labelMaxWidth) }}
					>
						{t(label)}
					</SText>
					<Box cls="flex-1 col-center-right">{children}</Box>
					{error && (
						<SText
							cls="error size12 right px-s pb-5"
							numberOfLines={1}
							style={styles.error}
						>
							{error}
						</SText>
					)}
				</Box>
			</TouchableWithoutFeedback>
		)
	}
}

const styles = StyleSheet.create({
	error: {
		position: 'absolute',
		left: 0,
		bottom: 0,
		width: Metrics.screenWidth,
	},
})
