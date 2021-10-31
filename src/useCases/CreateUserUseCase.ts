import ICreateUserDTO from '@/domain/dtos/ICreateUserDTO';
import IUser from '@/domain/entities/IUser';
import { IUsersRepository } from '@/domain/repositories/IUsersRepository';

export default class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    name,
    lastName,
    email,
    password,
    gender,
    birthDate,
  }: ICreateUserDTO): Promise<IUser> {
    return this.usersRepository.create({
      name,
      lastName,
      email,
      password,
      gender,
      birthDate,
    });
  }
}
