import axios from 'axios';

const url = 'ferreteria.somee.com/api';

const handleApiRequest = async (method, endpoint, body) => {
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
