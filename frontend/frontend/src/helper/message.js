import api from './api';

const createMessage = (data) => {
  return new Promise((resolve, reject) => {
    api.post('/api/message/create', data).then(response => {
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

const getMessageById = (id) => {
  return new Promise((resolve, reject) => {
    api.get('/api/message/' + id).then(response => {
        resolve(response.data);
    }).catch(error => {
        console.log(error);
        reject(error);
    });
  });
}

const getAllMessages = () => {
  return new Promise((resolve, reject) => {
    api.get('/api/message').then(response => {
      resolve(response.data);
    }).catch(error => {
        console.log(error);
        reject(error);
    });
  })
}

export { createMessage, getMessageById, getAllMessages };