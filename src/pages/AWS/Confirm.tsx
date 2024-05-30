import React, { useEffect } from "react";
import { confirmSignUp, fetchAuthSession } from "aws-amplify/auth";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../redux/IRootState";
import { redirect, useNavigate } from "react-router-dom";
import { addUser } from "../../redux/userSlice";

function Confirm () {
    const userInfo = useSelector((state: IRootState) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [code, setCode] = React.useState("");
    const [user, setUser] = React.useState(userInfo.username);

    useEffect (() => {
        if (userInfo.username == "guest") {
            navigate("/signup");
        }
        setUser(userInfo.username);
    }, [userInfo]);

    async function handleSubmit(e: any) {
        e.preventDefault();
        try {
            await confirmSignUp({
                username: userInfo.userId,
                confirmationCode: code,
            });
            
            try {
                dispatch(addUser({
                    userId: userInfo.userId,
                    username: userInfo.username,
                    confirmed: true,
                    sub: "",
                    exp: "",
                }));
            } catch (error) {
                console.log(error);
            }

            navigate('/signup');
        } catch (error) {
            console.log(error);
        }
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