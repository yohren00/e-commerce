import React, { useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "./sing-in.style.scss";
import Input from "../input/input.jsx";

export default function SingIN() {
    const [accountPassword, setAccountPassword] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = e => {
        e.preventDefault();
        setAccountPassword({ ...accountPassword, email: "", password: "", });
    }

    const handleChange = e => {
        const { value, name } = e.target;
        console.log(value)
        console.log(name)
        setAccountPassword({ ...accountPassword, [name]: value });
    }


    return <>
        <div className="sing-in">
            <h2>登入</h2>
            <span>使用您的帳號</span>
            <from onSubmit={handleSubmit}>
                <Input
                    name="email"
                    type="email"
                    required
                    value={accountPassword.email}
                    handleChange={handleChange}
                    label="Email"
                />
                <Input
                    name="password"
                    type="password"
                    required
                    value={accountPassword.password}
                    handleChange={handleChange}
                    label="Password"
                />
                <input type="submit" value="確認" />
                {/* <div>
                    <TextField
                        id="standard-basic"
                        label="email"
                        value={accountPassword.email}
                        required
                        onChange={handleChangeEmail}
                    />
                </div>
                <div>
                    <TextField
                        id="standard-basic"
                        label="password"
                        type="password"
                        required
                        value={accountPassword.password}
                        onChange={handleChangePassword}
                    />
                </div>
                <div className="buttons">
                    <Button className="button1" variant="contained" color="primary">登入</Button>
                    <Button className="button2" variant="contained" color="primary">google登入</Button>
                </div> */}
            </from>
        </div>
    </>
}