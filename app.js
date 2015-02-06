/**
 * Created by jamiestreet on 29/01/2014.
 */
var PeerServer = require('peer').PeerServer;
var server = new PeerServer({ port: 1234 });

console.log('Fast Woo Peer JS Server started successfully.');