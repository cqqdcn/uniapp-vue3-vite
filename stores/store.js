import { defineStore } from "pinia";

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
export const useStore = defineStore({
	id: "City",
	state: () => ({
		city: "请选择地址",
		token: false
	}),
	getters: {
		double: (state) => state.count * 2,
	},
	actions: {
		ExitLogin(value) {
			this.token = value
		}
	}

});
