import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react'
import Navbar from './nev'
import Header from './head'
// import './style/App.css'
const Index = () => (
    <div className="title">

        <head>
            <title>Home Page</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous" />
        </head>
        <center>
            <h1>Home page</h1>
        </center>
        <br />
        <ul>
            <Link href='/login'>
                <a>Login</a>
            </Link>
            <br />
            <Link href='/listusers'>
                <a>List</a>
            </Link>
        </ul>
    </div>
)

export default Index

// export default function FirstPost() {
//     return (
//       <>
//         <Head>
//           <title>First Post</title>
//         </Head>
//         <h1>First Post</h1>
//         <h2>
//           <Link href="/">
//             <a>Back to home</a>
//           </Link>
//         </h2>
//       </>
//     )
//   }


