import Discord from "discord.js-selfbot-v13";
import readline from "readline";
import dotenv from "dotenv"; 
import gradient from "gradient-string";
import { choiceinit, menutext, creatorname } from "./utils/func";

dotenv.config();

export const client = new Discord.Client({
  checkUpdate: false,
  patchVoice: true, 
  partials: [],
});

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const token = process.env.TOKEN;

client.on("ready", async () => {
  menutext(client);
  choiceinit(client);
  const unixTimestamp = 10000000000000000000000000000;
  const dateFromTimestamp = new Date(unixTimestamp * 100000000000000);
  const r = new Discord.RichPresence()
    .setApplicationId('1146949248617828455')
    .setType('PLAYING')
    .setURL('https://x.synapse.to/')
    .setName('Synapse X V3 Beta')
    .setState('Workspace: Robloxplayer.exe')
    .setDetails('Editting Byfron.dll')
    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/925272541264769044/1175970932276334603/images.jpeg-2.jpg?ex=656d2b46&is=655ab646&hm=784bcedee19440e2f21681c649e523266ad8defd0ac9979412df06de5295f984&')
    .setAssetsLargeText('Synapse X')
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/925272541264769044/1175970932276334603/images.jpeg-2.jpg?ex=656d2b46&is=655ab646&hm=784bcedee19440e2f21681c649e523266ad8defd0ac9979412df06de5295f984&')
    .setAssetsSmallText('Join')
    .setStartTimestamp(dateFromTimestamp)
    .addButton('Join', 'https://x.synapse.to/');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
});

client.once("finish", (event) => {
  client.user.setActivity();
});

if (!token) {
  console.clear();
  creatorname();
  rl.question(gradient(["purple", "pink"])("Insira seu token do Discord (Dica: Quando o token for colocado no .env, não terá mais essa pergunta)\n» "), (input) => {
    if (input.trim() === '') {
      console.log(gradient(["red", "orange"])("O token foi retornado como vázio"));
      process.kill(1);
    } else {
      client.login(input)
        .catch((error) => {
          if (error.message === 'An invalid token was provided.') {
            console.clear();
            console.log(gradient(["red", "orange"])("Esse token não existe (Invalid token)"));
          } else {
            console.clear();
            console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
          }
        });
    }
  });
} else {
  console.clear();
  client.login(token)
    .catch((error) => {
      console.clear();
      if (error.message === 'An invalid token was provided.') {
        console.log(gradient(["red", "orange"])("Esse token não existe (Invalid token)"));
      } else {
        console.clear();
        console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
      }
    });
}
export type Translations = {
  en: { [key: string]: string };
  pt: { [key: string]: string };
};
// fiquei com preguiça de utilizar tudo isso
export const translations: Translations = {
  en: {
    optionPrompt: 'Option (Type "back" to go back): ',
    menuText: `Warn: The English version does not have complete translations\n1 - Clone everything to an existing server\n2 - Clone everything to a server the cloner will create\n3 - Clone everything to a server the cloner will create and generate a template\n5 - Account information\n6 - Server information by ID\n7 - Official Discord Server\n8 - Trocar de lingugem`,
    cloneInProgress: '> Cloning in progress...',
    returnnull: 'No response...',
    yandn: ' (1 - Yes, 2 - No): ',
    messagesPerChannel: 'How many messages per channel do you want to clone? (This function is temporarily disabled): ',
    saveToJson: 'Do you want to save to JSON? (1 - Yes, 2 - No): ',
    beautifyJson: 'Do you want to beautify the JSON? (1 - Yes, 2 - No): ',
    ignoreOptions: 'Enter what you want to ignore (e.g., emojis, channels, roles): ',
    reconfigure: 'Do you want to reconfigure? (1 - Yes, 2 - No, 3 - Back): ',
    invalidOption: 'This option is not defined',
    cloneCompleted: '> Cloning completed!',
    configTime: '> Configuration time: ',
    error2: 'An error occurred (You can report this error on our discord):\n',
    undefinedfunc: 'Option not set manually',
    ServerID: 'Enter the ID of the server you want to clone:',
    ServerID2: 'Enter your server ID (Server for which you have an administrator role or ownership):',
    clonedChannels: '> Number of cloned channels: ',
    errorCount: '> Error count during cloning: ',
    enterServerId: 'Enter the server ID: ',
    loadInProgress: '> Loading in progress...',
    loadTime: '> Loading time: ',
    pressEnter: 'Press "ENTER" to continue...',
    guildName: 'Server Name: ',
    guildDescription: 'Server Description: ',
    memberCount: 'Number of Members: ',
    channelCount: 'Number of Channels: ',
    createdDate: 'Created at: ',
    guildId: 'Server ID: ',
    iconUrl: 'Server Icon URL: ',
    splashUrl: 'Server Splash URL: ',
    discoverySplashUrl: 'Server Discovery Splash URL: ',
    serverFeatures: 'Server Features: ',
    emojisCount: 'Number of Emojis: ',
    awaitenter: 'click "ENTER" to continue...',
    stickersCount: 'Number of Stickers: ',
  },
  pt: {
    optionPrompt: 'Opção (Digite "back" para voltar): ',
    yandn: ' (1 - Sim, 2 - Não): ',
    ServerID: 'Digite o ID do servidor que você deseja clonar:',
    undefinedfunc: 'Opção não definida manualmente',
    returnnull: 'Não obteve retorno...',
    awaitenter: 'Clique no "ENTER" para continuar...',
    ServerID2: 'Digite o ID do seu servidor (Servidor que você tem um cargo administrador ou posse):',
    menuText: `1 - Clonar tudo para um servidor já criado\n2 - Clonar tudo para um servidor que o clonador irá criar\n3 - Clonar tudo para um servidor que o clonador irá criar e gerar um template\n5 - Informações da conta\n6 - Informações do servidor por ID\n7 - Servidor Discord Oficial\n8 - Change language`,
    cloneInProgress: '> Clonagem em andamento...',
    messagesPerChannel: 'Quantas mensagens por canal você deseja clonar? (Esta função está temporariamente desativada): ',
    saveToJson: 'Deseja salvar em JSON? (1 - Sim, 2 - Não): ',
    beautifyJson: 'Deseja formatar o JSON? (1 - Sim, 2 - Não): ',
    ignoreOptions: 'Digite o que você deseja ignorar (por exemplo, emojis, canais, cargos): ',
    reconfigure: 'Deseja reconfigurar? (1 - Sim, 2 - Não, 3 - Voltar): ',
    invalidOption: 'Esta opção não está definida',
    cloneCompleted: '> Clonagem concluída!',
    configTime: '> Tempo de configuração: ',
    clonedChannels: '> Número de canais clonados: ',
    errorCount: '> Contagem de erros durante a clonagem: ',
    enterServerId: 'Digite o ID do servidor: ',
    loadInProgress: '> Carregando em andamento...',
    loadTime: '> Tempo de carregamento: ',
    pressEnter: 'Pressione "ENTER" para continuar...',
    guildName: 'Nome do servidor: ',
    guildDescription: 'Descrição do servidor: ',
    memberCount: 'Número de membros: ',
    error2: 'Aconteceu um erro (Você pode reportar esse erro em nosso discord):\n',
    channelCount: 'Número de canais: ',
    createdDate: 'Criado em: ',
    guildId: 'ID do servidor: ',
    iconUrl: 'URL do ícone do servidor: ',
    splashUrl: 'URL do splash do servidor: ',
    discoverySplashUrl: 'URL do splash de descoberta do servidor: ',
    serverFeatures: 'Recursos do servidor: ',
    emojisCount: 'Número de emojis: ',
    stickersCount: 'Número de adesivos: ',
  },
};
