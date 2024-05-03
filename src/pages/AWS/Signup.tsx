import React, { useState } from "react"
import UserPool from "./UserPool"
import { CognitoUserAttribute } from "amazon-cognito-identity-js"

function Signup () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [birthday, setBirthday] = useState("")
    const [gender, setGender] = useState("")
    const [name, setName] = useState("")
    const [nickname, setNickname] = useState("")

    const onSubmit = (event: any) => {
        event.preventDefault()

        const dataFullname = { Name: 'name', Value: name }
        const dataNickname = { Name: 'nickname', Value: nickname }
        const dataBirthday = { Name: 'birthdate', Value: birthday }
        const dataGender = { Name: 'gender', Value: gender }

        const attributeList = [
            new CognitoUserAttribute(dataFullname),
            new CognitoUserAttribute(dataNickname),
            new CognitoUserAttribute(dataBirthday),
            new CognitoUserAttribute(dataGender),
          ]

        UserPool.signUp(email, password, attributeList, [], (err, data) =>{
            if (err) {
                console.log(err);
            }
            console.log(data);
        })
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="fullname">Name</label>
                <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                ></input>
                <label htmlFor="nickname">Nickname</label>
                <input
                    value={nickname}
                    onChange={(event) => setNickname(event.target.value)}
                ></input>

                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                ></input>
                
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(event) => setPassword(event.target.value)}
                ></input>

                <label htmlFor="date">Birthdate</label>
                <input type="date" value={birthday} onChange={(event) => setBirthday(event.target.value)}
                ></input>

                <label htmlFor="gender">Gender</label>
                <label htmlFor="gender">Male</label>
                <input type="radio" name="gender" value="male" onChange={(event) => setGender(event.target.value)}
                ></input>
                <label htmlFor="gender">Female</label>
                <input type="radio" name="gender" value="female" onChange={(event) => setGender(event.target.value)}
                ></input>
                <button type="submit">Signup</button>
            </form>
        </div>
    )
}

export default Signup