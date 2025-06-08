import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
