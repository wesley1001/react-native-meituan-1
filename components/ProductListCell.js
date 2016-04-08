/**
 * MeiTuan fro React Native App
 * Liupeng 2016-04-01
 */
'use strict'

import React, {
	Component,
	Image,
	PixelRatio,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native';

import {getImageSource} from './getImageSource';

export default class ProductListCell extends Component {
	render() {
		const {shopData, onSelect} = this.props;
		return (
			<View>
				<TouchableOpacity onPress={onSelect}>
					<View style={styles.row}>
						<Image source={getImageSource(shopData, 'imgurl')} style={styles.cellImage}/>
						<View style={styles.textContainer}>
							<Text style={styles.shopTitle} numberOfLines={1}>
								{shopData.brandname}
							</Text>
							<Text style={styles.goodsComments} numberOfLines={2}>
								{shopData.title}
							</Text>
							<View style={styles.goodsExtra}>
								<Text style={styles.priceColor}>{shopData.price}元 </Text>
								<View>
									<Text style={styles.goodsSold}>已售{shopData.solds || 0}</Text>
								</View>
							</View>
						</View>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	textContainer: {
		flex: 1,
	},
	shopTitle: {
		flex: 1,
		fontSize: 16,
		fontWeight: '500',
		// marginBottom: 2,
		marginTop: 2,
		height: 30,
	},
	goodsComments: {
		color: '#999999',
		fontSize: 12,
		// marginTop:5,
		marginBottom: 5,
	},
	goodsSold: {
		color: '#999999',
		fontSize: 11,
		// marginTop:5,
		marginBottom: 5,
	},
	goodsExtra: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	row: {
		alignItems: 'center',
		backgroundColor: 'white',
		flexDirection: 'row',
		padding: 5,
	},
	cellImage: {
		backgroundColor: '#dddddd',
		height: 93,
		marginRight: 10,
		width: 93,
	},
	cellBorder: {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
		// Trick to get the thinest line the device can display
		height: 1 / PixelRatio.get(),
		marginLeft: 4,
	},
	priceColor: {
		color: '#3EB433'
	},
});
