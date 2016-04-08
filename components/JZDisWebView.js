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

var DEFAULT_URL = '?ci=1&f=iphone&msid=48E2B810-805D-4821-9CDD-D5C9E01BC98A2015-07-02-16-25124&utm_campaign=AgroupBgroupFab_chunceshishuju__a__a___b1junglehomepagecatesort__b__leftflow___ab_gxhceshi__nostrategy__leftflow___ab_gxhceshi0202__b__a___ab_pindaochangsha__a__leftflow___ab_xinkeceshi__b__leftflow___ab_gxtest__gd__leftflow___ab_waimaiwending__a__a___ab_gxh_82__nostrategy__leftflow___i_group_5_2_deallist_poitype__d__d___ab_b_food_57_purepoilist_extinfo__a__a___ab_pindaoshenyang__a__leftflow___ab_pindaoquxincelue0630__b__b1___a20141120nanning__m1__leftflow___ab_i_group_5_3_poidetaildeallist__a__b___ab_waimaizhanshi__b__b1___ab_i_group_5_5_onsite__b__b___ab_i_group_5_6_searchkuang__a__leftflowGhomepage_topic2_7921&utm_content=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&utm_medium=iphone&utm_source=AppStore&utm_term=5.7&uuid=4B8C0B46F5B0527D55EA292904FD7E12E48FB7BEA8DF50BFE7828AF7F20BB08D&version_name=5.7';

export default class JZDisWebView extends Component {
	constructor(props) {
		super(props);
		this.state = {
			url: DEFAULT_URL,
			status: 'No Page Loaded',
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
		};
	}

	componentDidMount() {
		DEFAULT_URL = this.props.url + DEFAULT_URL;
		this.setState({
			url: DEFAULT_URL,
			status: 'No Page Loaded',
			backButtonEnabled: false,
			forwardButtonEnabled: false,
			loading: true,
		});
	}

	render() {
		this.inputText = this.state.url;
		if (DEFAULT_URL.search('http:') === 0) {
			return (
				<View style={[styles.container1]}>
					<WebView
						ref='webview2'
						automaticallyAdjustContentInsets={true}
						style={styles.webView}
						url={this.state.url}
						// onNavigationStateChange={this.onNavigationStateChange}
						startInLoadingState={true}
					/>
				</View>
			);
		} else {
			return (
				<View style={styles.container1}>
					{}
				</View>
			);
		}
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