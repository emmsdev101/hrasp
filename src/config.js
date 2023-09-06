//exports.apiBaseUrl = "http://18.191.54.215:4000" 
//exports.apiBaseUrl = "http://192.168.254.137:4000"
//exports.apiBaseUrl = "https://ahp-api.onrender.com:4000"

const newLocal = "localhost"
exports.SERVER_IP =newLocal 
exports.apiBaseUrl = `http://${this.SERVER_IP}:4000`
exports.peerServer = this.SERVER_IP
exports.peerServerPort = "4001"
exports.webSocketServer = `${this.SERVER_IP}:3001` 

// chrome://flags/#unsafely-treat-insecure-origin-as-secure