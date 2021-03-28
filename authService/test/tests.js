const request = require('supertest');
var express = require('express');
const service = require('../service');
describe('loading express', function () {
    let server;
    beforeEach(function () {
        server = service.makeServer(5000);

        request(server.getApp());

    });
    afterEach(function (done) {
        server.close();
        done();

    });
    it('get weather correct args', function testGetWeatherShouldWork(done) {
        request(server.getApp())
            .get('/get?city=Lund&country=SE')
            .expect(200, done);

    });
    it('get weather wrong args', function testGetWeatherShouldNotWork(done) {
        request(server.getApp())
            .get('/get?city=Lund&country=HU')
            .expect(404, done);

    });
    it('get weather with no args',function testAddServiceShouldWork(done){
    
        request(server.getApp())
            .get('/get')
            .expect(404, done);

    });
    

});