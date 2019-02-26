import chai  from 'chai';
import chaiHttp from 'chai-http';
import should from 'chai/register-should';
import expect from 'chai/register-expect';

import app from '../index';
import testData from './seed/testdata';

chai.use(chaiHttp);

describe('Menu',() => {
  it('should get all menu',(done) => {
    chai.request(app)
    .get('/api/v1/menu/')
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('array');
        done();
    });
  });

  it('should post all menu', (done) => {
    chai.request(app)
    .post('/api/v1/menu')
    .send(testData.validMenuData)
    .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('object');
        res.body.data.should.haveOwnProperty('list');
        res.body.data.should.haveOwnProperty('section');
        res.body.data.list[0].should.haveOwnProperty('price');
        done();
      });
  });
});