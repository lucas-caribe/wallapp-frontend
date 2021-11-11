import wallApi from '../services/wallApi';

const generateHeaders = () => ({
  Authorization: `Token ${sessionStorage.token}`,
});

export const getPosts = async () => {
  try {
    const { data } = await wallApi.get('posts');

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const createPost = (postData) => {
  wallApi.post('posts/', postData, generateHeaders());
};
