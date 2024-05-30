import { fetchAuthSession, signIn, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import userOptions from "./userOptions";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/userSlice";

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
                    dispatch(addUser({
                        userId: sessionAccess?.username,
                        username: sessionId?.name,
                        confirmed: sessionId?.email_verified,
                        sub: sessionAccess?.jti,
                        exp: sessionAccess?.exp,
                    } as userOptions));

                    document.cookie = `userid=${sessionAccess?.username}`;
                    document.cookie = `username=${sessionId?.name}`;
                    document.cookie = `uconfirmed=${sessionId?.email_verified}`;
                    document.cookie = `sub=${sessionAccess?.jti}`;
                    document.cookie = `exp=${sessionAccess?.exp}`;

                    navigate("/home");
                    window.location.reload();
                } catch (error) {
                    console.log(error);
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