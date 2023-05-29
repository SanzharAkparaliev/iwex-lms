import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.USER_AUTH,
});

// export const authUser =

// export const registerUser = (data) => {
//   return requestApi.post(
//     '/api/v1/auth/login',
//     JSON.stringify({ email: user, password: pwd })
//   );
// };

export const userAuth = (data) => {
  return requestApi
    .post('http://146.190.46.127:8080/api/v1/auth/login', { json: data })
    .json();
};