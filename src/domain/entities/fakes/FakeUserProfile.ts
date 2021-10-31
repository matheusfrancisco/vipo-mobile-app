import FakeProfile from '@/domain/entities/fakes/FakeProfile';
import FakeUser from '@/domain/entities/fakes/FakeUser';
import IProfile from '@/domain/entities/IProfile';
import { IUserProfile } from '@/domain/entities/IUser';

export default class FakeUserProfile implements IUserProfile {
  public id: string;
  public name: string;
  public lastName: string;
  public email: string;
  public address?: string;
  public profile: IProfile;

  constructor() {
    const user = new FakeUser();
    const profile = new FakeProfile();

    this.id = user.id;
    this.name = user.name;
    this.lastName = user.lastName;
    this.email = user.email;
    this.address = user.address;
    this.profile = profile;
  }
}
