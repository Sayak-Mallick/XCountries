import api from "../wrapper/fetch.wrapper";

const getCountries = async () => {
  const response = await api.get("/api/v0.1/countries/flag/images");
  return response.data;
};

export default getCountries;
