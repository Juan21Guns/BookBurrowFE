import { Outlet } from "react-router-dom";
import classes from '../styles/Layout.module.css';
import profile from '../assets/profile.svg';

function Startup () {

    return (
        <>
            <nav className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.title}>
                        <h3><em>The </em>Book Burrow</h3>
                    </div>    
                    <form>
                        <input list="searchBar" placeholder="Books" />
                        <input type="text" />
                        <input type="button" />
                    </form>
                    <div className={classes.profile}><a href="login"><img src={profile} alt="login"/></a></div>
                    <ul className={classes.menu}>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/chat">About</a></li>
                        <li><a href="/bookrecs">Books</a></li>
                        <li><a href="/friends">Friends</a></li>
                        <li><a href="/chat">Chat</a></li>
                    </ul>
                </div>
            </nav>
            <Outlet />

            <datalist id="searchBar">
                    <option value="Books"></option>
                    <option value="Author"></option>
                    <option value="Friends"></option>
                    <option value="Groups"></option>
            </datalist>

        </>
    )
}

export default Startup;