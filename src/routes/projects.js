// modelo proyecto
import {Router} from 'express';
import {createProject,getProjects,getOneProject,deleteProject,updateProject} from '../controllers/project.controller.js';

const router = Router();

// rutas api/project 
router.post('/',createProject);
router.get('/',getProjects);

// /api/project/:projectId
router.get('/:id_project',getOneProject);

router.delete('/:id_project',deleteProject);

router.put('/:id_project',updateProject);
export default router;