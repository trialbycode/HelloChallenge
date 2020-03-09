class temperature {
	constructor(temp) {
		this.Temp = temp
		this.Ranges = {
			cold: [undefined, 70],
			nice: [70, 80],
			hot: [80, undefined]
		}
	}

	get feels() { throw 'Not Implemented' }
}

module.exports = temperature