/**
 * Arquivo onde é iniciado nosso servidor com a conexao com nosso banco de dados
 */

import {app} from './app'
const connection = require('./database/index'); 

 let PORT = process.env.PORT || 4500;
app.listen(PORT,()=>{
     console.log(`Server listening on port: ${PORT}`);
 });