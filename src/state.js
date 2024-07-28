import React,{useState} from 'react';

function app() {
    const [isOnline, setIsonline] = useState(true);

    const toggleStatus = () => {
        setIsonline(!isOnline);
    };
    return(
        <div>
            <h1>Online status: {isOnline? 'Online' : 'Offline'}</h1>
            <button onClick={toggleStatus}>Ganti Status</button>
            
        </div>
    )
}