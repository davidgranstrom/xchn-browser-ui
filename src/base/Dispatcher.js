
let oscPort = null;

class Dispatcher {
  constructor() {
    oscPort = new osc.WebSocketPort({
      url: "ws://localhost:8081" // URL to your Web Socket server.
    });

    oscPort.open();
  }

  send(data) {
    console.log('this.oscPath', this.oscPath);
    console.log('oscPort', oscPort);
    console.log('data', data);

    oscPort.send({
      address: this.oscPath,
      args: ["world"]
    });
  }

  receive(data) {

  }
}

export default new Dispatcher();
