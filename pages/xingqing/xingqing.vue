<template>
	<view class="xingqing">
		<view class="topReturn" @tap="returnNext">
			<image src="../../static/ic_back.png" mode="widthFix"></image>
		</view>
		<view :class="{ xingqingTop: true,'text-danger': ydHight }">
			<view class="xingqing-text">
				<text v-for="(item,index) in SwiperPic.maodian" :class="{'text-on': SwiperPic.num == index}"
					@tap="whdd(index)">{{item}}</text>
			</view>
		</view>
		<view class="xingqing-1">
			<Swiper :picList="SwiperPic.picList" :info="SwiperPic.picList.length" :current="current"
				@changCur="changCur" class="xq-height" />
		</view>
		<view class="xingqing-2">
			联系客服领取平板、笔记本优惠券（多屏协同、自由互联）
		</view>
		<view class="xingqing-3">
			<view class="xingqing-3a">¥{{ggPhone.jiage}}</view>
			<view class="xingqing-3b">【新品上市】荣耀Magic4 Pro</view>
			<view class="xingqing-3c">全新一代骁龙8 | 多主摄融合计算摄影 | 智慧隐私通话</view>
			<view class="xingqing-3d">【重磅开售 三重福利】</view>
			<view class="xingqing-3d">①享12期免息</view>
			<view class="xingqing-3d">②购机抽荣耀手环6</view>
			<view class="xingqing-3d">③晒单限量赠荣耀耳机</view>
		</view>
		<view class="border"></view>
		<view class="xingqing-4">
			<view class="xingqing-4-a">
				<text>规格</text>
				<view class="xingqing-4-a-icon" @click="toggle('guigeShow')">已选：流金 {{ggPhone.banbText}} 官方标配</view>
			</view>
			<view class="xingqing-4-b">
				<view class="" @click="toggle('guigeShow')">
					<image :class="{borderKk: ggPhone.colorNum == index}" v-for="(item,index) in ggPhone.popupColor"
						:src="item.pic" mode="widthFix"></image>
				</view>
				<text>共有5种颜色规格可选</text>
			</view>
			<view class="xingqing-4-a">
				<text>送至</text>
				<view class="xingqing-4-a-icon" @click="addRessPage">{{store.city}}</view>
			</view>
			<view class="xingqing-4-a">
				<text>促销</text>
				<view class="xingqing-4-a-icon" @click="toggle('cuxiao')"></view>
			</view>
			<view class="xingqing-4-c">
				<text>分期免费</text>
				<view>花呗分期可享免息</view>
			</view>
			<view class="xingqing-4-a">
				<text>说明</text>
				<view class="xingqing-4-a-icon" @click="toggle('shuoming')"></view>
			</view>
			<view class="xingqing-4-d">
				<text>荣耀品牌商品</text>
				<text>全国包邮</text>
			</view>
			<Xingqing @changShow="changShow" :popShow="popShow" :typeShow="typeShow" />
		</view>
		<view class="border"></view>
		<view class="xingqing-4" id="whdd">
			<view v-for="(item,index) in SwiperPic.xqpic" :key="index">
				<image :src="item" mode="widthFix"></image>
			</view>
		</view>
		<view class="goods-carts">
			<uni-goods-nav :options="SwiperPic.options" :fill="true" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive, onMounted } from 'vue'
	import Swiper from '@/components/Swiper/Swiper.vue'
	import Xingqing from '@/pages/xingqing/xingqingMob.vue'
	import { useStore } from "@/stores/store.js"
	const SwiperPic = reactive({
		picList: [
			'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_29A1DC7017BB44A596A35BAD4B8AB5625F70EBB8EC338889.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_75E1A66A950B1D7DDFACB0B6D2C729C54101AAA7BA654072.png',
			'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/group/428_428_EB639E0DD73F247E822E8928CDF77413622C98D4ADEED4E3.png'
		],
		xqpic: [
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/870F5FFF5704A06B6BE52946EB9AC073DD9CD816AD88C82E.png',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/7FB11B87936370FAB30FE238790CC20296A9CB874D788785.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/D25974D7BE0D6957D225117D9AE4A9A062B52F1784EDA9FC.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/2AAAE3372CA9EDD370293E3FEB588028081A373FE4592896.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/E24318C1820053D299A09182A6A4866734AAB80BA34E308A.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/E47AD7CFA5A012125D56C02FF1939096C6C56DD9A862C4AB.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/71EB3C19789E3CBAD275EDE0380399386DB6E8EA836E1AF0.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/B725FEC7DFDBCE1CB3EDEC4FF766940D32AC6F1178891377.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/1136E7345DAB7D8BC0BF968C8943CDBFDA9C3B0BBC518C4D.jpg',
			'https://file05.c.hihonor.com/pimages/cnqx/detailImg/2022/04/15/7D73EBBE3B7872953CD438306AFB3ACAAABF19B3DAE426F0.jpg'
		],
		options: [{
			icon: 'chat',
			text: '客服'
		}, {
			icon: 'cart',
			text: '购物车',
			info: 0
		}],
		maodian: [
			'商品',
			'详情'
		],
		num: 0
	})
	const current = ref(0)
	const changCur = num => {
		current.value = num
	}
	const ydHight = ref(false)
	// 规格手机图片
	const ggPhone = reactive({
		popupColor: [{
			pic: 'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806829/428_428_E434BCFB5A18FDDD794107383F1CE9A7D46ADABF9D9EB0C0mp.png',
			text: '亮黑'
		}, {
			pic: 'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/428_428_DFAA119DB95B72DC3CBAD56A7FD5D0FD4A450EAAB2BF79B7mp.png',
			text: '流金'
		}, {
			pic: 'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806843/428_428_DB46CAE0711AAE4B3D749179A7F165540E36FC5E7FF8460Cmp.png',
			text: '瓷青'
		}, {
			pic: 'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806867/428_428_85349EEBC8084F0DBC098E3B49B3107C69C26D208C72DC94mp.png',
			text: '燃橙色'
		}, {
			pic: 'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806881/428_428_32B19DBA335049CCD76856DB9619EAABC8FBF95D393EE311mp.png',
			text: '釉白'
		}],
		colorNum: 0,
		banbNum: 0,
		banbText: '8+256GB',
		jiage: 5448
	})
	// 计算滑动的距离
	const y = ref(0)
	window.addEventListener('scroll', () => {
		y.value = document.documentElement.scrollTop
		if (y.value < 20) return ydHight.value = false
		ydHight.value = true
	})
	// 点击返回上一页
	const returnNext = () => {
		// 获取当前页面的实例，判断页面是否刷新
		const pages = getCurrentPages()
		if (pages && pages.length > 1) {
			uni.navigateBack({
				delta: 1
			})
		} else {
			history.go(-1)
		}
	}
	// 弹框
	const popShow = ref(false)
	const typeShow = ref(false)
	const toggle = (value) => {
		popShow.value = true
		typeShow.value = value
	}
	// 子组件emits传值
	const changShow = (value, banbText, colorNum) => {
		popShow.value = value
		ggPhone.banbText = banbText
		ggPhone.colorNum = colorNum
	}
	// 城市页
	const addRessPage = () => {
		uni.navigateTo({
			url: '/pages/xingqing/city'
		})
	}
	// 头部tab
	const whdd = (index) => {
		SwiperPic.num = index
		if (index == 1) {
			// 锚点
			document.querySelector("#whdd").scrollIntoView(true);
		} else {
			uni.pageScrollTo({ scrollTop: 0, duration: 0 })
		}
	}
	// 点击购物车跳转
	const onClick = () =>{
		uni.switchTab({
			url:'/pages/shopCar/shopCar'
		})
	}
	const buttonClick = (e)=>{
		if(e.index == 0){
			SwiperPic.options[1].info++
			let shopCarList = [{
				pic: ggPhone.popupColor[ggPhone.colorNum].pic,
				title: '全新一代骁龙8 | 多主摄融合计算摄影 | 智慧隐私通话',
				jiage:ggPhone.jiage,
				gg: ggPhone.banbText,
			}]
			uni.setStorage({
				key: 'shopCarList',
				data: shopCarList,
				success: function () {
					uni.showToast({
						icon:'success',
						title: '已添加至购物车',
						duration: 2000
					})
				}
			});
		}
	}
	// pinia
	const store = useStore()
	onMounted(() => {
		uni.pageScrollTo({ scrollTop: 0, duration: 0 })
	})
</script>

<style scoped lang="less">
	.xq-height {
		width: 100%;
		height: 750rpx;

		/deep/.swiper-box {
			height: 750rpx;
		}

		image {
			width: 100%;
			height: 750rpx;
		}
	}

	.xingqingTop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 60rpx;
		background-color: #fff;
		z-index: 999;
		padding: 2% 3%;
		display: flex;
		flex-direction: row;
		align-items: center;
		opacity: 0;
		-webkit-transition: 0.3s;
		-moz-transition: 0.3s;
		-ms-transition: 0.3s;
		-o-transition: 0.3s;
		transition: 0.3s;

		.xingqing-text {
			display: flex;
			flex-direction: row;
			align-items: center;
			flex: 1;
			justify-content: center;

			text {
				font-size: 26rpx;
				margin: 0 5%;
				position: relative;
				font-weight: bold;
			}

			.text-on {
				color: #ce4436;

				::after {
					content: '';
					width: 80%;
					height: 4rpx;
					background-color: #ce4436;
					position: absolute;
					bottom: -14rpx;
					left: 10%;
				}
			}
		}
	}

	.topReturn {
		position: fixed;
		top: 1%;
		left: 2%;
		z-index: 9999;
		width: 60rpx;
		height: 60rpx;

		image {
			width: 100%;
		}
	}

	.text-danger {
		opacity: 1;
	}

	.xingqing-2 {
		background: url(../../static/head_bg.png) no-repeat center;
		background-size: 100%;
		line-height: 80rpx;
		color: #fff;
		font-size: 28rpx;
		text-align: center;
	}

	.xingqing-3 {
		background-color: #fff;
		padding: 4%;
	}

	.xingqing-3a {
		color: #ce4436;
		font-size: 36rpx;
		font-weight: 500;
		margin-bottom: 10rpx;
	}

	.xingqing-3b {
		color: #000;
		font-size: 34rpx;
	}

	.xingqing-3c {
		color: #000;
		font-size: 28rpx;
	}

	.xingqing-3d {
		color: #ce4436;
		font-size: 28rpx;
	}

	.border {
		width: 100%;
		height: 16rpx;
		background: #f7f7f7;
	}

	.xingqing-4 {
		padding: 4%;

		.xingqing-4-a {
			display: flex;
			flex-direction: row;
			align-items: cener;
			justify-content: space-between;
			margin-bottom: 4%;

			text {
				background: url(../../static/guige_ico.png) no-repeat top left;
				background-size: 30rpx;
				padding-left: 40rpx;
				font-size: 26rpx;
			}

			view {
				color: #848484;
				font-size: 26rpx;
			}
		}

		.xingqing-4-b {
			margin-bottom: 4%;

			view {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin: 3% 0;

				image {
					width: 12%;
					padding: 0 1%;
				}
			}

			text {
				background: #f5f5f5;
				border-radius: 5rpx;
				color: #8d8d8d;
				padding: 8rpx 30rpx;
				font-size: 20rpx;
				display: inline-block;
			}
		}
	}

	.xingqing-4-a-icon {
		background: url(../../static/headerBack-right.png) no-repeat center right;
		background-size: 44rpx;
		padding-right: 45rpx;
	}

	.xingqing-4-c {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 4%;

		text {
			border: 0.5px solid #d27c3f;
			color: #d27c3f;
			padding: 1% 2%;
			font-size: 24rpx;
			border-radius: 25rpx;
		}

		view {
			font-size: 26rpx;
			margin-left: 2%;
		}
	}

	.xingqing-4-d {
		display: flex;
		flex-direction: row;
		align-items: center;

		text {
			color: #848484;
			font-size: 26rpx;
			background: url(@/static/selected_blue.png) no-repeat center left;
			background-size: 30rpx;
			padding-left: 36rpx;
			margin-right: 3%;
		}
	}

	.goods-carts {
		position: fixed;
		bottom: 0;
		width: 100%;
		left: 0;
	}

	.borderKk {
		border: 0.5px solid #ce4436;
	}
</style>
