import React, { useEffect } from "react";
import { confirmSignUp } from "aws-amplify/auth";
import { useSelector } from "react-redux";
import { IRootState } from "../../redux/IRootState";

function Confirm () {
    const userInfo = useSelector((state: IRootState) => state.user);

    const [code, setCode] = React.useState("");
    const [user, setUser] = React.useState(userInfo.username);

    useEffect (() => {
        setUser(userInfo.username);
    }, [userInfo]);

    async function handleSubmit(e: any) {
        e.preventDefault();
        await confirmSignUp({
            username: user,
            confirmationCode: code,
        });
    }

    return (
        <>
            <p>Hi {user}!</p>
            <div id="confirm">
                <label htmlFor="confirm_code">Enter the confirmation code sent to your email</label>
                <input 
                    onChange={e => setCode(e.target.value)}
                    placeholder="code"
                    value={code}
                    type="text"
                />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </>
    )
}

export default Confirm;