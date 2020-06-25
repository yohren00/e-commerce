import React, { useState } from "react";
import Swal from "sweetalert2";

import "./sign-in.style.scss";
import Input from "../input/input.jsx";
import CustomButton from "../custcom-button/custom-button.jsx";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils.js";


export default function SignIN() {
    const [accountPassword, setAccountPassword] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(accountPassword.email, accountPassword.password);
            setAccountPassword({ email: "", password: "" })
        } catch (error) {
            if (error.message === "There is no user record corresponding to this identifier. The user may have been deleted.") {
                Swal.fire({
                    icon: 'error',
                    title: "登入失敗",
                    text: '此帳號不存在，請重新輸入!',
                })
            }
            if (error.message === "The password is invalid or the user does not have a password.") {
                Swal.fire({
                    icon: 'error',
                    title: "登入失敗",
                    text: '密碼輸入錯誤，請重新輸入!',
                })
            }
        }
        setAccountPassword({ ...accountPassword, email: "", password: "", });
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setAccountPassword({ ...accountPassword, [name]: value });
    };


    return <>
        <div className="sign-in">
            <h2>登入</h2>
            <span>使用您的帳號</span>
            <form onSubmit={handleSubmit}>
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
                    label="密碼"
                />
                <div className="button">
                    <CustomButton type="submit" >確認</CustomButton>
                    <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>使用google登入</CustomButton>
                </div>
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
            </form>
        </div>
    </>
}