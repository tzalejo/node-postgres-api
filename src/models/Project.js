import Sequelize from 'sequelize';
import {sequelize} from '../database/database'; //conexion

import Task from './Tasks';

//definir el modelo
const Project = sequelize.define('projects',{
  id_project: {
    type: Sequelize.INTEGER,
    primaryKey: true
  } ,
  nombre_project :{
    type:Sequelize.TEXT
  },
  prioridad_project:{
    type: Sequelize.INTEGER
  },
  descripcion_project:{
    type:Sequelize.TEXT
  },
  fechaentrega_project :{
    type: Sequelize.DATE
  }
},{
  timestamps: false // para no tener problema con las fechas
});
// Relacion 1:M => project 1: M task
Project.hasMany(Task,{
  foreignKey: 'id_project',
  sourceKey: 'id_project'
});
Task.belongsTo(Project,{
  foreignKey:'id_project',
  sourceKey: 'id_project'
});

export default Project;