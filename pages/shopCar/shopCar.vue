<template>
	<view class="shopCar">
		<view class="shopCarTitle">
			购物车
		</view>
		<view class="shopHide" v-show="List.ListText == 0">
			购物车空空如也~~
		</view>
		<view class="shopCarList">
			<view class="shopList" v-for="(item,index) in List.ListText" :key="index">
				<view class="List1">
					<view class="List1a" @tap="quanxuan">
						<text :class="{on:slected}"></text>
					</view>
				</view>
				<view class="List2">
					<image :src="item.pic" mode="widthFix"></image>
					<view class="List2a">
						<view class="List2a-1">{{item.title}}</view>
						<view class="List2a-2">流金 {{item.gg}} 官方标配</view>
						<view class="List2a-3">
							<text>￥{{item.jiage}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="shopCarJs">
			<view class="List1">
				<view class="List1a" @tap="quanxuan">
					<text :class="{on:slected}"></text>
				</view>
				<view class="List1c" @tap="quanxuan">全选</view>
				<view class="List1b" v-show="slected" @tap="removeStr">
					删除
				</view>
			</view>
			<view class="shopCarJsRight">
				<view class="shopCarJsRight-1">合计:￥<text>{{jiage}}</text></view>
				<view class="shopCarJsRight-2" @tap="jiesuan">结算</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref ,reactive} from 'vue'
	import { onLoad,onShow } from "@dcloudio/uni-app"
	onShow(()=>{
		uni.getStorage({
			key: 'shopCarList',
			success: function (res) {
				List.ListText = res.data
			}
		})
		console.log(JSON.parse(JSON.stringify(List.ListText)).length)
	})
	const List = reactive({
		ListText:[]
	})
	const slected = ref(false)
	const jiage = ref('0.00')
	const quanxuan = ()=>{
		if(JSON.parse(JSON.stringify(List.ListText)).length == 0){
			uni.showToast({
				icon:'none',
				title: '还没有商品',
				duration: 2000
			});
		}else{
			slected.value = !slected.value
			if(slected.value == true){
				jiage.value = 5448
			}else{
				jiage.value = '0.00'
			}
		}
		
	}
	const removeStr = ()=>{
		uni.removeStorage({
			key: 'shopCarList',
			success: function (res) {
				uni.showToast({
					icon:'success',
					title: '移出购物车成功',
					duration: 2000
				});
				slected.value = false
				List.ListText = []
			}
		});
	}
	const jiesuan = ()=>{
		if(slected.value != true){
			uni.showToast({
				icon:'none',
				title: '请选择结算的商品',
				duration: 2000
			});
		}else{
			uni.navigateTo({
				url:'/pages/shopCar/shopCarXq?text=' + JSON.stringify(List.ListText)
			})
		}
	}
</script>

<style scoped lang="less">
	.shopHide{
		text-align: center;
		color: #a7a7a7;
		margin-top: 50rpx;
	}
	.shopCarTitle{
		line-height: 90rpx;
		text-align: center;
		font-size: 34rpx;
		font-weight: bold;
	}
	.shopCarList{
		padding: 0 3%;
	}
	.shopList{
		display: flex;
		flex-direction: row;
		align-items: center;
		-moz-box-shadow:0px 0px 11px #dddddd; -webkit-box-shadow:0px 0px 11px #dddddd; box-shadow:0px 0px 11px #dddddd;
		padding: 3%;
		.List1{
			width: 10%;
			.List1a{
				width: 30rpx;
				height: 30rpx;
				border: 2rpx solid red;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		.List2{
			width: 90%;
			display: flex;
			flex-direction: row;
			align-items: center;
			image{
				width: 40%;
			}
			.List2a{
				margin-left: 5%;
				.List2a-1{
					font-size: 26rpx;
				}
				.List2a-2{
					font-size: 24rpx;
					background-color: #f3f3f3;
					padding: 1% 2%;
					display: block;
				}
				.List2a-3{
					text{
						color: red;
					}
				}
			}
		}
	}
	.shopCarJs{
		position: fixed;
		width: 90%;
		line-height: 90rpx;
		bottom: 100rpx;
		background-color: #fbfbfb;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		padding: 0 5%;
		.List1{
			display: flex;
			flex-direction: row;
			align-items: center;
			font-size: 26rpx;
			color: #000;
			width: 40%;
			.List1a{
				width: 30rpx;
				height: 30rpx;
				border: 2rpx solid red;
				border-radius: 50%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
			}
			.List1c{
				margin-left: 2%;
			}
			.List1b{
				color: #f06c7a;
				border: 2rpx solid #f06c7a;
				border-radius: 60rpx;
				line-height: 40rpx;
				font-size: 24rpx;
				width: 100rpx;
				text-align: center;
				margin-left: 4%;
			}
		}
		.shopCarJsRight{
			display: flex;
			flex-direction: row;
			align-items: center;
			width: 60%;
			justify-content: flex-end;
			.shopCarJsRight-1{
				font-size: 26rpx;
				margin-right: 3%;
				text{
					color: #f06c7a;
					font-weight: bold;
					font-size: 28rpx;
				}
			}
			.shopCarJsRight-2{
				font-size: 26rpx;
				color: #fff;
				background-color: #f06c7a;
				line-height: 50rpx;
				width: 100rpx;
				text-align: center;
				border-radius: 60rpx;
			}
		}
	}
	.on{
		background-color: #f06c7a;
		width: 20rpx;
		height: 20rpx;
		border-radius: 50%;
		display: block;
	}
</style>