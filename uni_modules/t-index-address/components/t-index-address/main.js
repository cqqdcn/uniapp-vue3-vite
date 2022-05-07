// geo 'https://raw.githubusercontent.com/88250/city-geo/master/data.json'
// provinces 'https://github.com/modood/Administrative-divisions-of-China/blob/master/dist/provinces.json'
// cities 'https://github.com/modood/Administrative-divisions-of-China/blob/master/dist/cities.json'

const fs = require('fs')
const pinyin = require('js-pinyin')

let geo = require('./assets/geo')
let provinces = require('./assets/provinces')
let cities = require('./assets/cities')

// 省直辖县级行政区划
let areas = ['4190', '4290', '4690', '6590']
cities = cities.filter(city => !areas.includes(city.code))

// 直辖市
let aCity = ['1101', '1201', '3101', '5001']

cities.forEach(city => {
	city.province = provinces.find(province => province.code === city.provinceCode).name
	if (aCity.includes(city.code)) {
		city.name = city.province
	}
	let g = geo.find(g => g.city === city.name || g.province === city.name)
	city.lat = g.lat
	city.lng = g.lng
	if (city.name.lastIndexOf('市') === city.name.length - 1) {
		city.name = city.name.slice(0, city.name.length - 1)
	}
})

// A-Z
let json = []

for (var i = 0; i < 26; i++) {
	json.push({
		initial: String.fromCharCode(65 + i),
		list: []
	})
}

json.forEach(j => {
	cities.forEach(city => {
		if (pinyin.getFullChars(city.name).slice(0, 1) === j.initial) {
			j.list.push(city)
		}
	})
})

// 过滤空数组
json = json.filter(j => j.list.length)

fs.writeFileSync('./cities.json', JSON.stringify(json))
