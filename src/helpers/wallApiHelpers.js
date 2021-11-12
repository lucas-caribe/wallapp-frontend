import wallApi from '../services/wallApi';

const generateHeaders = () => ({
  Authorization: `Token ${sessionStorage.token}`,
});

export const getPosts = async () => {
  try {
    const response = await wallApi.get('posts');

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPost = (postData) => {
  wallApi.post('posts/', postData, generateHeaders());
};

export const userLogin = async (userCredentials) => {
  try {
    const response = await wallApi.post('users/login/', userCredentials);
    const { key: token } = response.data;

    sessionStorage.token = token;
    sessionStorage.username = userCredentials.username;

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export const userLogout = () => {
  wallApi.post('/users/logout/');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('token');
};
