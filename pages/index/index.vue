<template>
	<view class="home">
		<view class="homeTop">
			<view class="homeTop-1">
				<image class="homeTop-img1" src="@/static/ryqxlogo.png" mode="widthFix"></image>
				<view class="homeTop-1a" @click="jumpSearch">
					<image class="homeTop-img2" src="@/static/ic-seacher.png" mode="widthFix"></image>
					<swiper class="swiper" autoplay="true" vertical="true" interval="3000">
						<swiper-item>
							<text>荣耀手机magic3 Pro</text>
							<image class="homeTop-img4" src="../../static/icon_hot.png" mode="widthFix"></image>
						</swiper-item>
						<swiper-item>
							<text>热水器</text>
						</swiper-item>
						<swiper-item>
							<text>电动牙刷</text>
						</swiper-item>
					</swiper>
				</view>
				<view class="homeTop-2a">
					<image class="homeTop-img3" src="@/static/icon-info.png" mode="widthFix"></image>
					<text>登录</text>
				</view>
			</view>
		</view>
		<view class="scroll-right">
			<scroll-view class="scroll-view" scroll-x="true" @scroll="scroll" show-scrollbar="false">
				<view :class="[index == ShowNum?'scrollShow':'']" @click="ChangeIndex(index)" v-for="(item,index) in ScrollTit" :key="index">{{item}}
				</view>
			</scroll-view>
		</view>
		<!-- 推荐 -->
		<view class="tjText" v-show="ShowNum==0?true:false">
			<Tuijian/>
		</view>
		<!-- 亲选生态 -->
		<view class="qxText" v-show="ShowNum==1?true:false">
			<Qinxuan/>
		</view>
		<!-- 荣耀手机 -->
		<view class="horText" v-show="ShowNum==2?true:false">
			<Rongyao/>
		</view>
		<!-- 智慧屏 -->
		<view class="zhText" v-show="ShowNum==3?true:false">
			<Tuijian/>
		</view>
		<!-- 电脑平板 -->
		<view class="dnText" v-show="ShowNum==4?true:false">
			<Qinxuan/>
		</view>
		<!-- 智能家居 -->
		<view class="znText" v-show="ShowNum==5?true:false">
			<Rongyao/>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive , onMounted } from 'vue'
	import Tuijian from './component/Tuijan.vue'
	import Qinxuan from './component/Qinxuan.vue'
	import Rongyao from './component/Rongyao.vue'
	const ScrollTit = ref(['推荐', '亲选生态', '荣耀手机', '智慧屏', '电脑平板', '智能家居'])
	const ShowNum = ref(0)
	const ChangeIndex = index => {
		ShowNum.value = index
	}
	const jumpSearch = ()=>{
		uni.navigateTo({
			url: '/pages/indexSearch/indexSearch'
		});
	}
</script>

<style scoped lang="less">
	.gggg{background-color: #000;}
	.homeTop {
		background-color: #000;
		height: 100rpx;
		padding: 0 3%;

		.homeTop-1 {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			height: 100rpx;

			.homeTop-img1 {
				width: 20%;
			}

			.homeTop-1a {
				background-color: #fff;
				border-radius: 45rpx;
				width: 52%;
				display: flex;
				flex-direction: row;
				align-items: center;
				height: 60rpx;
				padding: 0 2%;

				.swiper {
					height: 60rpx;
					width: 100%;

					swiper-item {
						display: flex;
						flex-direction: row;
						align-items: center;
						width: 100%;
						flex-wrap: nowrap;

						text {
							font-size: 28rpx;
							max-width: 90%;
							display: block;
							margin-right: 10rpx;
							overflow: hidden;
							/*内容超出宽度时隐藏超出部分的内容 */
							text-overflow: ellipsis;
							/* 当对象内文本溢出时显示省略标记(...) ；需与overflow:hidden;一起使用。*/
							white-space: nowrap;
							/*不换行 */
						}

						.homeTop-img4 {
							width: 26rpx;
						}
					}
				}

				.homeTop-img2 {
					width: 50rpx;
					margin-right: 6rpx;
				}
			}

			.homeTop-2a {
				display: flex;
				flex-direction: row;
				align-items: center;

				.homeTop-img3 {
					width: 42rpx;
				}

				text {
					color: #fff;
					font-size: 28rpx;
					margin-left: 5rpx;
				}
			}

		}
	}

	.scroll-view {
		white-space: nowrap;
		background-color: #000;
		padding: 0 3% 0 3%;

		view {
			display: inline-block;
			color: #fff;
			font-size: 28rpx;
			margin-right: 8%;
			padding-bottom: 2%;
		}
	}
	scroll-view ::-webkit-scrollbar {
	    display:none;
	    width: 0; 
	    height: 0;
	    background-color: transparent; 
	}
	.scrollShow{
		position: relative;
	}
	@keyframes mymove
	{
	from {left:-100%;}
	to {left:0;}
	}
	
	@-webkit-keyframes mymove /*Safari and Chrome*/
	{
	from {left:-100%;}
	to {left:0;}
	}
	.scrollShow::after{
		content: '';
		width: 100%;
		height: 4rpx;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		left: 0;
		animation:mymove .3s infinite;
		-webkit-animation:mymove .3s infinite;
		animation-iteration-count:1;
		-webkit-animation-iteration-count:1;
	}
</style>
