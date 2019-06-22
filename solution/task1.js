class temperature {
	constructor(temp) {
		this.Temp = temp
		this.Ranges = {
			cold: [undefined, 70],
			nice: [70, 80],
			hot: [80, undefined]
		}
	}

	get feels() {
		let result = undefined
		for (var range in this.Ranges) {
			let min = this.Ranges[range][0]
			let max = this.Ranges[range][1]
			if ((this.Temp >= min || min === undefined) 
			&& (this.Temp < max || max === undefined)) {
				result = range
				break
			}
		}
		return result
	}
}

module.exports = temperature