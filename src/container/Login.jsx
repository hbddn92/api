import React from 'react'
import Input from '@material-ui/core/Input';

class Login extends React.Component {
    // constructor() {

    // }

    render() {
        return(
            <div className="pageLogin">
                <div className="login">
                    <h2>Login</h2>
                    <form action="">
                        <Input
                            className="loginUser"
                            placeholder="UserName"
                        />
                        <Input
                            className="loginPass"
                            placeholder="Password"
                        />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login