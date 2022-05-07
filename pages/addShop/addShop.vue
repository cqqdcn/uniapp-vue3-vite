<template>
	<view class="addShop">
		<view class="addShop-top">
			<view class="addShop-top-1">
				<view class="addShop-top-text">全部商品</view>
				<image @click="returnSearch" src="../../static/ic-seacher.png" mode="widthFix"></image>
			</view>
			<view class="addShop-top-2">
				<text @click="clickSwitch(index,item.filterby)" :class="[List.num == index?'addOn':'']" v-for="(item,index) in List.classify" :key="index">{{item.title}}</text>
			</view>
		</view>
		<view class="addShopList">
			<view class="addShopList1" v-for="(item,index) in List.proList" :key="item.goods_id">
				<view class="addShopList1a">
					<image :src="item.img" mode=""></image>
				</view>
				<view class="addShopList1b">
					<text class="addShopText1">{{item.name}}</text>
					<view class="addShop-list-1b-1">
						<text class="addShopText2">￥{{item.price}}</text>
						<text class="addShopText3">{{item.slogan}}人付款</text>
					</view>
				</view>
			</view>
			<view class="addShopBottom">{{List.moreText}}</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref , reactive ,onMounted } from 'vue'
	import { onReachBottom , onPullDownRefresh } from '@dcloudio/uni-app'
	import { UserService } from '@/api/api.ts'
	const returnSearch = ()=>{
		uni.navigateTo({
			url:'/pages/indexSearch/indexSearch'
		})
	}
	const List = reactive({
		num: 0,
		classify:[{
			title:'综合',
			filterby: "all"
		},
		{
			title:'新品',
			filterby: "public"
		},
		{
			title:'评价',
			filterby: "hot"
		}],
		proList:[],
		species: 'all',
		page: 1,
		size: 6,
		moreText: '...加载中'
	})
	onMounted(()=>{
	  loadData()
	})
	const clickSwitch = (index,filterby)=>{
		List.num = index
		List.species = filterby
		List.page = 1
		List.proList = []
		List.moreText = '...加载中'
		uni.pageScrollTo({ scrollTop: 0, duration: 0 })
		loadData()
	}
	// 数据获取
	const loadData = async ()=>{
		const url = `api/profiles/goodslist/${List.species}/${List.page}/${List.size}`
		const res = await UserService.login2(url)
		if(res.data.data.length > 0){
			res.data.data.forEach(item =>{
				List.proList.push(item)
			})
		}else{
			List.moreText = '-到底了-'
		}
	}
	// 上拉刷新
	onReachBottom(()=>{
		List.page++
		loadData()
	})
	// 下拉刷新
	onPullDownRefresh(()=>{
		List.page = 1
		List.proList = []
		loadData()
		uni.stopPullDownRefresh()
	})
</script>

<style scoped lang="less">
	.addShop{
		background-color: #f7f7f7;
		min-height: 100vh;
	}
	.addShop-top{
		position: fixed;
		width: 100%;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 99;
		.addShop-top-1{
			display: flex;
			flex-direction: row;
			align-items: center;
			line-height: 80rpx;
			padding: 0 2%;
			view{
				flex: 1;
				text-align: center;
				padding-left: 7%;
				font-size: 34rpx;
			}
			image{
				width: 7%;
			}
		}
		.addShop-top-2{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			border-bottom: 0.5rpx solid #eee;
			.addOn{
				border-bottom: 4rpx solid #f06c7a;
			}
			text{
				font-size: 30rpx;
				color: #333;
				width: 20%;
				text-align: center;
				padding: 20rpx 0;
			}
		}
	}
	.addShopList{
		padding: 4% 3%;
		margin-top: 160rpx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		.addShopList1{
			width: 48.5%;
			margin-bottom: 30rpx;
			.addShopList1a{
				image{
					width: 100%;
					height: 360rpx;
					border-radius: 15rpx 15rpx 0 0;
				}
			}
			.addShopList1b{
				background-color: #fff;
				padding: 3% 2% 5% 2%;
				border-radius: 0 0 15rpx 15rpx;
				.addShopText1{
					color: #000;
					font-size: 28rpx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					margin-bottom: 10rpx;
				}
				.addShop-list-1b-1{
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.addShopText2{
						color: #ce4436;
						font-size: 26rpx;
					}
					.addShopText3{
						color: #807c87;
						font-size: 26rpx;
					}
				}
			}
		}
	}
	.addShopBottom{
		text-align: center;
		font-size: 28rpx;
		color: #807c87;
		width: 100%;
	}
</style>