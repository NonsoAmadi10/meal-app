import chai from 'chai';
import chaiHttp from 'chai-http';
import should from 'chai/register-should';
import expect from 'chai/register-expect';

import app from '../index';
import testData from './seed/testdata';

chai.use(chaiHttp);

describe('Orders', () => {
  it('should get all data', (done) => {
    chai.request(app)
      .get('/api/v1/orders')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('array');
        done();
      });
  });

  it('should post orders', (done) => {
    chai.request(app)
      .post('/api/v1/orders')
      .send(testData.validOrderData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('object');
        res.body.data.should.haveOwnProperty('customer');
        res.body.data.should.haveOwnProperty('meal');
        res.body.data.should.haveOwnProperty('status');
        res.body.data.customer.should.eql('jack robinson');
        done();
      });
  });
  it('should get a single Order by Id', (done) => {
    chai.request(app)
      .get('/api/v1/orders/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('object');
        res.body.data.should.haveOwnProperty('customer');
        res.body.data.should.haveOwnProperty('meal');
        res.body.data.should.haveOwnProperty('status');
        done();
      });
  });

  it('should not post an empty order', (done) => {
    chai.request(app)
      .post('/api/v1/orders/')
      .send(testData.invalidOrderData)
      .end((err, res) => {
        res.body.should.have.status(404);
        res.body.should.haveOwnProperty('Error');
        res.body.status.should.eql(404);
        done();
      });
  });


  it('should update an existing meal', (done) => {
    chai.request(app)
      .put('/api/v1/orders/1')
      .send(testData.validOrderData)
      .end((err, res) => {
        res.body.data.should.be.an('object');
        res.body.data.customer.should.eql('jack robinson');
        res.body.data.meal.should.eql('rice');
        res.body.data.price.should.eql(300);
        res.body.data.status.should.eql('ongoing');
        done();
      });
  });

  it('should not update an invalid meal', (done) => {
    chai.request(app)
      .put('/api/v1/orders/900')
      .send(testData.validOrderData)
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });

  it('should delete a valid Order',(done) => {
    chai.request(app)
      .delete('/api/v1/orders/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('should not delete an invalid Order',(done) => {
    chai.request(app)
      .delete('/api/v1/orders/800')
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
