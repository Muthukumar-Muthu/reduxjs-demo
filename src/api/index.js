async function getAllUsersSuccecced() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(users);
    }, 2000);
  });
}
async function getAllUsersFailed() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ message: "Error while fetching data" });
    }, 2000);
  });
}

const users = [
  {
    id: 1,
    name: "Muthukumar",
  },
];

const api = {
  getAllUsersFailed,
  getAllUsersSuccecced,
};
export default api;
