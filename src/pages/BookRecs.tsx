const axios = require('axios').default

function BookRecs () {
  //book searches 
    console.log(import.meta.env.VITE_SERVER + '/booksApi?title=jujutsu');
    axios.get(`${import.meta.env.VITE_SERVER}/booksApi?title=jujutsu`)
    .then((response: any) => {
      console.log(response.data.items);
    })
    .catch((err: Error) => {
      console.log(err);
    })
    .finally()

    return (
        <div className="bookRecs">
            <h1>See what others are reading!</h1>
        </div>
    )
}

export default BookRecs