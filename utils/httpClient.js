import axios from 'axios';
import querystring from 'querystring';

export const SearchPosts = async (q) => {
  const query = querystring.stringify({ q });
  // option1
  return await axios({
    method: 'GET',
    url: '/api/search?' + query
  });

  // option2
  // return await axios.get('/api/search?' + query);
}


