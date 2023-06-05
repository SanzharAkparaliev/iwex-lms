import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_AUTH,
});

// const requestTeach = ky.create({
//   prefixUrl: import.meta.env.VITE_USER_TEACH,
// });

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};

// запросы учителей
export const getTeachers = (token) => {
  return requestApi 
    .get('users/get-all', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .json();
};
