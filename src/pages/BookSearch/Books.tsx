import noBook from '../../assets/ImageNotFound.svg'

function Books ({volume, selfLink} : {volume: any, selfLink: any}) {
    return (
        <>
            <a href={selfLink == undefined ? "/" : selfLink} target="_blank" rel="noopener noreferrer">
                <img src={volume.imageLinks == null ? noBook : volume.imageLinks.thumbnail}></img>
            </a>
            <h2>{volume.title}</h2>
            <h3>{volume.subtitle}</h3>
            <h4>Author(s): {volume.authors == undefined ? 'undefined' : volume.authors.map((author: string) => {
                return author
            })}</h4>
            <h5>Page Count: {volume.pageCount}</h5>
            <p>ISBN 13: {volume.industryIdentifiers == undefined ? "undefined" : volume.industryIdentifiers[0].identifier}</p>
            <h6>{volume.publishedDate}</h6>
            <p>{volume.description}</p>
        </>
    )
}

export default Books