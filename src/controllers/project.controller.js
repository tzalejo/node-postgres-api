import Project from '../models/Project';

export async function createProject(req,res){
  const {nombre_project, prioridad_project,descripcion_project,fechaentrega_project}  = req.body;
  try {
    let nuevoProject = await Project.create({
      nombre_project,
      prioridad_project,
      descripcion_project,
      fechaentrega_project
    },{
      fields: ['nombre_project', 'prioridad_project','descripcion_project','fechaentrega_project']
    });
    if (nuevoProject){
      res.json({
        message: 'Proyecto creado satifactoriamente',
        data: nuevoProject
      });
    }
  } catch (error) {
    res.status(500).json({
      message : 'Error ',
      data:{}
    })
  }
}

export async function getProjects(req, res) {
  try {
    const projects = await Project.findAll();
    res.json({
      data: projects
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion get',
      data:{}
    });
  }
}

export async function getOneProject(req, res) {
  console.log(req.params);
  const { id_project } = req.params;
  try {
    const project = await Project.findAll({
      where: {
        id_project
      }
    });
    res.json(project);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Error en la peticion getOne',
      data:{}
    });
    
  }
}


export async function deleteProject(req, res){
  const {id_project} = req.params;
  try {
    const delectRowCount = await Project.destroy({
      where:{
        id_project
      }
    });
    res.json({
      message : 'Projecto eliminado sactifactoriamente',
      count : delectRowCount
    })

  } catch (error) {
    
  }
}

export async function updateProject(req, res) {

  const {id_project}  = req.params;
  const {nombre_project, prioridad_project,descripcion_project,fechaentrega_project}  = req.body;
  // console.log(id_project);
  // console.log({nombre_project, prioridad_project,descripcion_project,fechaentrega_project});
  const projects = await Project.findAll({
    // cons attributes le indico que campos quiero obtener 
    attributes:['id_project','nombre_project', 'prioridad_project','descripcion_project','fechaentrega_project'],
    where:{id_project}
  });
  if (projects.length > 0) {
    projects.forEach(async project =>{
      await project.update({
        nombre_project,
        prioridad_project,
        descripcion_project,
        fechaentrega_project
      });
    });

  }
  return res.json({
    message:'Proyecto modificado sactifactoriamente',
    data: projects
  })
}