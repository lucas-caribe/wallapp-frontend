import wallApi from '../services/wallApi';

const generateHeaders = () => {
  const csrfToken = document.cookie.match(/(?<=csrftoken=).*(?<!;)/g)[0];
  const sessionToken = sessionStorage.token;

  return {
    Authorization: `Token ${sessionToken}`,
    'X-CSRFToken': csrfToken,
  };
};

export const getPosts = async () => {
  try {
    const response = await wallApi.get('posts');

    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPost = async (postData) => {
  try {
    await wallApi.post('posts/', postData, generateHeaders());
  } catch (error) {
    console.log(error);
  }
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