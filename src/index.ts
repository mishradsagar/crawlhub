import express from 'express';
import { connect } from 'mongoose';
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

try {
    connect(config.get('mongoUrl'), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });
}
catch (err) {
    console.log(err);
    process.exit(1);
}

app.listen(config.get('port'), () => {
    console.log( `server started at http://localhost:${ config.get('port') }` );
});