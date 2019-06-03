const axios = require("axios");

const apiEndpoint = "https://cat-fact.herokuapp.com";

module.exports = async function catFacts(context, req) {
  const { data } = await axios.get(`${apiEndpoint}/facts`);
  console.log(`length of response from catfacts: ${data.all.length}`);
  const fact = data.all[Math.floor(data.all.length * Math.random())];
  console.log(`selected fact: ${fact}`);

  context.res = {
    body: fact,
    headers: {
      "Content-Type": "application/json"
    }
  };
};
