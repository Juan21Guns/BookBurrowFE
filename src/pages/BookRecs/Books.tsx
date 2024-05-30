import noBook from '../../assets/ImageNotFound.svg'

function Books ({book} : {book: any}) {
    const parser = new DOMParser();

    return (
        <div>
            <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
                <img src={book.bookSmallImage == null ? noBook : book.bookSmallImage}></img>
            </a>
            <h2>{book.bookTitle}</h2>
            <h3>{book.bookSubtitle}</h3>
            <h4>Author(s):             
                {book.bookAuthor}
            </h4>
            <h5>Page Count: {book.pageCount}</h5>
            <p>ISBN 13: {book.bookISBN}</p>
            <div id="description">{parser.parseFromString(book.bookDescription, "text/html").body.textContent}</div>
        </div>
    )
}

export default Books;