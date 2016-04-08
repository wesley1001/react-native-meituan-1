/**
 * Created by Liupeng on 2016-04-01.
 */
'use strict';

import React, {
	Component,
	View,
	Image,
	StyleSheet,
	RefreshControl
} from 'react-native';
import ViewPager from 'react-native-viewpager';

const BANNER_IMGS = [
	require('../images/banner/1.jpg'),
	require('../images/banner/2.jpg'),
	require('../images/banner/3.jpg'),
	require('../images/banner/4.jpg')
];

export default class Viewpage extends Component {

	constructor(props) {
		super(props);
		// 用于构建DataSource对象
		var dataSource = new ViewPager.DataSource({
			pageHasChanged: (p1, p2) => p1 !== p2,
		});
		// 实际的DataSources存放在state中
		this.state = {
			dataSource: dataSource.cloneWithPages(BANNER_IMGS)
		}
	}

	_renderPage = (data, pageID) => {
		return (
			<Image
				source={data}
				style={styles.page}/>
		);
	}

	render() {
		return (
			<View>
				<ViewPager
					style={{height:130}}
					dataSource={this.state.dataSource}
					renderPage={this._renderPage}
					isLoop={true}
					autoPlay={true}/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	page: {
		flex: 1,
		height: 130,
		resizeMode: 'stretch'
	},
});