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

    return token;
  } catch (error) {
    console.log(error);
    return { error: 'Incorrect username or password' };
  }
};
