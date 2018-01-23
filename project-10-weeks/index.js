var socketcluster = require('socketcluster-client');  
// subscribe to TICKER channel
var channel = SCsocket.subscribe("TICKER");
                    
channel.watch(function (data) {
  console.log(data); // live data streams here!
});
