import * as React from "react";
import { useRouter } from 'next/router'
import Link from 'next/link'
import Navbar from './navlistusers'
import Header from './head'

export default function App() {
    const router = useRouter()
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
    };
    React.useEffect(() => {
        f();
    }, []);
    return (
        <div className="App">
            <Header />
            <Navbar />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous" />
            <h1>Users List</h1>
            <Link href='/create'>
                <a>Create Users</a>
            </Link>
            <div className="flex">
                {users.length &&
                    users.map((user) => {
                        return (

                            <div key={user.id}>
                                <p>
                                    <strong>{user.first_name}</strong>
                                    <strong>{user.last_name}</strong>
                                </p>

                                <p>{user.email}</p>
                                <img key={user.avatar} src={user.avatar} />
                                <li>
                                    <Link
                                        href={{
                                            pathname: "/detail",
                                            query: { id: user.id },
                                        }}
                                    >
                                        <button>Detail</button>
                                    </Link>
                                </li>

                            </div>  
                        );
                    })
                }
            </div>
        </div>


    );
}
