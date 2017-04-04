const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.test('somando números inteiros', (done) => {
    expect(soma(5, 5)).to.equal(10);
    expect(soma(12, 21)).to.equal(33);
    done();
});

lab.test('somando números negativos', (done) => {
    expect(soma(-8, -5)).to.equal(-13);
    done();
});

lab.test('não passando parâmetros', (done) => {
    const r = soma();
    expect(r.message).to.equal("parâmentos faltando")
    done();
});

lab.test('parâmetros string', (done) => {
    const r = soma('a', 'b');
    expect(r.message).to.equal("parâmentos inválidos")
    done();
});
