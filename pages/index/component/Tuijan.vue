<template>
	<view>
		<Swiper :picList="SwiperPic.picList" :info="SwiperPic.picList.length" :current="current" :mode="default"
			@changCur="changCur" @click="enterXiangq"/>
		<view class="tuijian-1">
			<view class="tuijian-1a">
				<image src="../../../static/tjj (1).jpg" mode="widthFix"></image>
			</view>
			<view class="tuijian-1b" @click="enterXiangq">
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
					<scroll-view class="scroll-view" scroll-x="true" @scroll="scroll"  @click="enterXiangq">
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="https://file05.c.hihonor.com/pimages/cnqx/product/6973316856217/428_428_8603CAC13A355F369BDC63D081B2FF9D76F07E95A72231EBmp.png" lazy-load="true" mode=""></image>
							</view>
							<view class="tuijian-2a-pic-2">
								荣耀50
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
								<text class="tj-text2">¥2688</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="https://file05.c.hihonor.com/pimages/cnqx/product/6973316856217/428_428_8603CAC13A355F369BDC63D081B2FF9D76F07E95A72231EBmp.png" lazy-load="true" mode=""></image>
							</view>
							<view class="tuijian-2a-pic-2">
								荣耀50
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
								<text class="tj-text2">¥2688</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="https://file05.c.hihonor.com/pimages/cnqx/product/6973316856217/428_428_8603CAC13A355F369BDC63D081B2FF9D76F07E95A72231EBmp.png" lazy-load="true" mode=""></image>
							</view>
							<view class="tuijian-2a-pic-2">
								荣耀50
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
								<text class="tj-text2">¥2688</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="https://file05.c.hihonor.com/pimages/cnqx/product/6973316856217/428_428_8603CAC13A355F369BDC63D081B2FF9D76F07E95A72231EBmp.png" lazy-load="true" mode=""></image>
							</view>
							<view class="tuijian-2a-pic-2">
								荣耀50
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
								<text class="tj-text2">¥2688</text>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<view class="tuijian-2a">
				<view class="tuijian-2a-tit">
					<view>新品上市</view>
					<text>重磅新品  多重福利</text>
				</view>
				<view class="tuijian-2a-pic">
					<view class="tuijian-2a-view" @click="enterXiangq">
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/ed0a42a3c40b46a29cc024a27ca9aaf8.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Magic4 Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-20/b1abb152c77346619a16c8b8379e53bd.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Magic4 至臻版
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-20/def439a95da343f39a8dc150727e2147.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/f528dab5a7964265a6812d9941d88df7.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/9d3225a54fe043d79bec8730a6febf84.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品预售】荣耀MagicBook X 15 2022
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/9d3225a54fe043d79bec8730a6febf84.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="tuijian-2a">
				<view class="tuijian-2a-tit">
					<view>热销榜单</view>
					<text>口碑推荐 闭眼可入</text>
				</view>
				<view class="tuijian-2a-pic">
					<view class="tuijian-2a-view" @click="enterXiangq">
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/ed0a42a3c40b46a29cc024a27ca9aaf8.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Magic4 Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-20/b1abb152c77346619a16c8b8379e53bd.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Magic4 至臻版
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-20/def439a95da343f39a8dc150727e2147.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/f528dab5a7964265a6812d9941d88df7.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/9d3225a54fe043d79bec8730a6febf84.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品预售】荣耀MagicBook X 15 2022
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
						<view class="tuijian-List">
							<view class="tuijian-2a-pic-1">
								<image src="http://som.hihonor.com/accountzuul/item/spuImage/image?url=marking/upload/2022-04-22/9d3225a54fe043d79bec8730a6febf84.jpg" mode="widthFix"></image>
							</view>
							<view class="tuijian-2a-pic-2">
								【新品上市】荣耀Play6T Pro
							</view>
							<view class="tuijian-2a-pic-3">
								<text class="tj-text1">¥2399</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref, reactive , onMounted } from 'vue'
	import Swiper from '@/components/Swiper/Swiper.vue'
	import { UserService } from '@/api/api'
	// onMounted(()=>{
	// 	login1()
	// })
	// const login1 = async ()=>{
	// 	const res = await UserService.login1()
	// 	console.log(res.data)
	// }
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
	const enterXiangq = ()=>{
		uni.navigateTo({
			url: '/pages/xingqing/xingqing'
		});
	}
</script>

<style scoped lang="less">
	scroll-view ::-webkit-scrollbar {
	    display:none;
	    width: 0; 
	    height: 0;
	    background-color: transparent; 
	}
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
		margin-bottom: 3%;
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
	.tuijian-2a-pic{
		padding: 4%;
		background-color: #fff;
	}
	.scroll-view{
		background-color: #fff;
		white-space: nowrap;
		.tuijian-List{
			display: inline-block;
			width: 200rpx;
			margin-right: 20rpx;
			.tuijian-2a-pic-1{
				background-color: #f5f5f5;
				image{
					width: 200rpx;
					height: 200rpx;
				}
			}
			.tuijian-2a-pic-2{
				font-size: 26rpx;
				text-align: center;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				margin: 0 0 20rpx 0;
			}
			.tuijian-2a-pic-3{
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				.tj-text1{
					font-size: 26rpx;
					color: #ce4436;
				}
				.tj-text2{
					font-size: 22rpx;
					color: #8d8d8d;
					margin-left: 6rpx;
					text-decoration:line-through
				}
			}
		}
	}
	.tuijian-2a{
		margin-bottom: 4%;
	}
	.tuijian-2a-view{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
		.tuijian-List{
			width: 33.3%;
			margin-bottom: 3%;t
			text-align: center;
			.tuijian-2a-pic-1 image{
				width: 100%;
			}
			.tuijian-2a-pic-2{
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
					font-size: 26rpx;
			}
			.tj-text1{
				color: #ce4436;
			}
		}
	}
</style>
