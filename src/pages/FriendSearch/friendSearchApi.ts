const axios = require('axios').default;

async function friendSearchApi (param: string) {
    const data = await axios.get(`${import.meta.env.VITE_SERVER}/byName?${param}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: Error) => {
      console.log(err);
      return null;
    })
    .finally()

    if (data == null) {
      return null;
    }
    console.log(data);
    return data;
}

export default friendSearchApi;