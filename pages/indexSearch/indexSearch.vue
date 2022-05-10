<template>
	<view class="indexSearch">
		<Return><text>亲选好品</text></Return>
		<view class="indexSearch-1">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus"
				@input="input" @cancel="cancel" @clear="clear">
			</uni-search-bar>
		</view>
		<view class="indexSearch-2">
			<view class="indexSearch-2a">热门搜索</view>
			<view class="indexSearch-2b">
				<view class="">
					<text>【重磅旗舰】荣耀Magic4</text>
					<image src="../../static/icon_hot.png" mode="widthFix"></image>
				</view>
				<view class="">
					<text>【新品上市】Play6T</text>
					<image src="../../static/icon_hot.png" mode="widthFix"></image>
				</view>
				<view class="">
					<text>荣耀Earbuds 3 Pro</text>
					<image src="../../static/icon_hot.png" mode="widthFix"></image>
				</view>
				<view class="">
					<text>笔记本电脑</text>
				</view>
				<view class="">
					<text>荣耀60SE</text>
				</view>
				<view class="">
					<text>荣耀平板</text>
				</view>
				<view class="">
					<text>荣耀60系列</text>
				</view>
				<view class="">
					<text>笔记本电脑</text>
				</view>
				<view class="">
					<text>荣耀60SE</text>
				</view>
				<view class="">
					<text>荣耀平板</text>
				</view>
				<view class="">
					<text>荣耀60系列</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import Return from '@/components/Return/Return.vue'
	const searchValue = ref('荣耀Earbuds 3 Pro')
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
</script>

<style scoped lang="less">
	.indexSearch {
		min-height: 100vh;
		background-color: #f7f7f7;
	}
	
	.indexSearch-1 {
		background-color: #fff;
	}

	.indexSearch-2 {
		background-color: #fff;
		padding: 2% 4%;

		.indexSearch-2a {
			color: #000;
			font-size: 28rpx;
			margin-bottom: 4%;
		}

		.indexSearch-2b {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;

			view {
				display: flex;
				flex-direction: row;
				align-items: center;
				background-color: #f9f9f9;
				padding: 5rpx 15rpx;
				border-radius: 10rpx;
				margin: 0 20rpx 20rpx 0;

				image {
					width: 24rpx;
					margin-left: 15rpx;
				}

				text {
					font-size: 28rpx;
				}
			}
		}
	}
</style>
