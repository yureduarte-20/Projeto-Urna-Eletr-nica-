import express from 'express';
import router from './routes/routes';

const app = express();
// definir  para usar JSON
app.use(express.json());
app.use(router);
app.listen(3000, () =>{
    console.log('Aplicação rodando na porta 3000')
})