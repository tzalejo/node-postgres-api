import Sequelize from 'sequelize';
export const sequelize = new Sequelize(
  'node-postgresql-api',//bd
  'postgres', //usuario
  'ale', // pass
  {
    host:'localhost',
    dialect: 'postgres', /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool:{
      max:5,
      min:0,
      require: 30000,
      idle:10000
    },
    logging:false //para no ver x consola los carteles de postgresql
  }
)