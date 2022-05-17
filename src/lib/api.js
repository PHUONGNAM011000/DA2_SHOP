import axios from 'axios';
const BACKEND_DOMAIN = 'https://backendfashionstore.azurewebsites.net/api';

export async function getAllProducts() {
  const response = await axios.get(`${BACKEND_DOMAIN}/Products`);

  let data = [];
  for (let i = 0; i < response.data.length - 123; i++) {
    data.push(response.data[i]);
  }

  return data;
}
