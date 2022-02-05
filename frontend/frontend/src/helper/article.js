import api from "./api";

const createArticle = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("/api/article/create", data)
      .then((response) => {
        if (response.status === 201) {
          resolve(response.data);
        } else {
          reject(response);
        }
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const getArticleById = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/article/" + id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const getAllArtiles = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/article")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const deleteArticleById = (id) => {
  return new Promise((resolve, reject) => {
    api
      .delete("/api/article/" + id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export { createArticle, getArticleById, getAllArtiles, deleteArticleById };
