import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const QUESTION_LIMIT = 3;

export async function getSubjects(queryStrings) {
  const { limit, offset = 0, sort = 'time' } = queryStrings;
  try {
    const res = await axios.get(
      `${BASE_URL}/subjects/?limit=${limit}&offset=${offset}&sort=${sort}`,
    );
    return res.data;
  } catch (err) {
    console.log(err.message);
  }
}

export const additionalFetch = (url, setQuestion) => {
  axios.get(url).then((res) => {
    setQuestion((prev) => [...prev, ...res.data.results]);
  });
};

export const deletePage = async (id) => {
  const navigate = useNavigate();
  try {
    const response = await axios.delete(`${BASE_URL}/subjects/${id}/`);
    navigate('/', { replace: true }); // / 으로 이동
    localStorage.removeItem('userData');
    return response.data;
  } catch (err) {
    console.error(err);
    alert('삭제에 실패하였습니다.');
  }
};

export const fetchUser = async (userId) => {
  try {
    const response = await axios.get(`${BASE_URL}/subjects/${userId}/`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const fetchPost = async (userId, offset = 0, limit = QUESTION_LIMIT) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/subjects/${userId}/questions/?limit=${limit}&offset=${offset}`,
    );
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const createQuestion = async (userId, questionText) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/subjects/${userId}/questions/`,
      {
        content: questionText,
      },
    );
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteQuestion = async (questionId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/questions/${questionId}/`);
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const createAnswer = async (questionId, answerText) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/questions/${questionId}/answers/`,
      {
        content: answerText,
        isRejected: false,
      },
    );
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};

export const updateAnswer = async (answerId, answerText) => {
  try {
    const response = await axios.put(`${BASE_URL}/answers/${answerId}/`, {
      content: answerText,
      isRejected: false,
    });
    return response.data;
  } catch (err) {
    console.error(err.message);
  }
};
