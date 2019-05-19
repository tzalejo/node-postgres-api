import Task from '../models/Tasks';

export async function getTasks(req, res) {
  console.log('estoy en get task');
  
  try {
    const tasks = await Task.findAll();
    res.json({
      data: tasks
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion get',
      data:{}
    });
  }
}

export async function createTask(req,res){
  const {nombre_task,estado_task,id_project}  = req.body;
  try {
    let nuevoTask = await Task.create({
      nombre_task,
      estado_task,
      id_project
    },{
      fields: ['nombre_task', 'estado_task','id_project']
    });
    if (nuevoTask){
      res.json({
        message: 'Task creado satifactoriamente',
        data: nuevoTask
      });
    }
  } catch (error) {
    res.status(500).json({
      message : 'Error ',
      data:{}
    })
  }
}


export async function deleteTask(req, res){
  const {id_task } = req.params;
  try {
    const cantidadTaskEliminado  = await Task.destroy({
      where: {id_task}
    });
    res.json({
      message : 'Tarea eliminado sactifactoriamente',
      elementosEliminado : cantidadTaskEliminado
    })

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion Delete',
      data:{}
    });
  }
}

export async function updateTask(req, res) {
  const {id_task} = req.params;
  const {nombre_task,estado_task,id_project} = req.body;
  try {
    const task = await Task.findOne({
      attributes: ['nombre_task','estado_task','id_project'],
      where: {id_task}
    });
    const updateTask = await Task.update({
      nombre_task,
      estado_task,
      id_project
    },{
      where : {id_task}
    });
    res.json({
      message : 'Tarea Modificada sactifactoriamente',
      updateTask
    })
  } catch (error) {
    res.status(500).json({
      message : 'Error Update',
      data:{}
    })
  }
}

export async function getOneTask(req, res) {
 const {id_task} = req.params;
 try {
   const task = await Task.findAll({
     where: {id_task}
   });
   res.json({
     massage: 'Se obtuvo un resultado',
     data: task
   })
 } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion getOne',
      data:{}
    });
 }
}

export async function getTaskByProject(req, res) {
  const {id_project}  = req.params;
  try {
    const tasks = await Task.findAll({
      attributes:['id_task', 'nombre_task','estado_task','id_project'],
      where : {id_project}
    });
    res.json(tasks)
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion obtener tares de un proyecto particular',
      data:{}
    });
  }
}