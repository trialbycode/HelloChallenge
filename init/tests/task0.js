const temperature = require('../../../userRepo/temperature')

describe('Initial State', () => {
	let temp
	beforeEach(() => {
		temp = new temperature(72)
	})

	it('feels should be undefined', () => {
		expect(temp.feels).toThrow('Not Implemented')
	})
})