// import React, { useState } from 'react';
// import {resendSignUpCode} from 'aws-amplify/auth';

// const ResendConfirmationCode = () => {
//     const [username, setUsername] = useState('');
//     const [error, setError] = useState(null);

//     const handleResendCode = async (e: any) => {
//         e.preventDefault();
//         try {
//             await resendSignUpCode(username);
//             console.log('Code resent successfully');
//         } catch (error) {
//             console.error('Error resending code:', error);
//             setError(error.message);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleResendCode}>
//                 <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
//                 <button type="submit">Resend Code</button>
//             </form>
//             {error && <p>{error}</p>}
//         </div>
//     );
// };

// export default ResendConfirmationCode;