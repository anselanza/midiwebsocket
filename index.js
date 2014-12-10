var connect = require('./node_modules/midi.io/node_modules/connect'),
    socketio = require('./node_modules/midi.io/node_modules/socket.io'),
    midi = require('midi.io');

var server = connect.createServer(),
    io = socketio.listen(server);

server.use(midi(io));
server.listen(9000);