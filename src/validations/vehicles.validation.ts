
/**
 * Arquivo de configuração de validação de Vehicles
 * 
 */


const yup   =require('yup')
export const schemaVehicle =  yup.object().shape({
    placa:yup.string().min(1).required('A placa é obrigatória'),
    marca:yup.string().min(1).required('A marca é obrigatória'),
    modelo:yup.string().min(1).required('O modelo é obrigatório'),
    renavam:yup.string().min(1).required('O renavam é obrigatório'),
     chassi:yup.string().min(1).required('O chassi é obrigatório'),
    ano:yup.number()
    .required('O ano é obrigatório')
    .integer(),
});