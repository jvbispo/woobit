import venom from "venom-bot";

interface IMessage {
    isGroupMsg: boolean;
    body: string;
    from: string;
}

venom
  .create({
    session: 'session-name', //name of session
    multidevice: false // for version not multidevice use false.(default: true)
  })
  .then((client: any) => start(client))
  .catch((erro: Error) => {
    console.log(erro);
  });

function start(client: any) {
  client.onMessage((message: IMessage ) => {
    if (message.body === 'Hi' && message.isGroupMsg === false) {
      client
        .sendText(message.from, 'Welcome Venom 🕷')
        .then((result: any) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro: Error) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }
  });
}