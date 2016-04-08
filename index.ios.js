/**
 * MeiTuan fro React Native App
 * Liupeng 2016-04-01
 */
'use strict';

import React, {
	AppRegistry,
	Component,
	StyleSheet,
	TabBarIOS,
	NavigatorIOS,
} from 'react-native';

import ProductListTab from './components/ProductList';
import PersonalTab from './components/PersonalTab';
import MoreInfoTab from './components/MoreInfoTab';
import Home from './Home';

class MeituanProject extends Component {
	constructor(props){
		super(props);
		this.state = {
			selectedTab: 'home',
		};
	}

	changeTab = (tabName)=> {
		this.setState({
			selectedTab: tabName
		});
	}

	render() {
		return (
		<TabBarIOS>
				<TabBarIOS.Item
					title="首页"
					icon={require('image!icon_tabbar_homepage_selected')}
					onPress={()=> this.changeTab('home')}
					selected={ this.state.selectedTab === 'home'}>
					<NavigatorIOS
						style={styles.container}
						initialRoute={{
            title: '首页',
            component: Home,
            navigationBarHidden: true,
            //rightButtonIcon: require('image!icon_tabbar_onsite'),
            }}
					/>
				</TabBarIOS.Item>

				{/*<TabBarIOS.Item
					title="上门"
					icon={require('image!icon_tabbar_onsite')}
					onPress={()=> this.changeTab('shangmen')}
					selected={ this.state.selectedTab === 'shangmen'}>
					<NavigatorIOS
						style={styles.container}
						initialRoute={{
            title: '上门',
            component: ItemListView,
            }}
					/>
				</TabBarIOS.Item>*/}

		<TabBarIOS.Item
					title="商家"
					icon={require('image!icon_tabbar_merchant_normal')}
					onPress={()=> this.changeTab('shangjia')}
					selected={ this.state.selectedTab === 'shangjia'}>
					<NavigatorIOS
						style={styles.container}
						initialRoute={{
            title: '商家',
            component: ProductListTab,
            }}
					/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title="我的"
					icon={require('image!icon_tabbar_mine')}
					onPress={()=> this.changeTab('wode')}
					selected={ this.state.selectedTab === 'wode'}>
					<NavigatorIOS
						style={styles.container}
						initialRoute={{
            title: '我的',
            component: PersonalTab,
            }}
					/>
				</TabBarIOS.Item>

				<TabBarIOS.Item
					title="更多"
					icon={require('image!icon_tabbar_misc')}
					onPress={()=> this.changeTab('more')}
					selected={ this.state.selectedTab === 'more'}>
					<NavigatorIOS
						style={styles.container}
						initialRoute={{
            title: '更多',
            component: MoreInfoTab,
            }}
					/>
				</TabBarIOS.Item>
			</TabBarIOS>
		);
	}
}

const styles = StyleSheet.create({
	pageView: {
		flex: 1,
	},
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
});

AppRegistry.registerComponent('MeituanProject', () => MeituanProject);