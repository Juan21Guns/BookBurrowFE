import React from "react";
import SignIn from "./SignIn";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

function Authentication () {
    const navigate = useNavigate();
    
    const [switchComp, setSwitchComp] = React.useState(true);
    const [comp, setComp] = React.useState(<SignIn />);
    const [underLink, setUnderLink] = React.useState("New user? Sign up here!");
    
    const handleClick = () => {
        if (switchComp === true) {
            setComp(<SignUp />);
            setSwitchComp(!switchComp);
            setUnderLink("Already a user? Sign in here!");
        } else {
            setComp(<SignIn />)
            setSwitchComp(!switchComp);
            setUnderLink("New user? Sign up here!");
        }
    }

    return (
        <>
            {comp}
            <button onClick={handleClick} id="linkToSignUp" >{underLink}</button>    
        </>
    )
}

export default Authentication;