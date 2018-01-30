process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Booking = require('../models/bookingModel');

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
  describe('/GET booking', () => {
      it('it should GET all the bookings', (done) => {
        chai.request(server)
            .get('/api/v1/booking')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});