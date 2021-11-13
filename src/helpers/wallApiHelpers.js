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

export const createPost = async (postData) => {
  try {
    await wallApi.post('posts/', postData, generateHeaders());
  } catch (error) {
    console.log(error);
  }
};

export const editPost = async (postData) => {
  try {
    await wallApi.put(`posts/${postData.id}/`, postData, generateHeaders());
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id) => {
  try {
    await wallApi.delete(`posts/${id}`, generateHeaders());
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
  wallApi.post('users/logout/');
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('token');
};
