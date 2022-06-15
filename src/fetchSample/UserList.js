import React, { useState } from 'react';
import { useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    // HTTP Get metodu ile veri çekiyoruz -> Default ayar
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setTimeout(() => {
          setUsers(data);
          setLoading(false);
        }, 2000);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const removeUser = id => {
    let requestOptions = {
      method: 'DELETE',
    };
    // fetch ile mevcut servisten kullanıcı silinecek
    fetch('https://jsonplaceholder.typicode.com/users/' + id, requestOptions)
      .then(response => {
        return response.json();
      })
      .then(data => {
        let newUsers = users.filter(q => q.id != id);
        setUsers(newUsers);
      });
  };

  return (
    <>
      {loading == true ? (
        <span>loading...</span>
      ) : (
        <table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>User Name</td>
            <td>Email</td>
            <td>Remove</td>
          </tr>

          {users &&
            users.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => removeUser(item.id)}>Remove</button>
                  </td>
                </tr>
              );
            })}
        </table>
      )}
    </>
  );
};

export default UserList;
