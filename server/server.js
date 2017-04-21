const {ExpressPeerServer} = require('peer');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 9000;
const OPTIONS = {
  debug: true
};

const server = app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
    process.exit();
  }
  console.log(`Server running on port ${PORT}`);
});

const peerServ = ExpressPeerServer(server, OPTIONS);

app.get('/', (req, res) => {
  res.status(200).send({
    STATUS: 'OK', 
    MESSAGE: 'Welcome to Chattaranga Signaling Server',
    ENDPOINTS: '/api to PeerServer'
  });
});

app.use('/api', peerServ);

module.exports = server;