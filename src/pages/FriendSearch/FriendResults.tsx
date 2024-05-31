import { useSelector } from "react-redux"; 
import { IRootState } from "../../redux/IRootState";
import React, { useEffect } from "react";

function FriendResults () {
    const todos = useSelector((state: IRootState) => state.friend.friends);

    const [friends, setFriends] = React.useState(todos);

    useEffect(() => {
        setFriends(todos);
    }, [todos])

    return (
        <div id="friend-search-results">
            <h1>Search results:</h1>
            {friends.map((friend: any) => {
                return (
                    <p key={friend.userId}>{friend.firstName} {friend.lastName}</p>
                )
            })}
        </div>
    )
}

export default FriendResults;