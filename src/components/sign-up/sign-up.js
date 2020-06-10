import React, { useState } from "react";
import Input from "../input/input.jsx";
import CustomButton from "../custcom-button/custom-button.jsx";
import { auth, createUsersProfileDocument } from "../../firebase/firebase.utils.js";
import "./sign-up.styles.scss";
import Swal from "sweetalert2";

export default function SignUp() {
    const [loginData, setLoginData] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async e => {
        e.preventDefault();
        if (loginData.password !== loginData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: '密碼錯誤',
                text: '請再次從新輸入密碼!',
            })
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(loginData.email, loginData.password);
            await createUsersProfileDocument(user, loginData.displayName);
            setLoginData({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = e => {
        const { value, name } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return <>
        <div className="sign-up">
            <h2 className="title">註冊帳號</h2>
            <span>註冊您的email與密碼</span>
            <from className="sign-up-form" onSubmit={handleSubmit}>
                <Input
                    type="text"
                    name="displayName"
                    required
                    value={loginData.displayName}
                    handleChange={handleChange}
                    label="姓名"
                />
                <Input
                    type="email"
                    name="email"
                    required
                    value={loginData.email}
                    handleChange={handleChange}
                    label="email"
                />
                <Input
                    type="password"
                    name="password"
                    required
                    value={loginData.password}
                    handleChange={handleChange}
                    label="密碼"
                />
                <Input
                    type="password"
                    name="confirmPassword"
                    required
                    value={loginData.confirmPassword}
                    handleChange={handleChange}
                    label="密碼確認"
                />
                <CustomButton type="submit" >註冊</CustomButton>
            </from>
        </div>

    </>
}
