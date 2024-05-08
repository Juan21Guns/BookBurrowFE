const axios = require('axios').default;

function searchBooks (param: string) {
    axios.get(`${import.meta.env.VITE_SERVER}/booksApi?${param}`)
    .then((response: any) => {
      console.log(response.data.items);
    })
    .catch((err: Error) => {
      console.log(err);
    })
    .finally()

}

export default searchBooks;