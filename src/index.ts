import express from 'express';
import config from './config';

const app = express();

app.get("/", ( req, res ) => {
    res.render( "index" );
});

app.listen(config.get('port'), () => {
    console.log( `server started at http://localhost:${ config.get('port') }` );
});