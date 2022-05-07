<template>
	<view class="popub" v-if="props.popShow">
		<view class="popubBg" @click="hidePopub"></view>
		<!-- 规格 -->
		<view class="popubGg" v-if="props.typeShow == 'guigeShow'?true:false">
			<view class="popubClose" @click="hidePopub">
				<image src="../../static/ic_close.png" mode="widthFix"></image>
			</view>
			<view class="popubGg-1">
				<image :src="popup.bigPic" mode="widthFix"></image>
				<view class="popubGg-1a">
					<view class="popubGg-1a-1">【新品上市】荣耀Magic4 Pro</view>
					<view class="popubGg-1a-2">已选择:亮黑 {{popup.banbText}} 官方标配</view>
					<view class="popubGg-1a-3">¥5499{{props.TypeShow}}</view>
				</view>
			</view>
			<view class="popubGg-2">
				<view class="popubGg-2a">颜色</view>
				<view class="popubGg-2b">
					<view :class="{'popubGg-2b-1':true,colorNum:popup.colorNum == index}" v-for="(item,index) in popup.popupColor"
					 :key="index" @tap="chooseColor(index,item.pic)">
						<view>
							<image :src="item.pic" mode="widthFix"></image>
						</view>
						<text>{{item.text}}</text>
					</view>
				</view>
			</view>
			<view class="popubGg-2">
				<view class="popubGg-2a">版本</view>
				<view class="popubGg-3a">
					<text :class="{banbenOn: popup.banbNum == index}" v-for="(item,index) in popup.banben"
					 :key="index" @tap="chooseBanb(index,item)">{{item}}</text>
				</view>
			</view>
			<view class="popubGg-4" @click="hidePopub">确定</view>
		</view>
		<!-- 促销 -->
		<view class="popubGg" v-if="props.typeShow == 'cuxiao'?true:false">
			<view class="popubClose" @click="hidePopub">
				<image src="../../static/ic_close.png" mode="widthFix"></image>
			</view>
			<view class="cuxiao-1">
				<view class="xingqing-4-c">
					<text>分期免费</text>
					<view>花呗分期可享免息</view>
				</view>
			</view>
		</view>
		<!-- 说明 -->
		<view class="popubGg" v-if="props.typeShow == 'shuoming'?true:false">
			<view class="popubClose" @click="hidePopub">
				<image src="../../static/ic_close.png" mode="widthFix"></image>
			</view>
			<view class="shuoming-1">
				<view class="shuoming-1a">说明</view>
				<view class="shuoming-1b">
					<image src="../../static/selected_blue.png" mode="widthFix"></image>
					<view>
						<text class="shuoming-1b-1">荣耀品牌商品</text>
						<text class="shuoming-1b-2">由荣耀终端有限公司提供商品、发货开票及售后服务</text>
					</view>
				</view>
				<view class="shuoming-1b">
					<image src="../../static/selected_blue.png" mode="widthFix"></image>
					<view>
						<text class="shuoming-1b-1">全国包邮</text>
						<text class="shuoming-1b-2">全国包邮，国内部分地区及海外无法配送，详情请参阅</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref , reactive , defineProps , defineEmits} from 'vue'
	const props = defineProps({
		popShow:String,
		typeShow:String
	})
	const emits = defineEmits()
	// 控制模态框隐藏
	const hidePopub = ()=>{
		emits("changShow",false,popup.banbText,popup.colorNum)
	}
	const popup = reactive({
		popupColor:[{
			pic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806829/428_428_E434BCFB5A18FDDD794107383F1CE9A7D46ADABF9D9EB0C0mp.png',
			text:'亮黑'
		},{
			pic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806850/428_428_DFAA119DB95B72DC3CBAD56A7FD5D0FD4A450EAAB2BF79B7mp.png',
			text:'流金'
		},{
			pic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806843/428_428_DB46CAE0711AAE4B3D749179A7F165540E36FC5E7FF8460Cmp.png',
			text:'瓷青'
		},{
			pic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806867/428_428_85349EEBC8084F0DBC098E3B49B3107C69C26D208C72DC94mp.png',
			text:'燃橙色'
		},{
			pic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806881/428_428_32B19DBA335049CCD76856DB9619EAABC8FBF95D393EE311mp.png',
			text:'釉白'
		}],
		banben:[
			'8+256GB',
			'12+256GB',
			'12+512GB'
		],
		colorNum:0,
		bigPic:'https://file05.c.hihonor.com/pimages/cnqx/product/6936520806829/428_428_E434BCFB5A18FDDD794107383F1CE9A7D46ADABF9D9EB0C0mp.png',
		banbNum:0,
		banbText:'8+256GB'
	})
	// 选择颜色
	const chooseColor = (index,pic)=>{
		popup.colorNum = index
		popup.bigPic = pic
	}
	// 选择版本
	const chooseBanb = (index,text)=>{
		popup.banbNum = index
		popup.banbText = text
	}

</script>

<style scoped lang="less">
	.popubBg{
		background-color: rgba(0,0,0,0.6);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		z-index: 9999999;
	}
	.popubGg{
		background: #fff;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		border-radius: 25rpx 25rpx 0 0;
		z-index: 99999999;
	}
	.popubGg-2b{
		display: flex;
		flex-direction: row;
		align-items: center;
		flex-wrap: wrap;
		.popubGg-2b-1{
			width: 16%;
			margin-right: 6%;
			text-align: center;
			margin-bottom: 4%;
			view{
				border: 0.5px solid #e0e0e0;
				border-radius: 8rpx;
			}
			image{
				width: 100%;
			}
			text{
				font-size: 26rpx;
				color: #333;
			}
		}
	}
	.popubGg-1{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 3%;
		width: 94%;
		image{
			width: 25%;
		}
		.popubGg-1a{
			width: 70%;
			.popubGg-1a-1{
				color: #000;
				font-size: 28rpx;
				text-indent: -10rpx;
			}
			.popubGg-1a-2{
				color: #8d8d8d;
				font-size: 24rpx;
				margin: 2% 0 4% 0;
			}
			.popubGg-1a-3{
				color: #ce4436;
				font-size: 32rpx;
			}
		}
	}
	.popubClose{
		position: absolute;
		top: 5%;
		right: 5%;
		width: 5%;
		image{
			width: 100%;
		}
	}
	.popubGg-2{
		padding: 0 3%;
		.popubGg-2a{
			color: #000;
			font-size: 26rpx;
			margin-bottom: 3%;
		}
	}
	.popubGg-3a text{
		background-color: #ebebeb;
		color: #000;
		font-size: 24rpx;
		border-radius: 30rpx;
		padding: 1% 3%;
		margin-right: 3%;
	}
	.popubGg-4{
		background-color: #ce4436;
		color: #fff;
		width: 70%;
		margin: 5% auto;
		padding: 2.5% 0;
		border-radius: 50rpx;
		text-align: center;
		font-size: 28rpx;
	}
	.xingqing-4-c {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 4%;
	
		text {
			border: 0.5px solid #d27c3f;
			color: #d27c3f;
			padding: 1% 2%;
			font-size: 24rpx;
			border-radius: 25rpx;
		}
	
		view {
			font-size: 26rpx;
			margin-left: 2%;
		}
	}
	.cuxiao-1{
		padding: 5% 3%;
		min-height: 40vh;
	}
	.shuoming-1{
		padding: 3% 3%;
		.shuoming-1a{
			text-align: center;
			font-size: 36rpx;
			margin-bottom: 8%;
		}
		.shuoming-1b{
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			margin-bottom: 10%;
			image{
				width: 5%;
				margin-right: 3%;
			}
			.shuoming-1b-1{
				color: #000;
				font-size: 28rpx;
				display: block;
			}
			.shuoming-1b-2{
				color: #8d8d8d;
				font-size: 28rpx;
				display: block;
			}
		}
	}
	/deep/.popubGg-2b .colorNum {
		view{
			border: 0.5px solid #ce4436;
		}
		text{
			color: #ce4436;
		}
	}
	/deep/.popubGg-3a .banbenOn{
		color: #ce4436;
		border: 0.5px solid #ce4436;
		background-color: rgba(206,68,54,.2);
	}
</style>