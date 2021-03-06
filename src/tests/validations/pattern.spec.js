import assert from 'assert';
import { pattern } from '../../validations';

// Note: each validator returns `true` when the `value` is invalid
describe('Validator: pattern', () => {
	it('should be valid when `value` matches `prop` regex', () => {
		assert(pattern({}, '__matcher__', /.*matcher.*/) === false);
	});
	it('should be invalid when `value` does not match `prop` regex', () => {
		assert(pattern({}, '__doesNotMatch__', /.*matcher.*/) === true);
	});
	it('should throw TypeError when `prop` is boolean', () => {
		assert.throws(
			() => pattern({}, 'z', true),
			TypeError
		);
	});
	it('should throw TypeError when `prop` is string', () => {
		assert.throws(
			() => pattern({}, 'z', 'a nice string'),
			TypeError
		);
	});
	it('should throw TypeError when `prop` is object', () => {
		assert.throws(
			() => pattern({}, 'z', {}),
			TypeError
		);
	});
	it('should throw TypeError when `prop` is number', () => {
		assert.throws(
			() => pattern({}, 'z', 99),
			TypeError
		);
	});
});
