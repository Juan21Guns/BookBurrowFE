import { CognitoUserPool } from "amazon-cognito-identity-js"
// import { defineConfig, loadEnv } from 'vite'

const poolData = {
    UserPoolId: 'us-east-1_OpSTDWDUC',
    ClientId: import.meta.env.VITE_ClientId
}

console.log(import.meta.env.VITE_UserId)
export default new CognitoUserPool(poolData);