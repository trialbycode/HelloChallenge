const temperature = require('../code/temperature.js')

describe('Scale conversion', () => {
	it(`default to F`, () => {
		let temp = new temperature(32);
		expect(temp.f).toEqual(32)
		expect(temp.c).toEqual(0)
	})
	it(`convert from F to C`, () => {
		let temp = new temperature(32, 'F');
		expect(temp.f).toEqual(32)
		expect(temp.c).toEqual(0)
	})
	it(`convert from C to F`, () => {
		let temp = new temperature(0, 'C');
		expect(temp.c).toEqual(0)
		expect(temp.f).toEqual(32)
	})
	it(`50F should be 10C`, () => {
		let temp = new temperature(50, 'F');
		expect(temp.f).toEqual(50)
		expect(temp.c).toEqual(10)
	})
	it(`14F should be -10C`, () => {
		let temp = new temperature(14, 'F');
		expect(temp.f).toEqual(14)
		expect(temp.c).toEqual(-10)
	})
	it(`-22F should be -30C`, () => {
		let temp = new temperature(-30, 'C');
		expect(temp.f).toEqual(-22)
		expect(temp.c).toEqual(-30)
	})
})