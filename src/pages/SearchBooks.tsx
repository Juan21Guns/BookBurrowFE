import searchBooks from "./booksApi";

function SearchBooks (type: string, title: string) {
    searchBooks(`title=${title}`)
    .then(e => {
        console.log(e);
    });

    return (
        <p>Your results</p>
    )
}

export default SearchBooks;