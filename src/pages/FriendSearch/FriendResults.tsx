import { useSelector } from "react-redux"; 
import { IRootState } from "../../redux/IRootState";
import React, { useEffect } from "react";

interface friend {
    userId: number,
    firstName: string,
    lastName: string,
    friendStatus: number,
}

type Dictionary = { [index: string]: any }

function FriendResults () {
    const todos = useSelector((state: IRootState) => state.friend.friends);
    
    const filterTodos = () => {
        return todos.filter((e: friend) => e.friendStatus != 3);
    }

    const [friends, setFriends] = React.useState(filterTodos());

    const fs = {
        "-1": <button>Add Friend</button>,
        "0": <p>Pending</p>,
        "1": <p>Friends</p>,
        "2": <>
                <p>Denied. Send again?</p>
                <button>Add Friend</button>
            </>,
        "3": <p>Blocked</p>,
    } as Dictionary

    useEffect(() => {
        setFriends(filterTodos());
    }, [todos])

    return (
        <div id="friend-search-results">
            <h1>Search results:</h1>
            {/* {friends.map((friend: friend) => {
                const fn = fs[friend.friendStatus];

                return (
                    <div key={friend.userId} id={`friend-${friend.userId}`}>
                        <p>{friend.firstName} {friend.lastName}</p>
                        {fn}
                    </div>
                )
            })} */}
        </div>
    )
}

export default FriendResults;