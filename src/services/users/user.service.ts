import axios from 'axios';
import { USERS_URL } from '../../utils/enviroment';

export const register = async ({ user }) => {
  const url = `${USERS_URL}/register`;
  const body = {
    password: user.password,
    email: user.email,
    lastName: user.lastName,
    firstName: user.firstName,
  };
  try {
    const resp = await axios.post(url, body);
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    console.log(e.response.data);
    return null;
  }
};

export const login = async (email: string, password: string) => {
  const url = `${USERS_URL}/login`;
  const body = {
    email,
    password,
  };
  try {
    const resp = await axios.post(url, body);
    if (resp?.data?._id) {
      resp.data.id = resp.data._id;
    }
    return resp.data;
  } catch (e) {
    return null;
  }
};
