import bg from '../assets/404BG.svg';
import fg from '../assets/404NoBG.svg';
import classes from '../styles/NotFound.module.css';
import { useNavigate, NavLink } from 'react-router-dom';

function NotFound () {
    const navigate = useNavigate();

    return (
        <div className={classes.wrapper}>
            <h4 id={classes.back404}>404</h4>
            <h4 id={classes.for404}>Not Found</h4>
            <button onClick={() => navigate(-1)}>&#60;-Go Back</button>
            <img src={fg} className={classes.fg}/>
            <div className={classes.box}>
                <img src={bg} className={classes.bg} />
            </div>
        </div>
    )
}

export default NotFound;