import api from "./api";

const createEventCard = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("/api/event/create_eventcard", data)
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

const getEventCardById = (id) => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard/" + id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const getLatestEventCards = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard_multi/latest")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const getAllEventCards = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard_multi")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const deleteEventCardById = (id) => {
  return new Promise((resolve, reject) => {
    api
      .delete("/api/event/eventcard/" + id)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const buyTicket = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("/api/event/eventcard/buy_ticket", data)
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

const userTickets = (data) => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard_multi/user_tickets")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const updateUserTickets = (data) => {
  return new Promise((resolve, reject) => {
    api
      .post("/api/event/eventcard_multi/user_tickets", {id: data.id })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const getAvailableEvents = () => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard_multi/available_events")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

const allTickets = (data) => {
  return new Promise((resolve, reject) => {
    api
      .get("/api/event/eventcard_multi/tickets")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

export {
  createEventCard,
  getEventCardById,
  getAllEventCards,
  getLatestEventCards,
  buyTicket,
  userTickets,
  updateUserTickets,
  allTickets,
  getAvailableEvents,
  deleteEventCardById,
};
