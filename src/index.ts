import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './api'

const app = express();

app.use(routes);

app.use((req, res) => res.status(404).json({ message: 'Not found'}));
app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.get('port'), () => {
    console.log( `server started at http://localhost:${ config.get('port') }` );
});