import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_AUTH,
});

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};