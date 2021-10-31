import IProfile from '@/domain/entities/IProfile';

export default interface IPatchUserProfileDTO extends IProfile {
  userId: string;
}
