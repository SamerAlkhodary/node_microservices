const request = require('supertest');
var express = require('express');
const service = require('../service');
const repository = require('../repository/serviceRepoditory');
describe('loading express', function () {
    let server;
    beforeEach(function () {

        let repo = new repository("./test/services.json");
        server = service.makeServer(repo, 5000);

        request(server.getApp());

    });
    afterEach(function (done) {
        server.close();
        done();

    });
    it('getServiceExist', function testGetServiceExist(done) {
        request(server.getApp())
            .get('/get?name=auth')
            .expect(200, {
                    "name": "auth",
                    "url": "localhost",
                    "port": 4444
                }, done);

    });
    it('getServiceNoExist', function testGetServiceNoExist(done) {
        request(server.getApp())
            .get('/get?name=hello')
            .expect(404, done);

    });
    it('add service should work',function testAddServiceShouldWork(done){
        let newService={
            name: "newService",
            url:"url",
            port : 5000,

        }
        request(server.getApp())
        .post('/add',done)
        .send(newService)
        .expect(200,{
            status:"worked"
        },done)
    });
    it('add service should not work',function testAddServiceShouldNotWork(done){
        let newService={
            name: "newService",
            port : 5000,

        }
        request(server.getApp())
        .post('/add',done)
        .send(newService)
        .expect(406,{
            status:"error"
        },done)
    });

});