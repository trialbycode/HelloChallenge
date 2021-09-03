const temperature = require('../../../userRepo/temperature')

describe('Initial State', () => {
	let temp
	beforeEach(() => {
		temp = new temperature(72)
	})

	it('feels should be Not Implemented', () => {
		expect(temp.feels).toThrowError('Not Implemented')
	})
})