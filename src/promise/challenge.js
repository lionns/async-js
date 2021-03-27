const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then((data) => {
    console.log(data.info.count);
    return fetchData(`${API}${data.results[0].id}`);
  })
  .then((data) => {
    console.log(data.name);
    return fetchData(data.origin.url);
  })
  .then((data) => {
    console.log(data.dimension);
    return fetchData(data.residents[8]);
  })
  .then((data) => {
    console.log(data.name);
    console.log(data.status);
  })
  .catch((err) => console.error(err));
