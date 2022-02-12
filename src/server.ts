import express from 'express';
import { create} from "venom-bot";
import { startVenom } from './venom';

const server = express();

const port = 3000;

create({
    session: 'bot', 
    multidevice: false
  })
  .then((client: any) => startVenom(client))
  .catch((erro: Error) => {
    console.log(erro);
  });


server.listen(port, () => {
    console.log(`server running on port ${ port }`)
})
