<template>
	<view>
		<uni-swiper-dot :info="info" :current="current" field="content" :mode="mode" :dotsStyles="dotsStyles.dotStyle">
			<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
				<swiper-item v-for="(item ,index) in picList" :key="index">
					<view class="swiper-item">
						<image :src="item" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
	</view>
</template>

<script setup lang='ts'>
	import { ref, defineProps, onMounted, reactive ,defineEmits} from 'vue'
	const props = defineProps({
		picList: Array,
		info: Number,
		current: Number,
		mode: String
	})
	const swiperDotIndex = ref(0)
	const dotsStyles = reactive({
		dotStyle: {
			backgroundColor: 'rgba(0, 0, 0, .6)',
			selectedBackgroundColor: 'rgba(255, 255, 255, .6)'
		},
	})
	const Emits = defineEmits(["changCur"])
	const change = e => {
		Emits("changCur",e.detail.current)
	}
	console.log(Object)
</script>

<style scoped lang='less'>
	.swiper-box {
		width: 100%;
		height: 380rpx;
	}

	.swiper-item {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;

		image {
			width: 100%;
			height: 380rpx;
		}
	}
</style>
