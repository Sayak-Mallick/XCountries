import api from "../wrapper/fetch.wrapper"

export const getCountries = async () => {
  return api.get("/api/v0.1/countries/flag/images");
};
