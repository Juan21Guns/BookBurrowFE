import { useSelector } from "react-redux"; 
import { IRootState } from "../../redux/IRootState";
import React, { useEffect } from "react";

function FriendResults () {
    const todos = useSelector((state: IRootState) => state.friend.friends);

    const [friends, setFriends] = React.useState(todos);
    const [friendStatus, setFriendStatus] = React.useState(0);

    // 0 pending, 1 accepted, 2 denied, 3 blocked

    useEffect(() => {
        setFriends(todos);
    }, [todos])

    return (
        <div id="friend-search-results">
            <h1>Search results:</h1>
            {friends.map((friend: any) => {
                return (
                    <div key={friend.userId} id={`friend-${friend.userId}`}>
                        <p>{friend.firstName} {friend.lastName}</p>
                        <p>{friendStatus}</p>
                        <button>Add Friend</button>
                    </div>
                )
            })}
        </div>
    )
}

export default FriendResults;