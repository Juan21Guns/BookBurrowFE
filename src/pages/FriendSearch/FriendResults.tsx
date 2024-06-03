import { useSelector } from "react-redux"; 
import { IRootState } from "../../redux/IRootState";
import React, { useEffect } from "react";

interface friend {
    userId: number,
    firstName: string,
    lastName: string,
    friendStatus: number,
}

type Dictionary = { [index: string]: string }

function FriendResults () {
    const todos = useSelector((state: IRootState) => state.friend.friends);
    const filtered = todos.filter((e: any) => e.friendStatus != 3);
    const [friends, setFriends] = React.useState(filtered);


    const fs = {
        "-1": "Add Friend",
        "0": "Pending",
        "1": "Accepted",
        "2": "Denied",
        "3": "Blocked",
    } as Dictionary

    useEffect(() => {
        setFriends(filtered);
    }, [todos])

    return (
        <div id="friend-search-results">
            <h1>Search results:</h1>
            {friends.map((friend: friend) => {
                const fn = fs[friend.friendStatus];
                return (
                    <div key={friend.userId} id={`friend-${friend.userId}`}>
                        <p>{friend.firstName} {friend.lastName}</p>
                        <p>{fn}</p>
                        <button>Add Friend</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendResults;