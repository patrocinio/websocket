var WebSocketServer = require('ws').Server;

var port = (process.env.VCAP_APP_PORT || 8888);

wss = new WebSocketServer({port: port});
wss.on('connection', function(ws) {
       ws.on('message', function(message) {
             console.log('received: %s', message);
             ws.send('echo: ' + message);
             });
       ws.send('connected');
       });
