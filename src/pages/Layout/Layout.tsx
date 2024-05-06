import { Outlet } from "react-router-dom";
import classes from './Layout.module.css';

function Startup () {

    return (
        <>
            <div className={classes.container}>
                <ul>
                    <li><img src="/logo-placeholder-image.png" alt="logo" height="10%" width="10%"></img></li>
                    <li>
                        <form>
                            <input list="searchBar" placeholder="Books" />
                            <input type="text" />
                            <input type="button" />
                        </form>
                    </li>
                    <li>
                        <ul>
                            <li>Home</li>
                            <li>Books</li>
                            <li>Friends</li>
                            <li>Chat</li>
                        </ul>
                    </li>
                    <li>Login</li>
                </ul>
            </div>
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