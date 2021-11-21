import { useCallback, useMemo, useState } from 'react';

import { IUserProfile } from '@/domain/entities/IUser';
import { useAuth } from '@/hooks/auth';
import ProfileControllerFactory from '@/infra/controllers/factories/ProfileControllerFactory';

interface IUseGetProfileController {
  loading: boolean;
  getUserProfile(): Promise<IUserProfile | null>;
}

export default function useGetProfileController(): IUseGetProfileController {
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const controller = useMemo(() => ProfileControllerFactory.getInstance(), []);

  const getUserProfile = useCallback(async () => {
    setLoading(true);

    const { error, response } = await controller.getUserProfile(auth.user.id);
    setLoading(false);

    if (error) {
      console.error(error); // We still haven't come with a strategy to handler errors for the user
      auth.signOut();
      return null;
    }

    if (!response) return null;
    return response;
  }, [auth, controller]);

  return { loading, getUserProfile };
}
