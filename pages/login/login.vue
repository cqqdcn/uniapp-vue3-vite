<template>
	<view class="Login">
		<view class="topReturn">
			<image @click="returnNext" src="../../static/headerBack.png" mode="widthFix"></image>
			<text>登录</text>
		</view>
		<view class="LoginTop">
			<image src="../../static/cenPic21.png" mode="widthFix"></image>
		</view>
		<view class="LoginCen">
			<form @submit="formSubmit" @reset="formReset">
				<view class="LoginCen-1">
					<text>账号</text>
					<input type="text" name="zh" placeholder="请输入账号" />
				</view>
				<view class="LoginCen-1">
					<text>密码</text>
					<input type="password" name="pass" placeholder="请输入密码" />
				</view>
				<button type="primary"  form-type="submit">提交</button>
			</form>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from 'vue'
	import { useStore } from "@/stores/store.js"
	const store = useStore()
	const returnNext = () => {
		uni.switchTab({
			url:'/pages/index/index'
		})
	}
	const formSubmit = (e)=>{
		if(!e.detail.value.zh){
			uni.showToast({
				title: '请输入账号',
				icon: 'none',
				duration: 2000,
			});
		}else if(!e.detail.value.pass){
			uni.showToast({
				title: '请输入密码',
				icon: 'none',
				duration: 2000,
			});
		}else{
			store.token = true
			uni.showToast({
				title: '登录成功',
				duration: 2000,
			});
			setTimeout(()=>{
				uni.navigateBack({
					delta: 1
				})
			},2000)
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

	.LoginTop {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		margin: 12% 0;
		image{
			width: 25%;
		}
	}
	.LoginCen{
		padding: 0 6%;
		button{
			margin-top: 120rpx;
		}
	}
	.LoginCen-1{
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 50rpx;
		text{
			font-size: 32rpx;
			width: 10%;
		}
		input{
			flex: 1;
			margin-left: 4%;
			border: 1rpx solid #ddd;
			height: 80rpx;
			border-radius: 10rpx;
			padding: 0 2%;
		}
	}
</style>
