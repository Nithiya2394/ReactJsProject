import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  Dispatch,
  useCallback,
} from 'react';
import { StorageService } from '../services';
import { AuthResponse } from '../types';
import { setUserSessionToken } from '../repositories';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { localizedError } from '@utils';

type AuthContextType = {
  isLoggedIn: boolean;
  user: AuthResponse | null;
  setIsLoggedIn: Dispatch<boolean>;
  setUser: Dispatch<React.SetStateAction<AuthResponse | null>>;
  clear: () => void;
};

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  setIsLoggedIn: () => undefined,
  setUser: () => undefined,
  clear: () => Promise<void>,
} as AuthContextType);

type AuthProviderProps = {
  children: JSX.Element;
};
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<AuthResponse | null>(null);
  const { i18n } = useTranslation();

  useEffect(() => {
    if (user) {
      StorageService.userDetails.setValue(JSON.stringify(user));
      setUserSessionToken(user?.data?.accessToken);
      setIsLoggedIn(true);
      i18n.changeLanguage(user?.data.appLanguageCode);
    }
  }, [user, i18n]);

  const storeUserDetails = useCallback(async () => {
    const userDetails = await StorageService.userDetails.getValue();
    if (userDetails) {
      setUser(JSON.parse(userDetails) as AuthResponse);
    }
  }, []);

  useEffect(() => {
    storeUserDetails();
  }, [storeUserDetails]);

  const clear = useCallback(async () => {
    try {
      setIsLoggedIn(true);
      setUser(null);
      await StorageService.userDetails.clear();
      setIsLoggedIn(false);
    } catch (e) {
      toast.error(localizedError(e)?.message);
    }
  }, []);

  const values = useMemo(
    () =>
      ({
        isLoggedIn,
        user,
        setUser,
        setIsLoggedIn,
        clear,
      }) as AuthContextType,
    [isLoggedIn, user, clear],
  );
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};
