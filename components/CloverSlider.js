/*
 * 源码来自https://github.com/hugohua/react-native-demo，有点小修改
 */

'use strict';

import Dimensions from 'Dimensions';
import PixelRatio from 'PixelRatio';
import React, {
	Component,
	StyleSheet,
	View,
	Text,
	Image,
	ScrollView,
} from 'react-native';

//获取可视窗口的宽高
let {width, height, scale} = Dimensions.get('window');
// 返回设备的像素密度
// pxielRatio===2: iPhone 4, 4S iPhone 5, 5c, 5s iPhone 6
// pxielRatio===3: iPhone 6 plus
let pxielRatio = PixelRatio.get();
let itemHeight = 100,
	picFormat = '_640x200xzq75.jpg';
//mui 3.0 slider 规范
//TODO 这种方式不够科学，目前只是实现效果，后续请@遂宇做优化吧
//IP6
if (width === 375) {
	itemHeight = 130;
	picFormat = '_750x234xzq75.jpg';
} else if (width === 414) { //IP6 Plug
	itemHeight = 99.6;
	picFormat = '_1080x260xzq75.jpg';
}

export default class CloverSlider extends Component {
	//默认值
	static defaultProps = {
		width: width,
		indicatorColor: '#FFFFFF',
		inactiveIndicatorColor: '#FFFFFF',
		timer: 5000,
		api: 'http://ald.taobao.com/recommend.htm?appId=lb-tms-1261576-40550',
		//api: 'http://ald.taobao.com/recommend.htm?appId=lb-zebra-24139-328535',
	};

	//初始化用于状态转换的值
	constructor(props) {
		super(props);
		this.state = {
			currentX: 0,
			activePage: 0,
			dataSource: [],
		};
	}

	//拉取投放的数据
	fetchData = ()=> {
		let me = this;
		fetch(me.props.api)
			.then((response) => response.json())
			.then((responseData) => {
				me.setState({
					dataSource: responseData.data
				});
			})
			.done(this.start);
	}

	start = ()=> {
		let scrollView = this.refs.scrollView;
		let length = this.state.dataSource.length;

		this.timer = setInterval(()=> {
			let activePage;
			if ((this.state.activePage + 1) >= length) {
				activePage = 0;
			} else {
				activePage = this.state.activePage + 1;
			}
			let currentX = this.props.width * activePage;
			scrollView.scrollResponderScrollTo({x: currentX, y: 0, animated: true});

			this.setState({
				currentX: currentX,
				activePage: activePage,
			});
		}, this.props.timer)
	}

	componentDidMount() {
		this.fetchData();
	}

	componentWillUnmount() {
		this.timer && clearInterval(this.timer);
	}

	getImage = (url) => {
		if (url.search('https:') === -1) {
			return ('https:' + url);
		} else {
			return (url);
		}
	}

	//渲染单个图片
	renderItems = (data)=> {
		let weakself = this;
		return data.map(function (item, i) {
			let imgurl = weakself.getImage(item.img);
			return (
				<Image key={i} style={{width: width,height:itemHeight}} source={{uri: imgurl + picFormat}}/>
			);
		})
	}

	render() {
		let data = this.state.dataSource;
		return (
			<View style={styles.container}>
				<ScrollView
					ref='scrollView'
					contentContainerStyle={styles.container}
					automaticallyAdjustContentInsets={false}
					horizontal={true}
					pagingEnabled={true}
					showsHorizontalScrollIndicator={false}
					onMomentumScrollEnd={this.onAnimationEnd}>
					{this.renderItems(data)}
				</ScrollView>
				{this.renderPageIndicator()}
			</View>
		);
	}

	renderPageIndicator() {
		let indicators = [],
			style;

		for (let i = 0; i < this.state.dataSource.length; i++) {
			style = i === this.state.activePage ? {
				color: this.props.indicatorColor,
				opacity: 1
			} : {color: this.props.inactiveIndicatorColor, opacity: 0.3};
			indicators.push(<Text key={i} style={[style, {fontSize: 32}]}>&bull;</Text>)
		}

		return (
			<View style={styles.pageIndicator}>
				{indicators}
			</View>
		)
	}

	onAnimationEnd = (e)=> {
		let activePage = e.nativeEvent.contentOffset.x / width;
		this.setState({
			currentX: e.nativeEvent.contentOffset.x,
			activePage: activePage,
		});
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red',
	},
	pageIndicator: {
		position: 'absolute',
		backgroundColor: 'transparent',
		left: 10,
		bottom: -10,
		flexDirection: 'row'
	}
});
