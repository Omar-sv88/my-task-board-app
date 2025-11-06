import { toast } from "react-toastify";

const API_URL: string = "http://localhost:3000/api";

type TAvailableMethod = "get" | "post" | "patch" | "delete";

export interface APIProps {
  path?: string;
  opts?: RequestInit;
  body?: object;
}

export type API = {
  [key in TAvailableMethod]: (props: APIProps) => Promise<Response | void>;
};

const API_METHOD: { [key in TAvailableMethod]: TAvailableMethod } = {
  get: "get",
  post: "post",
  patch: "patch",
  delete: "delete",
};

export const useAPI = (basePath?: string) => {
  const service = (path?: string, opts?: RequestInit) =>
    fetch(`${API_URL}${basePath}${path || ""}`, opts)
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
    get: ({ path, opts }) =>
      service(path, {
        ...opts,
        method: API_METHOD.get.toUpperCase(),
      }),
    post: ({ path, opts, body }) =>
      service(path, {
        ...opts,
        method: API_METHOD.post.toUpperCase(),
        headers: {
          "Content-Type": "application/json",
        },
        body: body && JSON.stringify(body),
      }),
    patch: ({ path, opts, body }) =>
      service(path, {
        ...opts,
        method: API_METHOD.patch.toUpperCase(),
        headers: {
          "Content-Type": "application/json",
        },
        body: body && JSON.stringify(body),
      }),
    delete: ({ path, opts }) =>
      service(path, {
        ...opts,
        method: API_METHOD.delete.toUpperCase(),
      }),
  };

  return {
    api,
  };
};
