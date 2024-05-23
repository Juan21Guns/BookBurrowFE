import bgImage from '../assets/background.svg';
import happyRaccoon from '../assets/RacLookUp.svg';
import floatRead from '../assets/FloatingReading.png';
import classes from '../styles/Preview.module.css';
import { useNavigate } from 'react-router-dom';

function Preview () {
    const navigate = useNavigate();

    function handleClick () {
        navigate("/signup");
    }

    return (
        <div className={classes.wrapper}>
            <h1>The <em>Book</em> Burrow</h1>
            <h4>Your <b>leading</b> site in book clubbiness.</h4>
            <div className={classes.rac}>
                <img src={happyRaccoon} />
            </div>
            <div className={classes.g2}></div>
            <div className={classes.g1}></div>
            <div className={classes.g3}></div>
            {/* <img src={bgImage} id={classes.bg} /> */}
            <button onClick={handleClick}>Sign Up</button>
        </div>
    )
}

export default Preview;