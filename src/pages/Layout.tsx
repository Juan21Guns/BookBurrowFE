import { Outlet } from "react-router-dom";
import classes from '../styles/Layout.module.css';
import profile from '../assets/profile.svg';
import search from '../assets/magnifier-svgrepo-com.svg';

function Startup () {

    return (
        <>
            <nav className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.title}>
                        <a href="/"><h1><em>The </em> Book Burrow</h1></a>
                    </div>    
                    <form className={classes.form}>
                        <select id={classes.select}>
                            <option value="Books">Books</option>
                            <option value="Author">Author</option>
                            <option value="Friends">Friends</option>
                            <option value="Groups">Groups</option>
                        </select>
                        <input type="text" id={classes.textBox} placeholder="Search Books, Authors, Friends, or Group Chats"/>
                        <input type="image" src={search} id={classes.button} alt="Submit" />
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

        </>
    )
}

export default Startup;