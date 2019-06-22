class temperature {
	constructor(temp, scale = 'F') {
		this.Temp = scale === 'F' ? temp : this.CtoF(temp)
		this.Ranges = {
			cold: [undefined, 60],
			nice: [60, 80],
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

	FtoC(tempInF) { return (tempInF - 32) * (5/9) }
	CtoF(tempInC) { return (tempInC * 9/5) + 32 }

	get f() { return this.Temp }
	get c() { return this.FtoC(this.Temp) }
}

module.exports = temperature