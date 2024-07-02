import  { useEffect, useState } from 'react'


function MutipleReturn() {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => { 
        async function fetchUsers()  { 
            try { 
                const response = await  fetch('https://api.github.com/users'); 
                const data = await response.json();
                setUsers(data);
                setIsLoading(false);
            }
            catch { 
                setError(error); 
                setIsLoading(false);
            }
        }
        fetchUsers
    },[])
    if(isLoading) { 
        return <p>loading ... </p>
    }
    if(error) { 
        return <p>Error ...  {error.message}</p>
    }

    return (
    <div>
        <h1>Users list</h1>
        <ul>
            {
                users.map( user => { 
                    return  <li key={user.id}>{user.login}</li>
                })
            }
        </ul>
    </div>
  )
}

export default MutipleReturn