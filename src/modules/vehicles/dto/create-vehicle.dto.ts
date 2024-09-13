
/**
 * Interface de criação de Vehicles
 * 
 */

export interface ICreateVehicleRequestDto   {
    placa:string;
    chassi:string;
    marca:string;
    modelo:string;
    renavam:string;
    ano:number;
}