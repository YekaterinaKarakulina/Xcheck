import checkStatus from './status';

describe('check status', () => {
  test('active', () => {
    const result = checkStatus('active');
    expect(result).toEqual('green');
  });

  test('open', () => {
    const result = checkStatus('open');
    expect(result).toEqual('green');
  });

  test('draft', () => {
    const result = checkStatus('draft');
    expect(result).toEqual('geekblue');
  });

  test('closed', () => {
    const result = checkStatus('closed');
    expect(result).toEqual('volcano');
  });

  test('published', () => {
    const result = checkStatus('published');
    expect(result).toEqual('cyan');
  });

  test('archived', () => {
    const result = checkStatus('archived');
    expect(result).toEqual('red');
  });

  test('onReview', () => {
    const result = checkStatus('onReview');
    expect(result).toEqual('cyan');
  });

  test('default', () => {
    const result = checkStatus('');
    expect(result).toEqual('green');
  });
});
