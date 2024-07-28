import React,{useState, useEffect }  from 'react';
 function Userlist() {
    const [users, setUsers] = useState([]);
    const[loading, setLoading] = usestate{true};
    https://
    useEffect(() => {
        fetch('api.data.gov.sg/v1/environment/air-temperature')
       .then(response => response.json())
       .then(data =>{
        setUsers(data));
        setLoading(false);
       } 
       .catch(error =>{
        console.error('Error fetching data:', error);
        setLoading(false);
       }); 
    }, []);

    if(loading){
        return <p>Loading...</p>
    }
    return(
    <div>
        <h1> Daftar Pengguna</h1>
        <ul>
            {users.data.map(user =>(
                <li key={user.id}>
                    {user.name}
                </li>
            ))}    
        </ul>
    </div>
    );
}

export default Userlist;
