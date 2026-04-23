import styles from "./Login.module.css";
import { useState } from "react";

function Login(){

    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };

    return(
        <div className = {styles.login_container}>
            <form className = {styles.login_box} onSubmit = {handleSubmit}>
                <h2>Login</h2>

                <input
                type = "text"
                placeholder = "Username"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                />


                <input
                type = "text"
                placeholder = "Enter enamil"
                value = {email}
                onChange = {(e) => setEmail(e.target.value)}
                />

                <input
                type = "password"
                placeholder = "Enter password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />

                <button type = "submit">Login</button>
            </form>
        </div>
    );
}
export default Login;