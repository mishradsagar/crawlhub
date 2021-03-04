import express from 'express';
import config from './config';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './api/routes'

const app = express();

app.use(cors);
app.use(require('morgan')('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);

app.get("/", ( req, res ) => {
    res.render( "index" );
});

app.listen(config.get('port'), () => {
    console.log( `server started at http://localhost:${ config.get('port') }` );
});