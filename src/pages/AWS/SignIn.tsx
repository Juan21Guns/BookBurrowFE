import { fetchAuthSession, signIn, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import userOptions from "./userOptions";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

const axios = require('axios').default;

function SignIn () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleClick (e: any) {
        e.preventDefault();
        const form = e.currentTarget;
        console.log(form.elements);

        try {
            await signOut();
        } catch (error) {
            console.log();
        }

        try {
            const { nextStep } = await signIn({
                username: form.elements.lusername.value,
                password: form.elements.lpassword.value,
            });
            if (nextStep.signInStep === "DONE") {
                const session = await fetchAuthSession();
                const sessionAccess = session.tokens?.accessToken.payload;
                const sessionId = session.tokens?.idToken?.payload;

                console.log("id token", session.tokens?.idToken);
                console.log("access token", session.tokens?.accessToken);
                
                try {
                    const data = await axios.get(`${import.meta.env.VITE_SERVER}/one`, {
                        headers: {
                            'sub': sessionAccess?.sub,
                        }
                    })
                    .then((response: any) => {
                        console.log(response);
                        try {
                            dispatch(addUser({
                                userId: sessionAccess?.username,
                                username: sessionId?.name,
                                confirmed: sessionId?.email_verified,
                                sub: sessionAccess?.jti,
                                exp: sessionAccess?.exp,
                                dbuid: response.data.userId,
                        } as userOptions));

                        document.cookie = `userid=${sessionAccess?.username}`;
                        document.cookie = `username=${sessionId?.name}`;
                        document.cookie = `uconfirmed=${sessionId?.email_verified}`;
                        document.cookie = `sub=${sessionAccess?.jti}`;
                        document.cookie = `exp=${sessionAccess?.exp}`;
                        document.cookie = `dbuid=${response.data.userId}`

                        navigate("/home");
                        window.location.reload();

                        } catch (error) {
                            return error;
                        }
                    })
                    .catch((err: Error) => {
                        return err;  
                    })
                
                    if (data == null) {
                        return null;
                    }
                } catch (error) {
                    return error;
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label htmlFor="lusername">Email</label>
                <input type="text" id="lusername" name="lusername" placeholder="your-email@example.com"></input>

                <label htmlFor="lpassword">Password</label>
                <input type="text" id="lpassword" name="lpassword" placeholder="password (shhhh)"></input>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignIn;