
/**
 *Arquivo que possui  a conexão com o banco de dados 
 *
 */


 const getConnections = () => {
    return {
      DB_MYSQL_HOST: "conhecimentoe.mysql.dbaas.com.br",
      DB_MYSQL_PORT: 3306,
      DB_MYSQL_USER: "conhecimentoe",
      DB_MYSQL_PASSWORD: "Ebr715900!",
      DB_MYSQL_DBNAME: "conhecimentoe",
      DB_MYSQL_TIMEOUT: 10000000
    };
};
export const connectionDb = getConnections()