import React from 'react';
import DataTable from 'react-data-table-component';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';


import Edit from './Edit';



const API = "https://jsonplaceholder.typicode.com/users";

const Table = () => {


    const [users, setUsers] = useState([]);

    const fetchUsers = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data.length > 0) {
                setUsers(data);
            }
            console.log(data);
        } catch (e) {
            console.error(e)
        }
    }
  
  
    useEffect(() => {
        fetchUsers(API);
    }, [])
   
    return (
        
        <table className='content-table'>
           
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Action</th>
            </tr>
            </thead>
         
            <tbody>
            {

users.map((currUser) => {
    const { id, name, email ,address} = currUser;
    return (
        <tr key={id} className="active-row">
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{address.city}</td>
            <td><Link to="/edit"><i class="fa-solid fa-pen-to-square"></i></Link></td>
      
        </tr>
    )
})
}

         
            </tbody>
        </table>
   
  );
}

export default Table;
