<template>
	<view>
		<Return><text>确认订单</text></Return>
		<view class="shopCarList">
			<view class="shopList" v-for="(item,index) in List.ListText" :key="index">
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
			<view class="shopCarJsRight">
				<view class="shopCarJsRight-1">合计:￥<text>{{jiage}}</text></view>
				<view class="shopCarJsRight-2" @tap="jiesuan">提交订单</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref ,reactive } from 'vue'
	import { onLoad,onShow } from "@dcloudio/uni-app"
	import Return from '@/components/Return/Return.vue'
	onLoad((option)=>{
		List.ListText = JSON.parse(option.text)
	})
	const List = reactive({
		ListText:[]
	})
	const slected = ref(false)
	const jiage = ref('5488')
</script>

<style scoped lang="less">
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
				border: 1rpx solid red;
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
		bottom: 0;
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
			width: 50%;
			.List1a{
				width: 30rpx;
				height: 30rpx;
				border: 1rpx solid red;
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
				border: 1rpx solid #f06c7a;
				border-radius: 60rpx;
				line-height: 40rpx;
				font-size: 24rpx;
				padding: 0 4%;
				margin-left: 4%;
			}
		}
		.shopCarJsRight{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;
			width: 100%;
			.shopCarJsRight-1{
				font-size: 26rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
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
				width: 200rpx;
				text-align: center;
				border-radius: 60rpx;
				margin-left: 5%;
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