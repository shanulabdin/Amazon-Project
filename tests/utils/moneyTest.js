import { formatCurrency } from '../../scripts/utils/money.js'

describe('test suite: format currency', () => {
  it('convert cents into dollars', () => {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });

  it('rounds up to the nearest cent exercise', () => {
    expect(formatCurrency(2000.4)).toEqual('20.00')
  })

  it('works with negetive numbers', () => {
    expect(formatCurrency(-49.09)).toEqual('-0.49')
  });

  it('works with negetive numbers 2', () => {
    expect(formatCurrency(99.99)).toEqual('1.00')
  });

});
