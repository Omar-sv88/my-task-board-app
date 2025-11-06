export const useURL = () => {
  const url: URL = new URL(window.location.href);

  const { host, hostname, pathname, protocol, port } = url;

  const path: string = pathname.split("/")[1];

  return {
    host,
    hostname,
    protocol,
    port,
    path,
  };
};
