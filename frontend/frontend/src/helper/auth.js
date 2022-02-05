import api from './api';

const login = (authInfo) => {
  return new Promise((resolve, reject) => {
    api.post('/api/auth/login', authInfo).then(response => {
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
};

const signup = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/auth/signup', data).then(response => {
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
};

const verifyEmail = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/auth/verify_email', data).then(response => {
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
};

const updateProfile = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/auth/profile', data).then(response => {
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

const forgetPassword = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/auth/forget_password', data).then(response => {
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

const resetPassword = (data) => {
  return new Promise((resolve, reject) => {
    api.put('/api/auth/reset_password', data).then(response => {
      resolve(response.data);
    }).catch(error => {
      console.log(error);
      reject(error);
    });
  });
}

export { login, signup, verifyEmail, updateProfile, forgetPassword, resetPassword};