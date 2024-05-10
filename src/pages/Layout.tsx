import { Outlet } from "react-router-dom";
import classes from '../styles/Layout.module.css';
import profile from '../assets/profile.svg';
import search from '../assets/magnifier-svgrepo-com.svg';
import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { removeTodo, addTodo } from "../redux/objectSlice";
import searchBooks from "./BookSearch/booksApi";

function Startup () {
    const [bSelect, setBSelect] = React.useState('Books'); 
    const [text, setText] = React.useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    function RemoveBooks() {
        dispatch(removeTodo());
    }

    function UpdateBooks (input: string) {
        searchBooks(`title=${input}`)
            .then(e => {
                if (e === null) {
                    dispatch(addTodo(null));
                } else {
                    dispatch(addTodo(e));
                }
            });
    }

    const handleTextChange = (e: any) => {
        setText(e.target.value);
    }

    const handleSelectChange = (e: any) => {
        setBSelect(e.target.value);
    }

    let handleChange = (e: any) => {
        e.preventDefault();
        if (text) {
            switch (bSelect) {
                case "Books":
                    RemoveBooks();
                    UpdateBooks(text);
                    navigate('/bookresults');
                    break;
                case "Author":
                    // searchBooks(`title=inauthor=${text}`);
                    break;
                case "Groups":
                    break;
                case "Friends":
                    break;
                default:
                    break;
            }
        }
    }

    return (
        <>
            <nav className={classes.container}>
                <div className={classes.wrapper}>
                    <div className={classes.title}>
                        <NavLink to="/"><h1>The <em>Book</em> Burrow</h1></NavLink>
                    </div>    
                    <form className={classes.form} onSubmit={handleChange}>
                        <select id={classes.select} value={bSelect} onChange={handleSelectChange}>
                            <option value="Books">Books</option>
                            <option value="Author">Author</option>
                            <option value="Friends">Friends</option>
                            <option value="Groups">Groups</option>
                        </select>
                        <input type="text" id={classes.textBox} placeholder="Search Books, Authors, Friends, or Group Chats" value={text} onChange={handleTextChange} />
                        <input type="image" src={search} id={classes.button} alt="Submit" />
                    </form>
                    <div className={classes.profile}><NavLink to="login"><img src={profile} alt="login"/></NavLink></div>
                    <ul className={classes.menu}>
                        <li><NavLink to="/home">Home</NavLink></li>
                        <li><NavLink to="/chat">About</NavLink></li>
                        <li><NavLink to="/bookrecs">Books</NavLink></li>
                        <li><NavLink to="/friends">Friends</NavLink></li>
                        <li><NavLink to="/chat">Chat</NavLink></li>
                    </ul>
                </div>
            </nav>
            <Outlet />

        </>
    )
}

export default Startup;