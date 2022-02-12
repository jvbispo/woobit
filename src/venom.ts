import { Whatsapp } from "venom-bot";
import { manager } from "./nlp";


interface IMessage {
    isGroupMsg: boolean;
    body: string;
    from: string;
}

export const startVenom = async (client: Whatsapp) => {

  client.onMessage(async (message: IMessage ) => {

    if (message.isGroupMsg === false) {
      const botResponse = await manager.process('pt', message.body);
      client.sendText(message.from, botResponse)
        .then((result: any) => {
          console.log('Result: ', result); //return object success
        })
        .catch((erro: Error) => {
          console.error('Error when sending: ', erro); //return object error
        });
    }

  });
}