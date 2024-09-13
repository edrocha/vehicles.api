
/**
 * Arquivo onde starta a conexao do banco de Dados
 */
 const Sequelize = require('sequelize');
import{DbConfig} from '../config/database' 
 import {vehicleDb} from '../models/vehicles'
 
 const connection = new Sequelize(DbConfig);
 
 vehicleDb.init(connection);
 

 module.exports = connection;
 