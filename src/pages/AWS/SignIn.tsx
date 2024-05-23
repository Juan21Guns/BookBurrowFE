function SignIn () {
    return (
        <>
            <form>
                <label htmlFor="username">Email</label>
                <input type="text" placeholder="your-email@example.com"></input>

                <label htmlFor="password">Password</label>
                <input type="text" placeholder="password (shhhh)"></input>
            </form>
        </>
    )
}

export default SignIn;