/**
 * Service com funções de CRUD de Produtos
 * 
 */

import {vehicleDb} from '../../models/vehicles';
const VehicleUtil  = require('../../utils/vehicles.utils')
import {ICreateVehicleRequestDto } from './dto/create-vehicle.dto';
import { IUpdateVehicleRequestDto } from './dto/update-vehicle.dto';

export default class ProdutoService {
  async create(createProdutoDto: ICreateVehicleRequestDto) {
    return await vehicleDb.create(createProdutoDto)
  }

  async findAll() {
    return VehicleUtil.formatObject(await vehicleDb.findAll());
  }

  async findOne(id: number) {
    return  VehicleUtil.formatObject( await vehicleDb.findOne({ where: { id: id} }));
  }

  async update(id: number, updateProdutoDto: IUpdateVehicleRequestDto) {
    return await   vehicleDb.update(updateProdutoDto,{where:{id:id}})
  }

 async delete(id: number) {
   return await vehicleDb.destroy({
     where:{id:id}
   });
  }
}