import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_AUTH,
});

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};

// добовление курса
export const postCourses = (data) => {
  return requestApi.post('courses/' ,  {json:data}).json()
}
export const postImgCourses = (data) => {
  return requestApi.post('courses/' ,  {body:data}).json()
}


// запросы учителей
export const teachers = (data) => {
  return requestApi.get('users/get-all', { json: data }).json();
};

