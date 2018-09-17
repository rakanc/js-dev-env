import 'whatwg-fetch';
import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();
export function deleteUser(id) {
  return del(`users/${id}`);
}

function del(url) {
  const request = new Request(baseUrl + url, {
    method: 'DELETE'
  });

  return fetch(request).then(onSucc, onErr);
}
export function getUsers() {
  return get('users');
}

function get(url) {
  return fetch(baseUrl + url).then(onSucc, onErr);
}

function onSucc(response) {
  return response.json();
}

function onErr(error) {
  console.log(error); // eslint-disable-line no-console
}
