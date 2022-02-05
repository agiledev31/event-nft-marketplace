import api from './api';

const changeAvatar = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/user/change_avatar', data).then(response => {
      if (response.status === 201) {
        resolve(response.data);
      } else {
        reject(response);
      }
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
}

const changePassword = (data) => {
  return new Promise((resolve, reject) => {
    api.put('/api/user/change_password', data).then(response => {
      resolve(response.data);
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
}

const allUsers = (data) => {
  return new Promise((resolve, reject) => {
    api.get('/api/user/all').then(response => {
      resolve(response.data);
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
}

export { changeAvatar, changePassword, allUsers };