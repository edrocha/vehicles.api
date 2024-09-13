/**
 * Rotas com metódos a ser utilizados na rota gameplay
 * Os Metódos permitidos sao GET,POST,PUT,DELETE
 */

 const express = require('express').Router();
import VehicleService from '../modules/vehicles/vehicle.service'
import VehicleController from '../controllers/vehicle' 
 const router = express;

  const _vehicleConroller = new VehicleController(new VehicleService());
 
 router.get('/find/:id',async(req,res)=>{
   return await _vehicleConroller.findOne(req,res);
});
 router.get('/teste',async(req,res)=>{
    return await _vehicleConroller.teste(req,res);
 });
 
 router.post('/create',async(req,res)=>{
    return await _vehicleConroller.create(req,res);
 });
 
 router.get('/all',async(req,res)=>{
   return await _vehicleConroller.read(req,res);
});

 router.put('/:id',async(req,res)=>{
     return await _vehicleConroller.update(req,res);
  });
 
 router.delete('/:id',async(req,res)=>{
    return await _vehicleConroller.delete(req,res);
 });



 module.exports = router;