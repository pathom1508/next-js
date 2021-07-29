import React from "react"
import Link from "next/link"
// import React, { Component } from 'react'
import Navbar from './nevlog'
import Header from './head'
import { useHistory } from "react-router"
import { useRouter } from 'next/router'

<link rel="stylesheet" href="styles.css"></link>
export default function Login() {

  const history = useHistory();
  const router = useRouter()
  const {
    query: { email, password },
  } = router

  return (


    <div className="Login">
      <Header />
      <Navbar />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous" />
      <center>
        <h1>Login</h1>
        {/* {input.email == user.email &&
          input.password == user.id ?
          <link href='https://reqres.in/api/login' 
          
          
          : (' ')} */}

        <br />
        <form action="https://reqres.in/api/users" method="POST">
          <p>
            <input
              id="email" type="text"
              autocomplete="email"
              required
              placeholder="Email"
            />
          </p>
          <p>
            <input
              id="password"
              type="text"
              autocomplete="password"
              required
              placeholder="Password"
            />
          </p>
          <Link href='/listusers'>
            <button type="submit">Login</button>
          </Link>
        </form>
        <br />


        <button>
          <Link href='/register'>
            <a>Register</a>
          </Link>
        </button>
      </center>

    </div>
  )
}




