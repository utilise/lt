var expect = require('chai').expect
  , lt = require('./')

describe('lt', function() {
  it('should filter less than value', function() {
    expect(lt('val', 100)({ val:  50 })).to.be.eql(true)
    expect(lt('val', 100)({ val: 150 })).to.be.eql(false)
  })
})