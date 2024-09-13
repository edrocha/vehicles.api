/**
 * Classe de Utilidades da Classe Vehicles
 * 
 */


class VehicleUtil{
    formatObject (obj){
        return JSON.parse(JSON.stringify(obj));
     }
}


module.exports = new VehicleUtil();