const expect = require('chai').expect
const { describe, it } = require('mocha')
const calculateTotal = require('./index')

describe('Checkout', () => {
  it('calculates the total', () => {
    const items = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12, quantity: 2, total: 0
    }, {
      id: 2, name: 'Video Adapter', price: 12.95, discount: .10, quantity: 1, total: 0
    }]

    const expected = [{
      id: 1, name: 'iPhone Charger', price: 19.95, discount: .12, quantity: 2, total: 35.11
    }, {
      id: 2, name: 'Video Adapter', price: 12.95, discount: .10, quantity: 1, total: 11.65
    }]

    expect(calculateTotal(items)).to.deep.equal(expected)
  })
})
