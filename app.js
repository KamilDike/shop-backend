//app.js
// załadowanie modułów dodatkowych i plików aplikacji
const express = require('express');
// moduł do obsługi routingu
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// nasz plik definiujący odpowiedzi dla ścieżek
const routes = require('./routes/index');
const apiErrorHandler = require('./error/api-error-handler');
const ApiError = require('./error/ApiError');
const app = express();
require('dotenv').config();

// konfiguracja parserów
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*")
  next();
});

// konfiguracja routera dla wszystkich ścieżek
app.use('/', routes);

// obsługa błędnych requestów
app.use((req, res, next) => {
  const error = `There is not such page.`;
  next(ApiError.badRequest(error, 404));
})

// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//       error: {
//         message: error.message
//       }
//     })
// })

app.use(apiErrorHandler);

module.exports = app;