import ILogUserDTO from '@/domain/dtos/ILogUserDTO';
import IUser from '@/domain/entities/IUser';
import IAuthenticationRepository from '@/domain/repositories/IAuthenticationRepository';

export default class LogUserUseCase {
  constructor(private authenticationRepository: IAuthenticationRepository) {}

  public async execute(
    data: ILogUserDTO,
  ): Promise<{ token: string; user: IUser }> {
    return this.authenticationRepository.login(data);
  }
}
