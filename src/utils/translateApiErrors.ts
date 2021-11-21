const messageErrors: Record<string, string> = {
  user_already_exist: 'Usuário já cadastrado.',
  user_not_exist: 'Usuário não existe.',
  invalid_password: 'Senha incorreta',
  under_age: 'Usuário não possui a idade mínima.',
  over_age: 'Usuário acima da idade permitida.',
  server_error: 'Error no servidor.',
  google_autentication_error: 'Error na autenticação com a google.',
  parameters_missing: 'Parâmetros faltando.',
  invalid_user: 'Usuário inválido.',
  invalid_token_provided: 'Token inválido.',
  short_password: 'Senha deve possuir no mínimo 8 caracteres.',
  invalid_gender: 'Gênero inválido.',
  profile_informations_missing: 'Faltam informações do perfil.',
};

export default function translateApiErrors(translatedError: string): string {
  return messageErrors[translatedError];
}
