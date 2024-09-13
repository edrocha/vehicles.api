/**
 * Modelo do banco de dados para salvar as informações do vehicles
 */

 const {Model,DataTypes} = require('sequelize');

 export default class Vehicles extends Model{
     static init(sequelize){
         super.init({
             createdAt: {
                 field: 'created_at',
                 type: DataTypes.DATE,
             },
             updatedAt: {
                 type: DataTypes.DATE,
                 field: 'updated_at',
             },
             placa: {
                 type: DataTypes.STRING,
                 field: 'placa',
             },
             chassi: {
                type: DataTypes.STRING,
                field: 'chassi',
            },
            marca: {
                type: DataTypes.STRING,
                field: 'marca',
            },
             modelo: {
                type: DataTypes.STRING,
                field: 'modelo',
            },
             renavam: {
                type: DataTypes.STRING,
                field: 'renavam',
            },
             ano: {
                 type: DataTypes.INTEGER,
                 field: 'ano',
             },
         },
         {
             sequelize,
             freezeTableName: true,
             tableName: 'vehicles',
         })
     }
 
    
 }
 
 export const vehicleDb = Vehicles;