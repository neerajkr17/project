import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsersApi = async () => {
  const response = await axios.get(`${BASE_URL}/users`);
  return response.data;
};
