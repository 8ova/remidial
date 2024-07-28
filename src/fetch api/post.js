import React, { useState} from 'react';

function AddUser() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handlesubmit = {event} => {
        event.preventDefault();
        fetch('api.data.gov.sg/v1/environment/air-temperature',{
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('User added:', data);

            setName('');
            setEmail('');
        })
        .catch(error =>{
            console.error('Error:', error);
        } );
     
    };
    return (
        <div>
            <h1>Tambash kan Pengguna</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Nama"
                Value={name}
                onChange={(e) => setName (e.target.Value)}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail (e.target.value)}
                />
                <button type="submit">Tambahkan</button>
            </form>
        </div>
    );

}
export default AddUser;
