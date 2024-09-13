/**
 * Interface de Atualização de Vehicles
 * 
 */

import { ICreateVehicleRequestDto} from "./create-vehicle.dto";

export interface IUpdateVehicleRequestDto extends ICreateVehicleRequestDto {
      id:string;
}