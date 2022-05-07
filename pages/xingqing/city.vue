<template>
	<view class="">
		<Return>
				<text>选择城市</text>
		</Return>
		<view class="city">
			<t-index-address @select="select"></t-index-address>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { ref } from "vue"
	import Return from "@/components/Return/Return.vue"
	import { useStore } from "@/stores/store.js"
	const store = useStore()
	const select = (data) => {
		store.city = data.province + '-' + data.name
		uni.navigateBack()
	}
</script>

<style scoped lang="less">

</style>
        