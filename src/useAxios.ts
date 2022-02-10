import type { AxiosRequestConfig } from "axios";
import Axios from "axios";
import { useCallback } from "react";

const AXIOS_INSTANCE = Axios.create({
  baseURL: "http://localhost:3000",
  /** for multiple query params, don't rename with [] suffix */
  paramsSerializer: (params: Record<string, string | string[]>) => {
    const searchParams = new URLSearchParams();
    for (const [key, values] of Object.entries(params)) {
      if (Array.isArray(values)) {
        for (const value of values) {
          searchParams.append(key, value);
        }
      } else {
        searchParams.append(key, values);
      }
    }
    return searchParams.toString();
  },
});

export const useAxios = <T>(): ((config: AxiosRequestConfig) => Promise<T>) => {
  return useCallback((config: AxiosRequestConfig) => {
    const source = Axios.CancelToken.source();
    const promise = AXIOS_INSTANCE({
      ...config,
      cancelToken: source.token,
    }).then(({ data }) => data);

    // @ts-expect-error(arlyon): this exists
    promise.cancel = () => {
      source.cancel("Query was cancelled by React Query");
    };

    return promise;
  }, []);
};
