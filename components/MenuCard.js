/**
 * MeiTuan fro React Native App
 * Liupeng 2016-04-01
 */
'use strict'

import React, {
	Component,
	Image,
	Text,
	View,
	StyleSheet,
} from 'react-native';

const cardData = [
	{
		img: 'icon_homepage_entertainmentCategory',
		text: '美食',
		link: 'http://3c.m.tmall.com'
	},
	{
		img: 'icon_homepage_foottreatCategory',
		text: '电影',
		link: 'http://3c.m.tmall.com'
	},
	{
		img: 'icon_homepage_hotelCategory',
		text: '酒店',
		link: 'http://3c.m.tmall.com'
	},
	{
		img: 'icon_homepage_KTVCategory',
		text: 'KTV',
		link: 'http://3c.m.tmall.com'
	},
];

export default class MenuCard extends Component {

	renderItems = (data)=> {
		return data.map(function (items, i) {
			return (
				<View key={i} style={styles.boxtd}>
					<Image source={{uri : items.img}} style={styles.cardImg}/>
					<Text style={styles.cardText}>
						{items.text}
					</Text>
				</View>
			)
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.boxtr}>
					{this.renderItems(cardData)}
				</View>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#22F2F2',
	},
	boxtr: {
		flexDirection: 'row',
		justifyContent: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 5,
		paddingRight: 5,
	},
	boxtd: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: 3,
	},
	cardImg: {
		width: 40,
		height: 40,
	},
	cardText: {
		color: '#000',
		fontSize: 14,
		marginTop: 10,
	},
});