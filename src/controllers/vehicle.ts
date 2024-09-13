/**
 * Controller de Vehicles responsável pelas por
 * responser as resquisições HTTP
 */


import vehicleservice from "../modules/vehicles/vehicle.service";
import {schemaVehicle} from '../validations/vehicles.validation'
import * as Yup from 'yup'


  export default class VehicleController {
    constructor(private readonly vehicleservice: vehicleservice) {}

    teste(req,res){
        return res.status(200).json(
            {
                'msg':'Rota Vehicles Works!'
            }
        ) 
    }
  
    async create(req,res) {
      let{data} = req.body
      let dataObj = ( data!=undefined && Object.keys(data).length > 0)?data:req.body
      try{
        await  schemaVehicle.validate(dataObj,{abortEarly:false});
        try{
          let  vehicles = await this.vehicleservice.create(dataObj);
      
          return res.status(200).json({vehicles:vehicles,error:false});    
      }catch(err){
        return res.status(200).json({'msg':`Erro ao criar vehicles: ${err.message}`,error:true});
      }
      }catch(err){
        let errorMessages = {};

        if(err instanceof Yup.ValidationError){
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          })
        }
        return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
      }

    }
  
    async read(req,res) {
      let vehicles = await this.vehicleservice.findAll();

      return res.status(200).json({vehicles:vehicles,error:false});
    }
  
    async findOne(req,res) {

      const {id} = req.params;
      let vehicles = await this.vehicleservice.findOne(id);

      if(!vehicles){
        return res.status(404).json({'msg':'Vehicles Não encontrado!',error:true});
      }


      return res.status(200).json({vehicles,error:false});
    }
  
    async update(req,res) {
      const {id} = req.params;
      let vehicles = await this.vehicleservice.findOne(id);

      if(!vehicles){
        return res.status(404).json({'msg':'Vehicles Não encontrado!',error:true});
      }

      let{data} = req.body

      let dataObj = ( data!=undefined && Object.keys(data).length > 0)?data:req.body

      try{
        await  schemaVehicle.validate(dataObj,{abortEarly:false});
        try{
        await this.vehicleservice.update(id,dataObj);
        return res.status(200).json({'msg':'Vehicles Atualizado com Sucesso! ',error:false,vehicles:vehicles});
      }catch(err){
        return res.status(200).json({'msg':`error ao atualizar vehicles: ${err.message}`,error:true});
      }
      }catch(err){
        let errorMessages = {};

        if(err instanceof Yup.ValidationError){
          err.inner.forEach((error) => {
            errorMessages[error.path] = error.message;
          })
        }
        return res.status(400).json({msg:'Dados inválidos',error:true,erros:errorMessages});
      }

    }
  
    async delete(req,res) {
      const {id} = req.params;
      let vehicles = await this.vehicleservice.findOne(id);

      if(!vehicles){
        return res.status(404).json({'msg':'Vehicles Não encontrado!',error:true});
      }

      try{
        await this.vehicleservice.delete(id);
        return res.status(200).json({'msg':'vehicles deletado Com Sucesso!',error:false});
      }catch(err){
        return res.status(200).json({'msg':`Erro ao deletar vehicles: ${err.message}`,error:true});
      }
    }
  }