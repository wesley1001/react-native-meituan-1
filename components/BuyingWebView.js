/**
 * MeiTuan fro React Native App
 * Liupeng 2016-04-01
 */
'use strict'

import React, {
	Component,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	WebView
} from 'react-native';

const DEFAULT_URL = 'http://i.meituan.com/topic/mingdian?ci=1&f=iphone';

export default class BuyingWebView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loopsRemaining: this.props.maxLoops,
			url: DEFAULT_URL,
			status: 'No Page Loaded',
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
		};
	}

	render() {
		shopData;
		return (
			<View style={styles.container1}>
				<WebView
					ref='webview1'
					automaticallyAdjustContentInsets={true}
					style={styles.webView}
					url={this.state.url}
					startInLoadingState={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container1: {
		flex: 1,
		backgroundColor: '#3b5998',
	},
	addressBarRow: {
		flexDirection: 'row',
		padding: 8,
	},
	webView: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		flex: 1,
	},
	addressBarTextInput: {
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderColor: 'transparent',
		borderRadius: 3,
		borderWidth: 1,
		height: 24,
		paddingLeft: 10,
		paddingTop: 3,
		paddingBottom: 3,
		flex: 1,
		fontSize: 14,
	},
	navButton: {
		width: 20,
		padding: 3,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderColor: 'transparent',
		borderRadius: 3,
	},
	disabledButton: {
		width: 20,
		padding: 3,
		marginRight: 3,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(255,255,255,0.25)',
		borderColor: 'transparent',
		borderRadius: 3,
	},
	goButton: {
		height: 24,
		padding: 3,
		marginLeft: 8,
		alignItems: 'center',
		backgroundColor: 'rgba(255,255,255,0.8)',
		borderColor: 'transparent',
		borderRadius: 3,
		alignSelf: 'stretch',
	},
	statusBar: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 5,
		height: 22,
	},
	statusBarText: {
		color: 'white',
		fontSize: 13,
	},
	spinner: {
		width: 20,
		marginRight: 6,
	},
});