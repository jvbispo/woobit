import { create, Whatsapp} from "venom-bot";

interface IMessage {
    isGroupMsg: boolean;
    body: string;
    from: string;
}

export function startVenom(client: Whatsapp) {

  client.onMessage((message: IMessage ) => {

    if (message.isGroupMsg === false) {
      client.sendText(message.from, 'Olá, pessoa. Esse é meu bot automático')
        .then((result: any) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro: Error) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

  });
}