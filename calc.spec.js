const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { soma } = require('./calc');

lab.test('somando números inteiros', (done) => {

    Code.expect(soma(2, 3)).to.equal(5);
    Code.expect(soma(20, 33)).to.equal(53);
    done();
});

lab.test('somando números negativos', (done) => {

    Code.expect(soma(-2, -5)).to.equal(-7);
    done();
});

lab.test('não passando parâmetros', (done) => {

    const r = soma();
    Code.expect(r.message).to.equal("parâmentos faltando")
    done();
});
