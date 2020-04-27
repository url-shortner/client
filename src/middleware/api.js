const config = require('../../nuxt.config.js');

const ROUTE_URL = "api/route/";

const POST = "POST";
const GET = "GET";
const PUT = "PUT";

const Route = {
  create: async (origin) => {
    const resp = await fetch(config.API_URL + ROUTE_URL, {
      method: POST,
      headers: {
        'x-api-key': config.API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: origin
      })
    });
    console.log(await resp.json());
  },
  retrieve: async (key) => {
    const resp = await fetch(config.API_URL + ROUTE_URL + '/' + key, {
      method: GET,
      headers: {
        'x-api-key': config.API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'

      },
    });
    console.log(await resp.json());
  },
  list: async () => {
    const resp = await fetch(config.API_URL + ROUTE_URL, {
      method: GET,
      headers: {
        'x-api-key': config.API_KEY,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    });
    console.log(await resp.json());
  }
};

export default function (context) {
  context.api = {Route};
};
