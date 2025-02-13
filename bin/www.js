const app = require('../app');
var debug = require('debug')('jli-api:server');
var http = require('http');

const StartDB = require('../server/shared/DataBase/DB').StartDB;
const config = require('./config');

const port = normalizePort(process.env.PORT || config.port);
app.set('port', port);

const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/*process.on('SIGTERM', () => {
  //mySequelize.closeConnection(mySequelize.sequelize);
  console.log('SIGTERM сигнал бработан.');
});

process.on('SIGINT', () => {
  //mySequelize.closeConnection(mySequelize.sequelize);
  console.log('SIGINT сигнал обработан.');
});*/

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
  console.log('Сервер запущен');
  StartDB();
}
