import constants from './constants';

const { BaseURL } = constants;

const fetchData = async (routeName) => {
  const url = `${BaseURL}/${routeName}`;
  const resp = await fetch(url);
  return resp.json();
};

const helper = {
  fetchData,
};

export default helper;
