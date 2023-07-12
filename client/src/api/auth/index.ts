import { axiosInstance } from 'api/instance';
import { ILoginRequest } from './types';

export const login = (params: ILoginRequest) => {
  axiosInstance.post(Endpoints.AUTH.LOGIN, params);
};
