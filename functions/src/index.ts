import * as functions from 'firebase-functions';
import * as express from 'express';

const exApp = express();
exApp.get('/app', (request, response) => {
    response.send('');
});

export const app = functions.https.onRequest(exApp);
