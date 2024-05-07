import sad from '../assets/404Sad.png';

function NotFound () {
    return (
        <>
            <p>Error: Not Found</p>
            <img src={sad} />
        </>
    )
}

export default NotFound;