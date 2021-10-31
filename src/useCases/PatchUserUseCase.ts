import IPatchUserDTO from '@/domain/dtos/IPatchUserDTO';
import IUser from '@/domain/entities/IUser';
import { IUsersRepository } from '@/domain/repositories/IUsersRepository';

export default class PatchUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  public async execute({
    id,
    name,
    lastName,
    address,
  }: IPatchUserDTO): Promise<IUser> {
    return this.usersRepository.updateOne({ id, name, lastName, address });
  }
}
