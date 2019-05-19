//modelo tarea
import {Router} from 'express';
import {getTasks, createTask,getOneTask,deleteTask,updateTask,getTaskByProject } from '../controllers/task.controller.js';

const router = Router();

// /api/task
router.get('/',getTasks);
router.post('/',createTask);

// /api/task/:id_task
router.get('/:id_task',getOneTask);
router.delete('/:id_task',deleteTask);
router.put('/:id_task',updateTask);
// /api/task/project/:id_project
router.get('/project/:id_project',getTaskByProject);

export default router;