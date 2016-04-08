/**
 * MeiTuan fro React Native App
 * Liupeng 2016-04-01
 */
'use strict'

import React, {
	Component,
	ScrollView,
	View,
	Text,
	Platform,
	StyleSheet,
} from 'react-native';

import Header from './components/Header';
import Menu  from './components/Menu';
import CloverSlider  from './components/CloverSlider';
import RushCell  from './components/RushCell';
import PromotionView  from './components/PromotionView';
import ProductList  from './components/ProductList';
import BuyingWebView  from './components/BuyingWebView';
import JZDisWebView  from './components/JZDisWebView';
import Viewpage from './components/Viewpage';

export default class Home extends Component {

	selectRush = ()=> {
		this.props.navigator.push({
			title: '名店抢购',
			component: BuyingWebView,
			passProps: {},
		});
	}

	selectDiscount = (url)=> {
		console.log('dis _' + url);
		this.props.navigator.push({
			title: '限时抢购',
			component: JZDisWebView,
			passProps: {url},
		});
	}

	selectShop = (shopData)=> {
		this.props.navigator.push({
			title: '限时抢购',
			component: BuyingWebView,
			passProps: {shopData},
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<Header />
				<ScrollView automaticallyAdjustContentInsets={false}>
					<CloverSlider />
					<Menu />
					{/*<Viewpage />
					<View style={styles.emptyView}/>
					 <MenuCard />*/}
					<View style={styles.emptyView}/>
					<RushCell onSelect={() => this.selectRush()}/>
					<View style={styles.emptyView}/>
					<PromotionView onSelect1={(a) => this.selectDiscount(a)}/>
					<View style={styles.emptyView}/>
					<ProductList onSelect={(a)=>this.selectShop(a)}/>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	flowView: {
		flex: 1,
		opacity: 0.2,
		justifyContent: 'center',
		alignItems: 'center',
		//backgroundColor: '#FFF2F2',
		position: 'absolute',
		top: 0, left: 0, right: 0,
	},
	container: {
		flex: 1,
	},
	emptyView: {
		height: 4,
		backgroundColor: '#F2F2F2'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 15,
	},
});
