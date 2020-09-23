import { required, minLength, maxLength } from './form-validations';

describe('Form validations', () => {
  test('required (value undefined)', () => {
    const result = required('some value');
    expect(result).toBeUndefined();
    expect(result).toEqual(undefined);
  });

  test('required (value defined)', () => {
    const result = required('');
    expect(result).toBeDefined();
    expect(result).toEqual('This field is required');
  });

  test('minLength (value undefined)', () => {
    const min = 5;
    const result = minLength(min)();
    expect(result).toBeUndefined();
    expect(result).toEqual(undefined);
  });

  test('minLength (value defined)', () => {
    const min = 10;
    const value = 'test';
    const minLength10 = minLength(min);
    const result = minLength10(value);
    expect(result).toBeDefined();
    expect(result).toEqual(`Must be ${min} characters or more`);
  });

  test('maxLength (value undefined)', () => {
    const max = 10;
    const result = maxLength(max)();
    expect(result).toBeUndefined();
    expect(result).toEqual(undefined);
  });

  test('maxLength (value defined)', () => {
    const max = 10;
    const value = 'test value more than 10 symbols';
    const maxLength10 = maxLength(max);
    const result = maxLength10(value);
    expect(result).toBeDefined();
    expect(result).toEqual(`Must be ${max} characters or less`);
  });


});
