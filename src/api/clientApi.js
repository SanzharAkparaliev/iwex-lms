import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: 'process.env.REACT_USER_AUTH',
});

// export const authUser =

// export const registerUser = (data) => {
//   return requestApi.post(
//     '/api/v1/auth/login',
//     JSON.stringify({ email: user, password: pwd })
//   );
// };

export const userAuth = (data) => {
  return requestApi.post('/api/v1/auth/login', { json: data }).json();
};
