import ProfileController from '@/infra/controllers/ProfileController';
import GetUserProfileUseCaseFactory from '@/useCases/factories/GetUserProfileUseCaseFactory';
import PatchUserUseCaseFactory from '@/useCases/factories/PatchUserUseCaseFactory';

export default class ProfileControllerFactory {
  private static instance: ProfileController;

  public static getInstance(): ProfileController {
    if (!this.instance)
      this.instance = new ProfileController(
        GetUserProfileUseCaseFactory.getInstance(),
        PatchUserUseCaseFactory.getInstance(),
      );

    return this.instance;
  }
}
