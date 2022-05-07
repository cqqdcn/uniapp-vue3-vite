<template>
	<view class="app">
		<view class="topFanhui">
			个人中心
		</view>
		<view class="center">
			<view class="center-1">
				<image class="center-1a" src="/static/cenPic21.png" mode="widthFix" />
				<view class="center-1b">
					<text>登陆/注册</text>
					<image src="/static/cenPic20.png" mode="widthFix" />
				</view>
			</view>
			<view class="center-2">
				<view class="center-2a">
					账户信息
				</view>
				<view class="center-2b">
					<view class="center-2a-1a">
						<image src="/static/cenPic15.png" mode="widthFix"/>
						<text>账号注册</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic17.png" mode="widthFix"/>
						<text>基础信息</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic14.png" mode="widthFix"/>
						<text>身份认证</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic16.png" mode="widthFix"/>
						<text>资源信息</text>
					</view>
				</view>
			</view>
			<view class="center-3">
				<view class="center-2a">
					我的合作
				</view>
				<view class="center-2b">
					<view class="center-2a-1a">
						<image src="/static/cenPic3.png" mode="widthFix"/>
						<text>我的资源</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic4.png" mode="widthFix"/>
						<text>企业资源</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic5.png" mode="widthFix"/>
						<text>我的需求</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic6.png" mode="widthFix"/>
						<text>我的收藏</text>
					</view>
					<view class="center-2a-1a">
						<image src="/static/cenPic24.png" mode="widthFix"/>
						<text>我的关注</text>
					</view>
				</view>
			</view>
			<view class="center-4">
				退出登录
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
</script>

<style scoped lang="less">
	.topFanhui {
		line-height: 90rpx;
		text-align: center;
		font-size: 30rpx;
		font-weight: bold;
	}

	page {
		background-color: #f6f6f6;
	}

	.center-1 {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		background-color: #fd7a2b;
		padding: 6% 5% 10% 5%;
		.center-1a {
			width: 20%;
		}

		.center-1b {
			flex: 1;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-left: 5%;
			text {
				font-size: 32rpx;
				color: #fff;
			}
			image {
				width: 4%;
			}
		}
	}
	.center-2{
		background-color: #fff;
		width: 90%;
		margin-top: -50rpx;
		margin-left: 5%;
		border-radius: 10rpx;
		.center-2a{
			border-bottom: 1rpx solid #dbdbdb;
			line-height: 100rpx;
			color: #333;
			font-size: 30rpx;
			font-weight: bold;
			padding: 0 4%;
		}
		.center-2b{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 4%;
			.center-2a-1a{
				width: 20%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				image{
					width: 100%;
				}
				text{
					font-size: 28rpx;
				}
			}
		}
	}
	.center-3{
		background-color: #fff;
		width: 90%;
		margin-left: 5%;
		border-radius: 10rpx;
		margin-top: 3%;
		.center-2a{
			border-bottom: 1rpx solid #dbdbdb;
			line-height: 100rpx;
			color: #333;
			font-size: 30rpx;
			font-weight: bold;
			padding: 0 4%;
		}
		.center-2b{
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 4%;
			.center-2a-1a{
				width: 23%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-bottom: 3%;
				image{
					width: 40%;
				}
				text{
					font-size: 28rpx;
				}
			}
		}
	}
	.center-4{
		width: 90%;
		margin: 6% 0 0 5%;
		background-color: #fd7a2b;
		color: #fff;
		border-radius: 60rpx;
		text-align: center;
		line-height: 76rpx;
		font-size: 32rpx;
	}
</style>
