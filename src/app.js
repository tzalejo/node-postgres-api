//codigo para crear el servidor..

import express,{json} from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects'
import taskRoutes from './routes/tasks'

//inicializacion..
const app = express();

//mideleware..
app.use(morgan('dev')); // para ver en consola lo que llega al servidor..
app.use(json());// para q el servidor entienda los archivos que lleggan en formato json..

//routes
app.use('/api/project',projectRoutes);
app.use('/api/task',taskRoutes);

export default app;