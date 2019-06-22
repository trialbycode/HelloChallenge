const temperature = require('../code/temperature.js')

describe('Feels Like', () => {
	it(`${Number.MIN_VALUE} should feel cold`, () => {
		let temp = new temperature(Number.MIN_VALUE);
		expect(temp.feels).toEqual('cold')
	})
	it('52 should feel cold', () => {
		let temp = new temperature(52);
		expect(temp.feels).toEqual('cold')
	})
	it('59.9 should feel cold', () => {
		let temp = new temperature(59.9);
		expect(temp.feels).toEqual('cold')
	})
	it('60 should feel nice', () => {
		let temp = new temperature(60);
		expect(temp.feels).toEqual('nice')
	})
	it('79.9 should feel nice', () => {
		let temp = new temperature(79.9);
		expect(temp.feels).toEqual('nice')
	})
	it('80 should feel hot', () => {
		let temp = new temperature(80);
		expect(temp.feels).toEqual('hot')
	})
	it('72 should feel nice', () => {
		let temp = new temperature(72);
		expect(temp.feels).toEqual('nice')
	})
	it('92 should feel hot', () => {
		let temp = new temperature(92);
		expect(temp.feels).toEqual('hot')
	})
	it(`${Number.MAX_VALUE} should feel hot`, () => {
		let temp = new temperature(Number.MAX_VALUE);
		expect(temp.feels).toEqual('hot')
	})
})