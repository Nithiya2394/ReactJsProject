
// import { AUTH_API_PATH } from '../constants';
// import { AuthResponse, StatusResponse } from '../types';
import { AuthResponse } from '../types/AuthLogin';

import { AUTH_API_PATH } from "@/constants/ApiPath";
import { getHttpClient } from './AxiosClient';

export type LoginParams = {
    email: string;
    grantType?: string;
    password?: string;
  };

  export const Authlogin = (
    values: LoginParams,
  ): Promise<AuthResponse> => {
    return getHttpClient<AuthResponse>(
      AUTH_API_PATH.LOGIN,
      'POST',
      {
        email: values.email,
        grantType: 'password',
        password: values.password,
      },
    );
  };


// export const Authlogin = (param: LoginParams) => {
//     return getHttpClient<AuthResponse>(AUTH_API_PATH.LOGIN, 'POST', {
//       ...param,
//       grantType: 'password',
//     });
//   };