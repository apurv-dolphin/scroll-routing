import axios from "axios";

// Create a new Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // Replace this with your desired base URL
});

const getUser = async () => {
  const userData = await axiosInstance
    .get("/users")
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return userData;
};

const getEditUser = async (formdata) => {
  const userData = await axiosInstance
    .post("/users", formdata)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return userData;
};

const getDelete = async (id) => {
  const deleteData = await axiosInstance
    .patch(`/users/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));

  return deleteData;
};

export { getUser, getDelete, getEditUser };
