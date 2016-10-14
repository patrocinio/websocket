var WebSocket = require('ws')
, ws = new WebSocket('ws://patro-websocket.mybluemix.net');
ws.on('open', function() {
      ws.send('this is a test too');
      });
ws.on('message', function(message) {
      console.log('received: %s', message);
      });
