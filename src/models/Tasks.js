import Sequelize from 'sequelize';
import {sequelize} from '../database/database'; //conexion

//definir el modelo
const Task = sequelize.define('task',{
  id_task: {
    type: Sequelize.INTEGER,
    primaryKey: true
  } ,
  nombre_task :{
    type: Sequelize.TEXT
  },
  estado_task :{
    type: Sequelize.BOOLEAN
  },
  id_project :{
    type: Sequelize.INTEGER
  }
},{
  timestamps: false
});


export default Task;