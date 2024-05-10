const axios = require('axios').default;

async function searchBooks (param: string) {
    const data = await axios.get(`${import.meta.env.VITE_SERVER}/booksApi?${param}`)
    .then((response: any) => {
      return response.data;
    })
    .catch((err: Error) => {
      console.log(err);
    })
    .finally()

    return data;
}

export default searchBooks;