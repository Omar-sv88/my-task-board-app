import { toast } from "react-toastify";

const API_URL: string = "http://localhost:3000/api";

type TAvailableMethod = "get" | "post" | "patch" | "delete";

export type API = {
  [key in TAvailableMethod]: (
    path?: string,
    opts?: RequestInit,
  ) => Promise<Response | void>;
};

const API_METHOD: { [key in TAvailableMethod]: TAvailableMethod } = {
  get: "get",
  post: "post",
  patch: "patch",
  delete: "delete",
};

export const useAPI = (basePath?: string) => {
  const service = (path?: string, opts?: RequestInit) =>
    fetch(`${API_URL}${basePath}${path}`, opts)
      .then((response) => {
        if (response.ok) return response;

        console.error(response.statusText);

        toast.error(response.statusText);
      })
      .catch((error) => {
        console.error(error);

        toast.error(error.message);
      });

  const api: API = {
    get: (path?: string, opts?: RequestInit) =>
      service(path, {
        ...opts,
        method: API_METHOD.get.toUpperCase(),
      }),
    post: (path?: string, opts?: RequestInit) =>
      service(path, {
        ...opts,
        method: API_METHOD.get.toUpperCase(),
      }),
    patch: (path?: string, opts?: RequestInit) =>
      service(path, {
        ...opts,
        method: API_METHOD.get.toUpperCase(),
      }),
    delete: (path?: string, opts?: RequestInit) =>
      service(path, {
        ...opts,
        method: API_METHOD.get.toUpperCase(),
      }),
  };

  return {
    api,
  };
};
