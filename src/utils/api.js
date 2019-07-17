import axios from "axios";

const BASE_URL = "https://nc-news-hm.herokuapp.com/api/";

export const getTopics = async () => {
  const { data } = await axios.get(`${BASE_URL}/topics`);
  return data.topics;
};

export const getArticles = async topic => {
  const { data } = await axios.get(`${BASE_URL}/articles`, {
    params: { topic }
  });
  return data.articles;
};

export const getArticleByID = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const postComment = async (article_id, comment) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    comment
  );
  return data.comment;
};

export const deleteComment = async comment => {
  await axios.delete(`${BASE_URL}/comments/${comment}`);
};
