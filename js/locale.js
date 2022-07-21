const ALL_MESSAGES = {
  "pt-BR": {
    "Something went wrong!": "Algo deu errado!",
    "Unable to load user information. Please, check if the name is correctly typed.":
      "Não foi possível carregar as informações do usuário. Por favor, verique se o o nome foi digitado corretamentee.",
  },
};

const getMessagesByLocale = (messages) => {
  const languagesAvailable = Object.keys(messages);
  for (language of navigator.languages) {
    if (languagesAvailable.includes(language)) return messages[language];
  }
  return {};
};

const messages = getMessagesByLocale(ALL_MESSAGES);

const t = (message) => {
  return messages[message] || message;
};
