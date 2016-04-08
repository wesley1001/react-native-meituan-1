/**
 * Created by liupeng on 4/7/16.
 */
'use strict';

import React, {
	Component,
	Platform,
	Image,
	TextInput,
	View,
	StyleSheet,
} from 'react-native';

export default class Header extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../images/header/icon_qr.png')} style={styles.scanIcon}/>
				<View style={styles.searchBox}>
					<Image source={require('../images/header/icon_search.png')} style={styles.searchIcon}/>
					<TextInput
						keyboardType='web-search'
						placeholder='搜索商品/店铺'
						style={styles.inputText}/>
					<Image source={require('../images/header/icon_voice.png')} style={styles.voiceIcon}/>
				</View>
				<Image source={require('../images/header/icon_qr.png')} style={styles.scanIcon}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: Platform.OS === 'ios' ? 20 : 0,
		height: Platform.OS === 'ios' ? 68 : 48,
		backgroundColor: '#21C0AE',
		alignItems: 'center',
	},
	logo: {
		height: 24,
		width: 64,
		resizeMode: 'stretch'  // 设置拉伸模式
	},
	searchBox: {
		height: 30,
		flexDirection: 'row',
		flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充
		borderRadius: 5,  // 设置圆角边
		backgroundColor: 'white',
		alignItems: 'center',
		marginLeft: 8,
		marginRight: 12
	},
	scanIcon: {
		height: 26.7,
		width: 26.7,
		resizeMode: 'stretch'
	},
	searchIcon: {
		marginLeft: 6,
		marginRight: 6,
		width: 16.7,
		height: 16.7,
		resizeMode: 'stretch'
	},
	voiceIcon: {
		marginLeft: 5,
		marginRight: 8,
		width: 15,
		height: 20,
		resizeMode: 'stretch'
	},
	inputText: {
		flex: 1,
		backgroundColor: 'transparent',
		fontSize: 14
	},
});