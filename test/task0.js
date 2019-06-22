const temperature = require('../code/temperature.js')

describe('Initial State', () => {
	let temp
	beforeEach(() => {
		temp = new temperature(72)
	})

	it('feels should be undefined', () => {
		expect(temp.feels).toEqual(undefined)
	})
})