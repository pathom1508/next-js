import Link from "next/link";
import { useRouter } from 'next/router'
import * as React from "react";


export default function AboutPage() {
    const router = useRouter()
    const {
        query: { id },
    } = router

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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
                rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                crossorigin="anonymous" />
            <h1>User Detail</h1>
            <div className="flex">
                {users.length &&
                    users.map((user) => {

                        return (
                            <div>
                                <center>
                                    {id == user.id ?

                                        <p>
                                            <strong>{user.first_name}</strong>

                                            <strong>{user.last_name}</strong>
                                            <br />
                                            <strong>{user.email}</strong>
                                            <br />
                                            <img key={user.avatar} src={user.avatar} />
                                            <br />

                                            <form action="https://reqres.in/api/users/2" method="PUT">
                                                <br />
                                                <br />
                                                <label for="name">Name</label>
                                                <input
                                                    value={user.first_name}
                                                    id="first_name" type="text"
                                                    autocomplete="name"
                                                    required />
                                                <br />
                                                <br />
                                                <label for="name">Lastname</label>
                                                <input
                                                    value={user.last_name}
                                                    id="last_name" type="text"
                                                    autocomplete="name"
                                                    required />
                                                <br />
                                                <br />
                                                <label for="name">Email</label>
                                                <input
                                                    value={user.email}
                                                    id="email" type="text"
                                                    autocomplete="name"
                                                    required />
                                                <br />
                                                <br />
                                                <label for="name">Avatar</label>
                                                <input
                                                    value={user.avatar}
                                                    id="avatar" type="text"
                                                    autocomplete="name"
                                                    required />
                                                <br />
                                                <br />
                                                <button type="submit">Submit</button>
                                            </form>
                                            <br />
                                            <br />
                                            <form action="https://reqres.in/api/users/2" method="DELETE">
                                                <button type="submit">Delete User</button>
                                            </form>
                                        </p>

                                        : ('')
                                    }
                                </center>
                            </div>
                        );

                    })
                }
            </div>
        </div>


    );
}