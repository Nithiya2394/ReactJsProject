import React, {
  createContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { ConfigResponse, ConfigResponseType, ConfigType } from '../types';
import { getConfig } from '../repositories';
import { useLoader } from './LoaderProvider';
import { useAuth } from './AuthProvider';
import { toast } from 'react-toastify';
import { localizedError } from '@utils';

type ConfigContextType = {
  appLanguage: ConfigResponse[] | [];
  supportLanguage: ConfigResponse[] | [];
};

export const ConfigContext = createContext<ConfigContextType>({
  appLanguage: [],
  supportLanguage: [],
} as ConfigContextType);

type ConfigProviderProps = {
  children: JSX.Element;
};
export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const { setIsLoading } = useLoader();
  const { isLoggedIn } = useAuth();
  const [appLanguage, setAppLanguage] = useState<ConfigResponse[]>([]);
  const [supportLanguage, setSupportLanguage] = useState<ConfigResponse[]>([]);

  const getAppLanguage = useCallback(async () => {
    try {
      setIsLoading(true);
      const response: ConfigResponseType = await getConfig(
        ConfigType.APP_LANGUAGE,
      );
      setAppLanguage(response?.data?.lookUpResponse);
    } catch (e) {
      toast.error(localizedError(e)?.message);
    }
    setIsLoading(false);
  }, [setIsLoading]);

  const getSupportLanguage = useCallback(async () => {
    try {
      setIsLoading(true);
      const response: ConfigResponseType = await getConfig(
        ConfigType.CUSTOMER_SERVICE_LANGUAGE,
      );
      setSupportLanguage(response.data.lookUpResponse);
    } catch (e) {
      toast.error(localizedError(e)?.message);
    }
    setIsLoading(false);
  }, [setIsLoading]);

  useEffect(() => {
    if (isLoggedIn) {
      getAppLanguage();
      getSupportLanguage();
    }
  }, [getAppLanguage, getSupportLanguage, isLoggedIn]);

  const values = useMemo(
    () =>
      ({
        appLanguage,
        supportLanguage,
      }) as ConfigContextType,
    [appLanguage, supportLanguage],
  );
  return (
    <ConfigContext.Provider value={values}>{children}</ConfigContext.Provider>
  );
};
