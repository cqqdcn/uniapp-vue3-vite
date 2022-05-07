<template>
	<view class="fenlei">
		<view class="indexSearch-1">
			<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus"
				@input="input" @cancel="cancel" @clear="clear">
			</uni-search-bar>
		</view>
		<view class="fenleiList">
			<scroll-view scroll-y="true" class="left">
				<view @tap="clickLeft(index)" :class="{'on': List.num==index}" v-for="(item,index) in List.leftText" :key="item.id">{{item.title}}</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="right">
				<view class="right1" v-for="(item,index) in List.leftText" v-show="List.num == index">
					<view class="rightBanner">
						<image :src="item.banner" mode="widthFix"></image>
					</view>
					<view class="rightList">
						<view class="rightListA" v-for="(right,id) in item.list" :key="id">
							<image :src="'/static/img/category/list/' + right.img" mode="widthFix"></image>
							<text>{{right.name}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref , onMounted ,reactive } from 'vue'
	import { UserService } from '@/api/api.ts'
	onMounted(()=>{
		fenlei()
	})
	const List = reactive({
		num:0,
		leftText:[],
		rightPic:[]
	})
	const clickLeft = (index)=>{
		List.num = index
	}
	const fenlei = async ()=>{
		const { data:res } = await UserService.login3()
		List.leftText = res.data
		List.rightPic = res.data.list
		console.log(res.data)
	}
</script>

<style scoped lang="less">
	.indexSearch-1 {
		background-color: #fff;
	}
	.fenleiList{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		.left{
			width: 24%;
			text-align: center;
			line-height: 90rpx;
			font-size: 30rpx;
			background-color: #f2f2f2;
			height: 84vh;
			view{
				position: relative;
			}
			.on{
				background-color: #fff;
				font-weight: bold;
			}
			.on::after{
				content: '';
				width: 6rpx;
				height: 50%;
				position: absolute;
				left: 0;
				top: 50%;
				transform: translate(0,-50%);
				background-color: red;
			}
		}
		.right{
			width: 74%;
			padding: 2%;
			height: 84vh;
			.rightList::after{
				content: '';
				width: 26%;
			}
			.rightList{
				display: flex;
				flex-wrap: wrap;
				justify-content: space-between;
				margin-top: 30rpx;
				.rightListA{
					display: flex;
					flex-direction: column;
					width: 26%;
					align-items: center;
					margin-bottom: 3%;
					image{
						width: 100%;
					}
					text{
						font-size: 30rpx;
					}
				}
			}
		}
	}
</style>
