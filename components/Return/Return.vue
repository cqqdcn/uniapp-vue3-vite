<template>

	<view class="topReturn">
		<image @click="returnNext" src="../../static/headerBack.png" mode="widthFix"></image>
		<text><slot></slot></text>
	</view>

</template>

<script setup lang="ts">
	import { ref } from 'vue'
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
	.topReturn {
		display: flex;
		flex-direction: row;
		align-items: center;
		line-height: 100rpx;
		background-color: #fff;

		image {
			width: 10%;
		}

		text {
			font-size: 32rpx;
			color: #1a1a1a;
			flex: 1;
			text-align: center;
			margin-left: -10%;
		}
	}
</style>
