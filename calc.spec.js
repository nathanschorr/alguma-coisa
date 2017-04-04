const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { expect } = require('code');

const { soma } = require('./calc');

lab.test('somando números inteiros', (done) => {
    expect(soma(2, 3)).to.equal(5);
    expect(soma(20, 33)).to.equal(53);
    done();
});

lab.test('somando números negativos', (done) => {
    expect(soma(-2, -5)).to.equal(-7);
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
