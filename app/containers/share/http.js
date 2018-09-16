const SERVER_PROTOCOL = 'http';
const SERVER_DOMAIN = 'localhost';
const SERVER_PORT = '9000';

export function httpCall(path) {
  return fetch(`${SERVER_PROTOCOL}://${SERVER_DOMAIN}:${SERVER_PORT}/${path}`);
}
