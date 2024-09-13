const chai = require('chai');
const assert = chai.assert;
import supertest from 'supertest';
const connection = require('../../database/index'); 


import {app} from '../../app';

let VehicleTest:any;
const data = {
    placa:'ABC1020',
    marca:'X',
    chassi:'123456x',
    modelo:'Sport',
    renavam:'1234568x',
    ano:2015
}

describe('Test API de vehicles', () => {
    it('Should get All Vehicles', async () => {
		const res = await supertest(app).get('/vehicles/all');
        const json   = JSON.parse(res?.text || {});
        assert(json?.vehicles);
        assert.equal(json?.error,false);
		assert.equal(res?.statusCode,200);
	});

    it('Should create a Vehicle', async () => {
		const res = await supertest(app).post('vehicles/create').send(data);
        const json   = JSON.parse(res?.text || {});
        assert(json?.vehicles);
        assert.equal(json?.error,false);
		assert.equal(res?.statusCode,200);
        VehicleTest = json?.vehicles;
	});

    it('Should FAIL create a Vehicle by Required Fields empty', async () => {
        const dataFailed = {
            placa:'ABC1020',
            marca:'X',
            chassi:'123456x',
            modelo:'Sport',
        };
		const res = await supertest(app).post('/vehicles/create').send(dataFailed);
        const json   = JSON.parse(res?.text || {});
        
        assert.equal(json?.error,true);
        assert(json?.erros);
        assert(json?.msg);
	});

    
    it('Should Update a Vehicle By id Given', async () => {
        data.ano = 2020;
		const res = await supertest(app).put(`/vehicles/${VehicleTest?.id}`).send(data);
        const json   = JSON.parse(res?.text || {});
        assert(json?.vehicles);
        VehicleTest = json?.vehicles;
        assert.equal(json?.error,false);
		assert.equal(res?.statusCode,200);
	});

    it('Should Get a Vehicle By id Given', async () => {
		const res = await supertest(app).get(`/vehicles/find/${VehicleTest?.id}`).send(data);
        const json   = JSON.parse(res?.text || {});
        assert(json?.vehicles);
        assert.equal(json?.error,false);
		assert.equal(res?.statusCode,200);
        VehicleTest = json?.vehicles;
	});

    it('Should Delete a Vehicle By Id Given', async () => {
		const res = await supertest(app).delete(`/vehicles/${VehicleTest?.id}`)
        const json   = JSON.parse(res?.text || {});
        assert.equal(json?.error,false);
		assert.equal(res?.statusCode,200);
        VehicleTest = null;
	});
})

