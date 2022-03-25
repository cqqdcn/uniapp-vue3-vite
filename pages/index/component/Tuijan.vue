<template>
	<view>
		<Swiper :picList="SwiperPic.picList" :info="SwiperPic.picList.length" :current="current" :mode="default"
			@changCur="changCur" />
		<view class="tuijian-1">
			<view class="tuijian-1a">
				<image src="../../../static/tjj (1).jpg" mode="widthFix"></image>
			</view>
			<view class="tuijian-1b">
				<view>
					<image src="../../../static/tjj (1).png" mode="widthFix"></image>
					<text>0元拼团</text>
				</view>
				<view>
					<image src="../../../static/tjj (2).png" mode="widthFix"></image>
					<text>会员领券</text>
				</view>
				<view>
					<image src="../../../static/tjj (3).png" mode="widthFix"></image>
					<text>亲选生态</text>
				</view>
				<view>
					<image src="../../../static/tjj (4).png" mode="widthFix"></image>
					<text>智慧生活</text>
				</view>
				<view>
					<image src="../../../static/tjj (5).png" mode="widthFix"></image>
					<text>手机新品</text>
				</view>
			</view>
		</view>
		<view class="tuijian-2">
			<view class="tuijian-2a">
				<view class="tuijian-2a-tit">
					<view>限时购</view>
					<uni-countdown :show-day="false" :hour="18" :minute="23" :second="12"  background-color="#1a1a1a" color="#ffffff" :font-size="13"></uni-countdown>
					<text>后结束</text>
				</view>
				<view class="tuijian-2a-pic">
					<scroll-view class="scroll-view" scroll-x="true" @scroll="scroll">
						<view v-for="(item,index) in ScrollTit" :key="index">{{item}}
						</view>
					</scroll-view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive } from 'vue'
	import Swiper from '../../../components/Swiper/Swiper.vue'
	const SwiperPic = reactive({
		picList: [
			'http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-21/5b4ff501ab324a4395703b2e92454e01.jpg',
			'http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-17/f8fd45b405784d21909a2800201a4888.png',
			'http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-03-21/48619bf2d98d46a2abe11b5215afef62.jpg'
		]
	})
	const current = ref(0)
	const changCur = num => {
		current.value = num
	}
</script>

<style scoped lang="less">
	.tuijian-1 {

		.tuijian-1a {
			image {
				width: 100%;
			}
		}

		.tuijian-1b {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			padding: 0 4% 4% 4%;

			view {
				width: 14%;

				image {
					width: 100%;
				}

				text {
					font-size: 24rpx;
					text-align: center;
					display: block;
				}
			}
		}
	}
	.tuijian-2{
		background-color: #f5f5f5;
		padding: 4%;
	}
	.tuijian-2a-tit{
		display: flex;
		flex-direction: row;
		align-items: center;
		view{
			font-size: 32rpx;
			color: #000;
			margin-right: 10rpx;
		}
		text{
			font-size: 24rpx;
			color: #999;
			margin-left: 10rpx;
		}
	}
</style>
