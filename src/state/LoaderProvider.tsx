import { Loader } from '@ix/react-core-ui';
import React, {
  useContext,
  createContext,
  useState,
  useMemo,
  Dispatch,
} from 'react';

type LoaderContextType = {
  isLoading: boolean;
  setIsLoading: Dispatch<boolean>;
};

const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setIsLoading: () => false,
} as LoaderContextType);

type LoaderProviderProps = {
  children: JSX.Element;
};
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const values = useMemo(
    () =>
      ({
        isLoading,
        setIsLoading,
      }) as LoaderContextType,
    [isLoading, setIsLoading],
  );
  return (
    <LoaderContext.Provider value={values}>
      {children}
      <Loader isVisible={isLoading} />
    </LoaderContext.Provider>
  );
};
export const useLoader = () => {
  return useContext(LoaderContext);
};
