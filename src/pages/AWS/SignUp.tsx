import { Amplify } from "aws-amplify";
import awsmobile from "../../aws-exports";
import { signUp } from "aws-amplify/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { addUser, removeUser } from "../../redux/userSlice";

Amplify.configure(awsmobile)

function SignUp () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function handleSubmit(e: any) {
        e.preventDefault()
        const form = e.currentTarget
        
        try {
            const { isSignUpComplete, userId, nextStep } = await signUp({
                username: form.elements.email.value,
                password: form.elements.password.value,
                options: {
                    userAttributes: {
                        email: form.elements.email.value,
                        name: form.elements.fullName.value,
                        birthdate: form.elements.birthdate.value,
                        gender: form.elements.gender.value,
                    },
                    autoSignIn: {
                        enabled: true,
                    }
                }
            })

            try {
                dispatch(addUser({
                    userId: userId,
                    username: form.elements.fullName.value,
                    confirmed: isSignUpComplete,
                }));
            } catch (error) {
                console.log(error);
            }
            navigate('/confirm');

            console.log(isSignUpComplete);
            console.log(userId);
            console.log(nextStep);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Name:</label>
                <input type="text" id="fullName" name="fullName" />

                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="text" id="confirm_password" name="confirm_password" />
                
                <label htmlFor="birthdate">Birthdate:</label>
                <input type="date" id="birthdate" name="birthdate" />
                
                <label htmlFor="male">Male:</label>
                <input type="radio" id="male" name="gender" />
                <label htmlFor="female">Female:</label>
                <input type="radio" id="female" name="gender" />
                
                <button name="submit">Submit</button>
            </form>
        </>
    )
}

export default SignUp;