import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_AUTH,
});

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};
export const postCourses = (data) => {
  return requestApi.post('courses/' ,  {json:data}).json()
}
export const postImgCourses = (data) => {
  return requestApi.post('courses/' ,  {body:data}).json()
}