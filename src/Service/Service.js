const apiUrl = 'https://marketing-announcement-api.vercel.app/api/marketing-announcement';

const fetchData = async () => {
  const response = await fetch(apiUrl, {
    'method': 'GET',
  });
  const data = await response.json();
  return data;
}

const Service = {
  getData: () => fetchData()
}

export default Service