import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_AUTH,
});

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};

// запросы учителей
export const teachers = (data) => {
  return requestApi.get('/api/users/get-all', { json: data }).json();
};
