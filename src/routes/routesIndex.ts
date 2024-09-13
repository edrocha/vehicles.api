/**
 * Arquivo com array de rotas paar ser usada na classe app,no registro das rotas
 */

const vehicle = require('../routes/vehicles.route')

 export const ROUTES = [
    
    {
        nome:'vehicles',
        path:vehicle
    }
    
 ]