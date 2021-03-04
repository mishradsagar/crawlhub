import express from "express";
import path from "path";
const app = express();
const port = 8080;

app.get( "/", ( req, res ) => {
    res.render( "index" );
} );

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );