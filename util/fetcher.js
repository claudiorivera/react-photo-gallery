const axios = require("axios").default;

const fetcher = (...args) => axios.get(...args).then((res) => res.data);

export default fetcher;
