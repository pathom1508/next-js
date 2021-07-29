// import axios from "axios";
// import Providers from "next-auth/providers";
// import NextAuth from "next-auth";

// const option = {
//     provider : [
//         Providers.Credentials({
//             name: "Custom Provider",
//             credentials: {
//                 username: { label: "Email", type: "text", placeholder: "eve.holt@reqres.in"},
//                 username: { label: "Password", type: "password", placeholder: "pistol"},
//             }
//         })
//     ]
// }

import React from "react"
import Navbar from './nevlog'
import Header from './head'
import { useHistory } from "react-router"

export default function Register() {
    const history= useHistory();
   
    return (
        <div >
            <Header />
            <Navbar />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous" />
            <center>
                <h1>Register</h1>
                <br />
                <form>
                    {/* <label for="email">Email</label> */}
                    <input id="email" type="text" autocomplete="email" required placeholder="Email" />
                    <br />
                    <br />
                    {/* <label for="password">Password</label> */}
                    <input id="password" type="text" autocomplete="password" required placeholder="Password"  />
                    <br />
                    <br />
                    <button type="submit" >Sign Up</button>
                </form>
            </center>
           
        </div >   
    )
    history.push("/listusers")
}
