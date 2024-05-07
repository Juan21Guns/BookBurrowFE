import bgImage from '../assets/background.svg';
import happyRaccoon from '../assets/RacLookUp.svg';
import floatRead from '../assets/FloatingReading.png';
import classes from '../styles/Preview.module.css';

function Preview () {
    return (
        <div className={classes.wrapper}>
            <h1><em>The</em> Book Burrow</h1>
            <h4>Your leading site in book clubbyness.</h4>
            <div className={classes.rac}>
                <img src={happyRaccoon} />
            </div>
            <div className={classes.g2}></div>
            <div className={classes.g1}></div>
            <div className={classes.g3}></div>
            {/* <img src={bgImage} id={classes.bg} /> */}
        </div>
    )
}

export default Preview;