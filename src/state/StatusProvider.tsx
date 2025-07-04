import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { Status } from '../types';
import { useAuth } from './AuthProvider';
import { getStatus } from '../repositories';

type StatusContextType = {
  status?: Status | null;
  refetch: () => Promise<Status | undefined>;
};

const StatusContext = createContext<StatusContextType>({
  status: null,
} as StatusContextType);

type AuthProviderProps = {
  children: JSX.Element;
};
export const StatusProvider = ({ children }: AuthProviderProps) => {
  const { isLoggedIn } = useAuth();

  const [status, setStatus] = useState<Status | null>(null);

  const getData = useCallback(async () => {
    if (isLoggedIn) {
      try {
        const result = await getStatus();
        setStatus(result.data.currentStatus);
        return result.data.currentStatus;
      } catch {
        // TO DO
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getData();
  }, [getData]);

  const values = useMemo(
    () =>
      ({
        status,
        refetch: getData,
      }) as StatusContextType,
    [status, getData],
  );
  return (
    <StatusContext.Provider value={values}>{children}</StatusContext.Provider>
  );
};
export const useStatus = () => {
  return useContext(StatusContext);
};
