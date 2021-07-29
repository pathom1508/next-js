import Link from "next/link";
import { useRouter } from 'next/router'
import * as React from "react";


export default function AboutPage() {


    return (

        <div className="App">
            <h1>Create Users</h1>
            <p>

                <form action="https://reqres.in/api/users2" method="POST">
                    <br />
                    <br />
                    <input
                        id="first_name"
                        type="text"
                        autocomplete="firatname"
                        required
                        placeholder="Name"
                    />
                    <br />
                    <br />
                    <input
                        id="last_name"
                        type="text"
                        autocomplete="lastname"
                        required
                        placeholder="Lastname"
                    />
                    <br />
                    <br />
                    <input
                        id="email"
                        type="text"
                        autocomplete="email"
                        required
                        placeholder="Email"
                    />
                    <br />
                    <br />
                    <input
                        id="avater"
                        type="text"
                        autocomplete="avatar"
                        required
                        placeholder="Avatar"
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>

            </p>
        </div>

    );
}