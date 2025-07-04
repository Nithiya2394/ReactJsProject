import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { ProfileResponse, ProfileType } from '../types';
import { useAuth } from './AuthProvider';
import { getProfileDetails } from '../repositories';
import { useLoader } from './LoaderProvider';
import { toast } from 'react-toastify';
import { localizedError } from '@utils';

type ProfileContextType = {
  profileDetails: ProfileType | null;
  refetch: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextType>({
  profileDetails: null,
} as ProfileContextType);

type ProfileProviderProps = {
  children: JSX.Element;
};
export const ProfileProvider = ({ children }: ProfileProviderProps) => {
  const { isLoggedIn } = useAuth();

  const [profileDetails, setProfileDetails] = useState<ProfileType | null>(
    null,
  );
  const { setIsLoading } = useLoader();

  const getProfileData = useCallback(async () => {
    if (isLoggedIn) {
      try {
        setIsLoading(true);
        const response: ProfileResponse = await getProfileDetails();
        setProfileDetails(response?.data);
      } catch (e) {
        toast.error(localizedError(e)?.message);
      }
      setIsLoading(false);
    }
  }, [setIsLoading, isLoggedIn]);

  useEffect(() => {
    getProfileData();
  }, [getProfileData]);

  const values = useMemo(
    () =>
      ({
        profileDetails,
        refetch: getProfileData,
      }) as ProfileContextType,
    [profileDetails, getProfileData],
  );
  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};
export const useProfile = () => {
  return useContext(ProfileContext);
};
