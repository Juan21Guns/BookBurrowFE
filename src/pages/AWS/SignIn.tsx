import { signIn, signOut } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";

function SignIn () {
    const navigate = useNavigate();

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
                navigate("/home");
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