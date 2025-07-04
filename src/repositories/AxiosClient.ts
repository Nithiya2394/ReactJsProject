import axios, { Method, AxiosProgressEvent } from 'axios';
import qs from 'qs';
import { isNil, get, isEqual } from 'lodash';

import { AuthResponse } from '../types/AuthLogin';
import { Configuration } from '@/constants/Config';
import SessionService from '../services/SessionService';
import { StorageService } from '../services/StorageService';

export const AuthorizationKey = 'Authorization';

type Data = Record<string, unknown>;
type Param = Data | Array<unknown>;
type ResponseData<T> = { data: T };

export const register = () => {
  axios.defaults.baseURL = Configuration.BASE_URL;
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  const userDetails = StorageService.userDetails.getValue();
  if (userDetails) {
    const user = JSON.parse(userDetails) as AuthResponse;
    if (user.data.accessToken) {
      axios.defaults.headers.common[AuthorizationKey] =
        `Bearer ${user.data.accessToken}`;
    }
  }
};

export const setUserSessionToken = (token?: string | null) => {
  if (!isNil(token)) {
    axios.defaults.headers.common[AuthorizationKey] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common[AuthorizationKey];
  }
};

export const getHttpClient = <T>(
  path: string,
  method: Method,
  data: Data | null = null,
  params: Param | null = null,
): Promise<T> => {
  const query = !isNil(params)
    ? '?' + qs.stringify(params, { allowDots: true })
    : '';
  const urlPath = path + query;

  return asyncOperation(
    axios({
      method: method,
      url: urlPath,
      data: data,
    }),
  );
};

export const postMultiPart = <T>(
  path: string,
  method: string,
  data: Data | FormData | null,
  params: Param | null = null,
  onUploadProgress?: (progressEvent: AxiosProgressEvent) => void,
): Promise<T> => {
  const query =
    params !== null ? '?' + qs.stringify(params, { allowDots: true }) : '';

  const url = axios.defaults.baseURL + path + query;
  return asyncOperation(
    axios({
      method: method,
      url: url,
      data: data,
      onUploadProgress,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }),
  );
};

const asyncOperation = async <T>(request: Promise<T>) => {
  try {
    const response = await request;
    return (response as ResponseData<T>).data as T;
  } catch (err: unknown) {
    const error = err as Record<string, Data>;
    const data = get(error, 'response.data');

    const message = get(data, 'message', get(data, 'error')) as string;
    const status = get(data, 'status', error?.response?.status) as number;
    if (isEqual(status, 401)) {
      SessionService.unAuthenticated();
      throw new ServerException(message, status, data);
    } else if (!isNil(message)) {
      throw new ServerException(message, status, data);
    } else {
      throw error;
    }
  }
};

class ServerException extends Error {
  status: number;
  response: Param | null;
  constructor(
    message: string | undefined,
    status: number,
    response: Data | null,
  ) {
    super(message);
    this.name = 'ServerException';
    this.status = status;
    this.response = response;
  }
}

export { ServerException };
