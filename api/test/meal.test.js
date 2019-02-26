import chai from 'chai';
import chaiHttp from 'chai-http';
import should from 'chai/register-should';
import expect from 'chai/register-expect';

import app from '../index';
import testData from './seed/testdata';

chai.use(chaiHttp);

describe('meals', () => {
  it('should get all meals', (done) => {
    chai.request(app)
      .get('/api/v1/meals')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('array');
        done();
      });

  });

  it('should get a single meal', (done) => {
    chai.request(app)
      .get('/api/v1/meals/1')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('object');
        res.body.data.should.haveOwnProperty('name');
        res.body.data.should.haveOwnProperty('price');
        res.body.data.should.haveOwnProperty('size');
        done();
      });
  })

  it('should post meals', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(testData.validmealData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.haveOwnProperty('data');
        res.body.data.should.be.an('object');
        res.body.data.should.haveOwnProperty('name');
        res.body.data.should.haveOwnProperty('price');
        res.body.data.should.haveOwnProperty('size');
        done();
      });
  });

  it('should not post meals on empty request', (done) => {
    chai.request(app)
      .post('/api/v1/meals')
      .send(testData.invalidmealData)
      .end((err, res) => {
        // res.should.have.status(404);
        res.body.should.haveOwnProperty('Error');
        res.body.Error.should.be.a('string');
        done();
      });
  });

  it('should modify a meal on request', (done) => {
    chai.request(app)
      .put('/api/v1/meals/3')
      .send(testData.modifymealData)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.an('object');
        res.body.data.name.should.eql('beans');
        res.body.data.size.should.eql('small');
        res.body.data.price.should.eql(500);
        done();
      });
  });
  it ('should not modify an invalid request', (done) => {
    chai.request(app)
      .put('/api/v1/meals/70')
      .send(testData.modifymealData)
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });

  it('should delete a valid meal', (done) => {
    chai.request(app)
      .delete('/api/v1/meals/1')
      .end((err, res) => {
        res.should.have.status(200);
        done();
  });
  });

  it('should not delete an invalid meal',(done) => {
    chai.request(app)
      .delete('/api/v1/meals/10000')
      .end((err, res) => {
        res.should.have.status(500);
        done();
      });
  });
});
