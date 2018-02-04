process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Booking = require('../models/cnoteModel');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../app');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('', () => {
  beforeEach((done) => {
    Booking.remove({}, (err) => {
      done();
    });
  });
  /*
   * Test the /GET route
   */
  describe('/GET cnote', () => {
    it('it should GET all the bookings', (done) => {
      chai.request(server)
        .get('/api/v1/cnote')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });


  describe('/POST book', () => {
    it('it should not POST a cnote without pages field', (done) => {
      let cnote = {
        cnote_id: 'CNOT001',
        cnote_code: 0045,
        name: 'Cnote All',
        issue_branch: 'DEL',
        start_no: 023,
        end_no: 086,
        issue_date: '2016-12-08'
      }
      chai.request(server)
        .post('/api/v1/cnote')
        .send(cnote)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('cnote_id');
          res.body.should.have.property('cnote_code');
          res.body.should.have.property('name');
          res.body.should.have.property('issue_branch');
          res.body.should.have.property('start_no');
          res.body.should.have.property('end_no');
          res.body.should.have.property('issue_date');
          done();
        });
    });

  });



});