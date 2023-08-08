import ky from 'ky';

const requestApi = ky.create({
  prefixUrl: import.meta.env.VITE_USER_TEACH,
});

// const requestTeach = ky.create({
//   prefixUrl: import.meta.env.VITE_USER_TEACH,
// });

export const userAuth = (data) => {
  return requestApi.post('v1/auth/login', { json: data }).json();
};

// добовление курса
export const postCourses = (courses, token) => {
  return requestApi
    .post('courses', {
      json: courses,
      headers: {
        Authorization: `Bearer ${token}`,
        
      },
    })
    .json();
};
export const postImgCourses = (dataimg, token) => {
  return requestApi
    .post('courses', {
      body: dataimg,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "multipart-formdata"
      },
    })
    .json();
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

export const AddLessons = (id) => {
  return requestApi.post(`courses/${id}/lessons`, { json: id }).json();
};
