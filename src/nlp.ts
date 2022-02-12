const { NlpManager } = require('node-nlp');
export const manager = new NlpManager({ languages: ['pt'], forceNER: true });

// Treinamento de despedida
manager.addDocument('pt', 'tchau', 'despedida');
manager.addDocument('pt', 'até mais', 'despedida');
manager.addDocument('pt', 'nos falamos depois', 'despedida');
manager.addDocument('pt', 'até logo', 'despedida');
manager.addDocument('pt', 'tenho que ir', 'despedida');

// Treinamento de saudacao
manager.addDocument('pt', 'e ai?', 'saudacao');
manager.addDocument('pt', 'oi', 'saudacao');
manager.addDocument('pt', 'olá', 'saudacao');
manager.addDocument('pt', 'bom dia', 'saudacao');
manager.addDocument('pt', 'boa tarde', 'saudacao');
manager.addDocument('pt', 'boa noite', 'saudacao');

// Treinamento de idade
manager.addDocument('pt', 'quantos anos voce tem?', 'idade');
manager.addDocument('pt', 'qual sua idade?', 'idade');


// Train also the NLG
manager.addAnswer('pt', 'despedida', 'Até mais!');
manager.addAnswer('pt', 'despedida', 'Tchau, até mais!');
manager.addAnswer('pt', 'despedida', 'Tchau, até logo!');
manager.addAnswer('pt', 'saudacao', 'Olá!');
manager.addAnswer('pt', 'saudacao', 'Oi!');
manager.addAnswer('pt', 'idade', 'Não tenho certeza, porem sou um bot jovem =D');

export const trainBot = async () => {
    await manager.train();
    manager.save();
};
