import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom'

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('/', (req, res) => {    /* ESTA ROTA ESTÁ RENDERIZANDO "APP" NO LADO DO SERVIDOR (SSR) */
  const app = ReactDOMServer.renderToString(
    <Router location={req.url}>
  <App />                         
  </Router>);
  const indexFile = path.resolve('./build/index.html');
   
  fs.readFile(indexFile, 'utf8', (err, data) => {

    if (err) {
       console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
       data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
});

app.use(express.static('./build'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});