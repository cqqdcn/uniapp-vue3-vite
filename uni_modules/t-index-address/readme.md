# t-index-address

轻量级拼音首字母城市索引列表选择组件

## 安装方式

本组件符合[easycom](https://uniapp.dcloud.io/collocation/pages?id=easycom)规范，只需将本组件导入项目，在页面`template`中即可直接使用，无需在页面中`import`和注册`components`

### 基本用法

```html

<t-index-address @select="select"></t-index-address>

methods: {
	select(data) {
		console.log(data)
	}
}

```

## API

### Events
|事件名	 |说明			|返回值|
|:-:	 |:-:			|:-:  |
|@select |选中城市事件    |Object|
