import axios from 'axios';

const url = 'ferreteria.somee.com/api';

const handleApiRequest = async (method, endpoint, body) => {
  // return axios({
  //   method,
  //   url: `${process.env.NEXT_PUBLIC_API_URL}/users${endpoint}?apikey=${process.env.NEXT_PUBLIC_API_KEY}`,
  //   data: {
  //     ...data,
  //   },
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  const { data, status } = await axios({
    method,
    url: `${process.env.NEXT_PUBLIC_API_URL}${endpoint}`,
    data: {
      ...body,
    },
  });

  return { data, status };
};

export default handleApiRequest;
