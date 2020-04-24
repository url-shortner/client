const API_URL = "http://localhost:8000/";
const ROUTE_URL = "api/route/";

const POST = "POST";
const GET = "GET";
const PUT = "PUT";
const Route = {
  create: async (origin) => {
    const resp = await fetch(API_URL + ROUTE_URL, {
      method: POST,
      body: JSON.stringify({
        origin: origin
      })
    });
    console.log(await resp.json());
  },
  retrieve: async (key) => {
    const resp = await fetch(API_URL + ROUTE_URL + '/' + key, {
      method: GET,
    });
    console.log(await resp.json());
  }
};
export default function (context) {
  context.api = {Route};
};
