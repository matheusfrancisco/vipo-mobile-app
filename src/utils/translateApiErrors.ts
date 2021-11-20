type messageErrorTypes = {
  key: string;
  message: string;
};

const messageErrors: messageErrorTypes[] = [
  {
    key: 'user_already_exist',
    message: 'Usuário já cadastrado.',
  },
  {
    key: 'user_not_exist',
    message: 'Usuário não existe.',
  },
  {
    key: 'invalid_password',
    message: 'Senha incorreta',
  },
  {
    key: 'under_age',
    message: 'Usuário não possui a idade mínima.',
  },
  {
    key: 'over_age',
    message: 'Usuário acima da idade permitida.',
  },
  {
    key: 'over_age',
    message: 'Usuário acima da idade permitida.',
  },
  {
    key: 'server_error',
    message: 'Error no servidor.',
  },
  {
    key: 'google_autentication_error',
    message: 'Error na autenticação com a google.',
  },
  {
    key: 'parameters_missing',
    message: 'Parâmetros faltando.',
  },
  {
    key: 'invalid_user',
    message: 'Usuário inválido.',
  },
  {
    key: 'invalid_token_provided',
    message: 'Token inválido.',
  },
  {
    key: 'short_password',
    message: 'Senha deve possuir no mínimo 8 caracteres.',
  },
  {
    key: 'invalid_gender',
    message: 'Gênero inválido.',
  },
  {
    key: 'profile_informations_missing',
    message: 'Faltam informações do perfil.',
  },
];

export default function translateApiErrors(translatedError: messageErrorTypes) {
  const translated = messageErrors.filter(
    (errorKey) => errorKey.key === translatedError,
  );
  return {
    translatedError: translated[0].message,
  };
}
