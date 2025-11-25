import axios from "axios";
import { Article } from "./main.js";

const BASE_URL = "https://panda-market-api-crud.vercel.app";
const logAndThrow = (error) => {
  console.error("Error article:", error);
  throw error;
};
const articleFromInfo = ({ title, content, writer, image }) =>
  new Article(title, content, writer, image);

function getArticleList(params) {
  return axios
    .get(`${BASE_URL}/articles`, { params })
    .then((response) => response.data.list.map(articleFromInfo))
    .catch(logAndThrow);
}

function getArticle(articleId) {
  return axios
    .get(`${BASE_URL}/articles/${articleId}`)
    .then(articleFromInfo)
    .catch(logAndThrow);
}

function createArticle(article) {
  return axios.post(`${BASE_URL}/articles`, article).catch(logAndThrow);
}
createArticle({ title: "안녕하세여", content: "123455667" });

function patchArticle(id, article) {
  return axios.patch(`${BASE_URL}/articles/${id}`, article).catch(logAndThrow);
}

function deleteArticle(articleId) {
  return axios
    .delete(`${BASE_URL}/articles/${articleId}`)
    .then(({ id }) => id)
    .catch(logAndThrow);
}
